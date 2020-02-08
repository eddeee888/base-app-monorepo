FROM node:12.8.0-alpine AS base

ARG BIT_NPM_TOKEN

RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . . 
RUN ./scripts/set_up_bit.sh $BIT_NPM_TOKEN
RUN yarn install

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