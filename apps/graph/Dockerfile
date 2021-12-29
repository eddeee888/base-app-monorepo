FROM bam/dev:latest

ARG schema_flag
ARG prisma_database_url
ARG prisma_binary_target

WORKDIR /usr/src/app

COPY . .
RUN PRISMA_DATABASE_URL=$prisma_database_url \ 
    PRISMA_BINARY_TARGET=$prisma_binary_target \ 
    yarn prisma generate $schema_flag
