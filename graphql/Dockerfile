FROM node:10.13.0-alpine

# Set up env variables
ARG GRAPHQL_CONTAINER_PATH

# Create app directory and use it as working directory
RUN mkdir -p ${GRAPHQL_CONTAINER_PATH}
WORKDIR ${GRAPHQL_CONTAINER_PATH}

COPY start.sh /usr/local/bin/start.sh

COPY . ${GRAPHQL_CONTAINER_PATH}

CMD ["sh", "/usr/local/bin/start.sh"]