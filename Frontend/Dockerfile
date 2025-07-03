FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM caddy:alpine

COPY --from=builder /app/dist/evaluacion-docente/browser /usr/share/caddy

EXPOSE 80
