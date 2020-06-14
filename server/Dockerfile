FROM node:12.18.0-alpine3.11 AS base

ENV PRISMA_BINARY_TARGET native
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN yarn install --pure-lockfile
RUN yarn prisma:generate

FROM base as build
WORKDIR /usr/src/app
RUN yarn build

FROM node:12.8.0-alpine as final
WORKDIR /usr/src/app 
COPY --from=build /usr/src/app/build .
COPY --from=build /usr/src/app/package.json .
CMD ["yarn", "serve"]