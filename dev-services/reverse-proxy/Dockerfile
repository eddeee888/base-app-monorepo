FROM nginx:1.22.0-alpine

RUN apk update \ 
  && apk add bash \
  && apk add openssl \
  && rm -rf /var/cache/apk/*

WORKDIR /opt

COPY ./dev-services/reverse-proxy/certificates/primary/device.crt /usr/share/nginx/certificates/primary/device.crt
COPY ./dev-services/reverse-proxy/certificates/primary/device.key /usr/share/nginx/certificates/primary/device.key

COPY ./dev-services/reverse-proxy/proxy.conf /etc/nginx/proxy.conf
COPY ./dev-services/reverse-proxy/ws.conf /etc/nginx/ws.conf
