FROM node:20-alpine AS builder
WORKDIR /app

# 关键修复 1：安装 git，让 VitePress 能读取最后更新时间
RUN apk add --no-cache git

COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# 关键修复 2：修正了打包产物的路径 (加入了 docs)
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
