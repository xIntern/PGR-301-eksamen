FROM node:9.2.0-alpine

WORKDIR ~/app

COPY ansible .
COPY safe .
COPY build .

EXPOSE 80
