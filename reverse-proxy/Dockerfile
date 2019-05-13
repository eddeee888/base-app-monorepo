# Use the standard Nginx image from Docker Hub
FROM nginx

# Copy start script
COPY start.sh /usr/local/bin/start.sh

# Copy the configuration file from the current directory and paste 
# it inside the container to use it as Nginx's default config.
COPY nginx.conf /etc/nginx/nginx.conf

# Start Nginx when the container has provisioned.
CMD ["/usr/local/bin/start.sh"]