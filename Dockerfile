# ==============================================================================
# 🚀 NoteHub 极速版运行环境 (仅限编译解耦架构使用)
# 职责：提供高性能 Nginx 环境，托管已由 GitHub Actions 编译好的静态文件
# ==============================================================================

# 阶段 1：使用体积最小的 Nginx Alpine 镜像作为基座（压缩后仅约 20MB）
FROM nginx:alpine

# 维护者信息
LABEL maintainer="NoteHub-Cheng"

# --- 核心操作：拷贝静态资源 ---
# 注意：此处的路径 'docs/.vitepress/dist' 必须与 GitHub Actions 编译出的产物路径一致。
# 由于我们在 Dockerfile 之外执行了 npm run build，这里只需直接将结果塞进 Nginx 默认目录。
COPY docs/.vitepress/dist /usr/share/nginx/html

# --- 端口配置 ---
# 容器内部监听 80 端口
EXPOSE 80

# --- 启动命令 ---
# 以非守护进程模式运行 Nginx，确保容器能够持续运行而不退出
CMD ["nginx", "-g", "daemon off;"]