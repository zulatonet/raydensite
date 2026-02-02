# Etapa 1: Build do React/Vite
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Instala dependências (usa install para tolerar lockfile ausente ou inconsistente)
RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Nginx production
FROM nginx:alpine

# Copia os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia config Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Força MIME types manualmente (sem depender do include que pode falhar)
# Isso garante text/html para .html e evita download
COPY mime.types /etc/nginx/mime.types

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
