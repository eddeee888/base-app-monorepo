FROM node:12.18.0-alpine3.11 AS base
WORKDIR /usr/src/app
RUN apk update \
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . .
RUN yarn install --frozen-lockfile
# TODO:HACK Hack to get full-icu working in node 12. This should be removed when node 13 is supported in lambda
RUN yarn add full-icu
ENV NODE_ICU_DATA=/usr/src/app/node_modules/full-icu