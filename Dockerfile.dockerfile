FROM node:20-alpine-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build --prod

FROM node:20-alpine-slim

RUN addgroup -S app && adduser -S app -G app
USER app

RUN npm install -g http-server

WORKDIR /app
COPY --from=builder /app/dist/evaluacion-docente /app

EXPOSE 8080
CMD ["http-server", "-p", "8080", "-c-1"]
