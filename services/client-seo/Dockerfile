FROM node:14.17.3-alpine AS base
WORKDIR /usr/src/app
RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . .
RUN yarn install
