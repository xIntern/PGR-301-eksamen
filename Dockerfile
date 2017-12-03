FROM node:8-alpine

WORKDIR /usr/src

COPY app ./

WORKDIR ./app

RUN npm i

EXPOSE 80

CMD ["npm", "start"]