FROM node:12.8.0-alpine as base

ARG BIT_NPM_TOKEN

WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN ./scripts/set_up_bit.sh $BIT_NPM_TOKEN
RUN yarn install --pure-lockfile

FROM base as build
WORKDIR /usr/src/app
RUN yarn build

FROM node:12.8.0-alpine as final
WORKDIR /usr/src/app 
COPY --from=build /usr/src/app/build .
COPY --from=build /usr/src/app/package.json .
CMD ["yarn", "serve"]