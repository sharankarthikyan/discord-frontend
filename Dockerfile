FROM node:16.13.2-alpine

RUN npm install -g npm@9.1.1

WORKDIR /app/discord-frontend/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]