FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY tests ./tests
COPY *.js ./
COPY *.mjs ./

CMD ["npm", "test"]