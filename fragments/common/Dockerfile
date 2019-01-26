FROM node:alpine as build
COPY . /app
WORKDIR /app
RUN yarn && yarn build

FROM stvndall/fragmentserver:latest
COPY --from=build /app/public /server/


