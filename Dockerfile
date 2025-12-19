# Build stage
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3006
ENV HOSTNAME=0.0.0.0

EXPOSE 3006

CMD ["npm", "run", "start"]