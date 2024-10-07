# Dockerfile for Vue.js
FROM node:18.17.0

WORKDIR /app

COPY package.json .
COPY public public
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
