# Use the standard Nginx image from Docker Hub
FROM nginx

ARG REVERSE_PROXY_CONTAINER_CONFIG_PATH

ENV REVERSE_PROXY_CONTAINER_CONFIG_PATH=${REVERSE_PROXY_CONTAINER_CONFIG_PATH}

# Copy start script
COPY start.sh /usr/local/bin/start.sh

# Copy the configuration file from the current directory and paste 
# it inside the container to use it as Nginx's default config.
COPY nginx.conf ${REVERSE_PROXY_CONTAINER_CONFIG_PATH}

# Start Nginx when the container has provisioned.
CMD ["/usr/local/bin/start.sh"]