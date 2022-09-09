FROM node:18.9-alpine

WORKDIR /usr/src/app

RUN apk update \
  && apk add bash git curl \
  && rm -rf /var/cache/apk/*

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install \
  && rm -rf $(yarn cache dir)

COPY . .

RUN yarn nx run main:build-for-runtime:e2e

CMD ["yarn", "--cwd", "dist/apps/main" , "start"]
