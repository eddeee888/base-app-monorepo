FROM node:12.18.0-alpine3.11 AS base

ENV PRISMA_BINARY_TARGET native
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN yarn install --pure-lockfile
RUN yarn prisma:generate:dev