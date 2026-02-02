# Etapa de build: compila o React/Vite
FROM node:20-alpine AS builder

WORKDIR /app

# Copia deps primeiro para cache melhor
COPY package*.json ./

# Usa npm install (mais tolerante se lockfile estiver ausente ou inconsistente)
RUN npm install

# Copia todo o código
COPY . .

# Build (seu script é "tsc && vite build")
RUN npm run build

# Etapa de produção: Nginx serve os arquivos
FROM nginx:alpine

# Copia o build gerado (dist/)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia config custom do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Garante que o index.html exista e seja o default
RUN if [ ! -f /usr/share/nginx/html/index.html ]; then echo "<h1>Erro: index.html não encontrado no dist/</h1>" > /usr/share/nginx/html/index.html; fi

# Expõe porta 80 (Easypanel espera isso)
EXPOSE 80

# Healthcheck para Traefik/Easypanel saber que está vivo
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
