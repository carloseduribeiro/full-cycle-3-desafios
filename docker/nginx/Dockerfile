FROM nginx:1.22.0-alpine

COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "deamon off;"]