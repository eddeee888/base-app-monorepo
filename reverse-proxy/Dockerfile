FROM nginx:1.17.2-alpine 

RUN apk update \ 
  && apk add bash \
  && apk add openssl \
  && rm -rf /var/cache/apk/*

WORKDIR /opt

COPY ./certificates/fullchain.pem /usr/share/nginx/certificates/fullchain.pem
COPY ./certificates/privkey.pem /usr/share/nginx/certificates/privkey.pem

COPY http.conf /etc/nginx/conf.d/http.conf

COPY entrypoint.sh entrypoint.sh

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
