FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]