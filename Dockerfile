FROM node:8-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY index.js index.js

EXPOSE 80

CMD ["node", "index.js"]