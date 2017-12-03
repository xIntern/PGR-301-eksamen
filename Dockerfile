FROM node:8-alpine

WORKDIR /usr/src

COPY app ./

WORKDIR ./app

RUN yarn

EXPOSE 80

CMD ["yarn", "start"]