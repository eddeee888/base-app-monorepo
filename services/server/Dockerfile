FROM node:12.18.0-alpine3.11 AS base
ENV NODE_ENV=development
ENV PRISMA_BINARY_TARGET=native
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN yarn install --frozen-lockfile
RUN yarn prisma:generate:dev
# TODO:HACK Hack to get full-icu working in node 12. This should be removed when node 13 is supported in lambda
RUN yarn add full-icu
ENV NODE_ICU_DATA=/usr/src/app/node_modules/full-icu

FROM base AS builder
WORKDIR /usr/src/app
RUN NODE_ENV=production yarn build

FROM node:12.18.0-alpine3.11 as final
WORKDIR /usr/src/app 
ENV PRISMA_BINARY_TARGET=native
ENV NODE_ICU_DATA=/usr/src/app/node_modules/full-icu
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma
RUN yarn global add pm2
CMD ["serve:prod"]
ENTRYPOINT ["yarn"]
