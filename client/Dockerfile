FROM node:12.8.0-alpine AS base
ARG GRAPHQL_END_POINT
ENV GRAPHQL_END_POINT=${GRAPHQL_END_POINT}
ARG BIT_NPM_TOKEN
ENV BIT_NPM_TOKEN=${BIT_NPM_TOKEN}
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY . . 
RUN ./scripts/setenv.sh
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
RUN ls
CMD ["serve", "."]