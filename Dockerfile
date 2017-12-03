FROM node:8-alpine

WORKDIR /usr/src/app

COPY build .

EXPOSE 80
