FROM nginx:1.17.2-alpine 

RUN apk update \ 
  && apk add bash \
  && apk add openssl \
  && rm -rf /var/cache/apk/*

WORKDIR /opt

COPY ./certificates/device.crt /usr/share/nginx/certificates/device.crt
COPY ./certificates/device.key /usr/share/nginx/certificates/device.key

COPY http.conf /etc/nginx/conf.d/http.conf

COPY entrypoint.sh entrypoint.sh

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
