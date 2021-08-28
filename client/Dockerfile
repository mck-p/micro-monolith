FROM node:16 as DEPS

WORKDIR /app

COPY ./client/ ./

RUN npm ci

RUN npm run build

FROM node:16

WORKDIR /app

COPY ./client/package.json ./client/package-lock.json ./
COPY --from=DEPS /app/.next /app/.next
RUN ls 

RUN npm i --production

EXPOSE 8080

CMD ["npm", "run", "start"]