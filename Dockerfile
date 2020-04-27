FROM nginx:latest
LABEL maintainer="chuyuxuan@126.com"
COPY ./build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
