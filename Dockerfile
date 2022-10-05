FROM node:16.15.1

WORKDIR /usr/src/app

COPY . /usr/src/app 

RUN npm install

CMD ["npm", "run", "dev"]