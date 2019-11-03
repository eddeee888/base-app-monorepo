FROM node:12.8.0-alpine AS base

ARG BIT_NPM_TOKEN
ENV BIT_NPM_TOKEN=${BIT_NPM_TOKEN}
ARG GRAPHQL_ENDPOINT
ENV GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT}

RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . . 
RUN ./scripts/setenv.sh

FROM base as build
WORKDIR /usr/src/app
COPY public public/
COPY src src/
RUN yarn install
RUN yarn build

FROM node:12.8.0-alpine as final
WORKDIR /usr/src/app
RUN yarn global add serve
COPY --from=build /usr/src/app/build .
CMD ["serve", "."]