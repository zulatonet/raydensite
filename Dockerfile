# Build do app Vite/React
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve com Nginx + MIME correto
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx config: SPA + MIME explícito
RUN echo '\
server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  \
  location / { \
    try_files $uri $uri/ /index.html; \
  } \
  \
  types { \
    application/javascript js mjs; \
    text/css css; \
    application/json json; \
    image/svg+xml svg svgz; \
    image/png png; \
    image/jpeg jpg jpeg; \
  } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
