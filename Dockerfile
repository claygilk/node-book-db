FROM node:12

WORKDIR /app

COPY . . 

RUN npm install

ENV PORT=3000

EXPOSE 3000

CMD [ "node", "app.js" ]

# $ docker build -t books .

# $ docker run -p 3000:3000 [IMAGE ID]