FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

COPY ./.docker/entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

USER node
WORKDIR /home/node/app