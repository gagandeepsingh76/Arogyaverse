FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=base /app/node_modules ./node_modules
COPY backend ./backend
COPY package.json ./package.json

EXPOSE 4000
CMD ["node", "backend/server.mjs"]

