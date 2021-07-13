FROM nginx:1.20.1-alpine

RUN apk update \ 
  && apk add bash \
  && apk add openssl \
  && rm -rf /var/cache/apk/*

WORKDIR /opt

COPY ./certificates/client-seo/device.crt /usr/share/nginx/certificates/client-seo/device.crt
COPY ./certificates/client-seo/device.key /usr/share/nginx/certificates/client-seo/device.key

COPY ./certificates/client/device.crt /usr/share/nginx/certificates/client/device.crt
COPY ./certificates/client/device.key /usr/share/nginx/certificates/client/device.key

COPY ./certificates/server/device.crt /usr/share/nginx/certificates/server/device.crt
COPY ./certificates/server/device.key /usr/share/nginx/certificates/server/device.key

COPY http.conf /etc/nginx/conf.d/http.conf
COPY proxy.conf /etc/nginx/proxy.conf
COPY ws.conf /etc/nginx/ws.conf

COPY entrypoint.sh entrypoint.sh

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
