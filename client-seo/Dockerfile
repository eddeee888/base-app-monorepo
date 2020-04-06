FROM node:12.8.0-alpine AS base

RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . . 
RUN yarn install --pure-lockfile

FROM base as build
WORKDIR /usr/src/app
COPY . .
RUN yarn build
