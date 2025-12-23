# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copier uniquement les fichiers de dépendances d'abord (cache Docker)
COPY package*.json ./
RUN npm ci --only=production=false

# Copier le reste du code source
COPY . .

# Build Next.js
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

ENV NODE_ENV=production
ENV PORT=3006
ENV HOSTNAME=0.0.0.0

EXPOSE 3006

CMD ["npm", "run", "start"]