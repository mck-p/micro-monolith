FROM node:16

WORKDIR /app

COPY ./client .

RUN npm i

EXPOSE 8080

CMD ["npm", "run", "dev"]