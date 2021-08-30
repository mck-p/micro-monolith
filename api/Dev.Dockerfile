FROM node:16

WORKDIR /app

COPY ./api .
RUN npm i

EXPOSE 8080

CMD ["npm", "run", "dev"]