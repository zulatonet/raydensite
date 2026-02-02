# Etapa de build
FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci  # Use ci para instalação limpa e rápida

COPY . .

RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]