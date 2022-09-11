FROM nginx:1.23.1-alpine

RUN apk update \ 
  && apk add bash \
  && apk add openssl \
  && rm -rf /var/cache/apk/*

WORKDIR /opt

COPY ./dev-tools/reverse-proxy/certificates/primary/device.crt /usr/share/nginx/certificates/primary/device.crt
COPY ./dev-tools/reverse-proxy/certificates/primary/device.key /usr/share/nginx/certificates/primary/device.key

COPY ./dev-tools/reverse-proxy/proxy.conf /etc/nginx/proxy.conf
COPY ./dev-tools/reverse-proxy/ws.conf /etc/nginx/ws.conf
