FROM node:17.3-alpine AS base
WORKDIR /usr/src/app
RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
RUN yarn global add nx

COPY . .
RUN yarn install
