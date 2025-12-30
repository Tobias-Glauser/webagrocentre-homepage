# Stage 1
FROM node:22.5.1 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --base-href=base-path-string --deploy-url=base-path-string


# Stage 2
FROM nginx:1.19.3-alpine

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY /conf /conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/webagrocentre-homepage/browser/ /usr/share/nginx/html/

ENV BASE_PATH /

ENTRYPOINT ["/bin/sh", "/conf/entry_point.sh"]

EXPOSE 80
