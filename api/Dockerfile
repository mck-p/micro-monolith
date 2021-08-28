FROM node:16 as DEPS

WORKDIR /app

COPY ./api/ ./

RUN npm ci

RUN npm run build

FROM node:16

WORKDIR /app

COPY --from=DEPS /app /app

RUN rm -rf node_modules

RUN npm i --production

EXPOSE 8080

CMD ["npm", "run", "start"]
