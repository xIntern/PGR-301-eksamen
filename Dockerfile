FROM node:9.2.0-alpine

WORKDIR ~/app

COPY ansible .
COPY build .

EXPOSE 80
