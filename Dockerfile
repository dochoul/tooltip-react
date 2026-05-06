# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Vite는 dist/, CRA는 build/ 이므로 확인 필요
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]