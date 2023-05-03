FROM node:18.15.0-alpine

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:dev" ]
