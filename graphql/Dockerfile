FROM node:12.8.0-alpine as base
ARG BIT_NPM_TOKEN
ENV BIT_NPM_TOKEN=${BIT_NPM_TOKEN}
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN ./scripts/setenv.sh

FROM base as build
WORKDIR /usr/src/app
RUN yarn install

FROM node:12.8.0-alpine as final
WORKDIR /usr/src/app 
COPY --from=base /usr/src/app/node_modules .
COPY --from=base /usr/src/app/src .
COPY --from=base /usr/src/app/package.json .

CMD ["yarn", "serve"]