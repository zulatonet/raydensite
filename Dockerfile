# Etapa 1: Build do app React/Vite
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os arquivos de dependências primeiro (melhora cache do Docker)
COPY package*.json ./

# Usa npm install em vez de ci (caso o lockfile não esteja presente ou dê problema)
# Se você já tem package-lock.json commitado, pode mudar para "npm ci"
RUN npm install

# Copia o resto do código fonte
COPY . .

# Roda o build (tsc && vite build, conforme seu package.json)
RUN npm run build

# Etapa 2: Imagem de produção com Nginx
FROM nginx:alpine

# Copia os arquivos gerados na pasta dist para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração custom do Nginx (para SPA + MIME correto)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 (o Easypanel espera isso)
EXPOSE 80

# Healthcheck para o Easypanel/Traefik saber que o container está saudável
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Inicia o Nginx em foreground
CMD ["nginx", "-g", "daemon off;"]
