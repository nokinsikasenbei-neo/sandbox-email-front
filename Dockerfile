FROM node:16.15.1

WORKDIR /usr/src/app

COPY . /usr/src/app 

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]