FROM node:14.17.3-alpine AS base
ENV NODE_ENV=development
ENV PRISMA_BINARY_TARGET='["native"]'
WORKDIR /usr/src/app
RUN apk update \ 
  && apk add bash \
  && rm -rf /var/cache/apk/*
COPY . . 
RUN yarn install
RUN yarn prisma:generate:native

FROM base AS builder
WORKDIR /usr/src/app
RUN NODE_ENV=production yarn build:app

FROM node:14.17.3-alpine as final
WORKDIR /usr/src/app 
ENV PRISMA_BINARY_TARGET='["native"]'
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/prisma ./prisma
RUN yarn global add pm2
CMD ["serve:app:prod"]
ENTRYPOINT ["yarn"]
