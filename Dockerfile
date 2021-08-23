FROM node:12

WORKDIR /app

COPY . . 

RUN npm install

ENV PORT=4000

EXPOSE 4000

CMD [ "node", "app.js" ]