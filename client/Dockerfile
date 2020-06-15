FROM node:12.18.0-alpine3.11 AS base

RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . . 
RUN yarn install --pure-lockfile

FROM base as build
WORKDIR /usr/src/app
COPY public public/
COPY src src/
RUN yarn build

FROM node:12.8.0-alpine as final
WORKDIR /usr/src/app
RUN yarn global add serve
COPY --from=build /usr/src/app/build .
CMD ["serve", "."]