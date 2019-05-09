FROM node:10.13.0-alpine

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY . /srv/app/client

CMD ["sh", "/srv/app/client/start.sh"]