FROM node:9.2.0-alpine

WORKDIR ~/app

COPY build .

EXPOSE 80
