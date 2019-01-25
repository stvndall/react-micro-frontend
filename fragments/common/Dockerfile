FROM node:alpine
COPY . /app
WORKDIR /app
RUN yarn && yarn build

CMD ["yarn",  "start"]