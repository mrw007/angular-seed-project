# Stage 1
FROM node:22 as node
WORKDIR /angular-seed-project

ENV PATH=${PATH}:./node_modules/.bin
ENV NODE_PATH=/angular-seed-project/node_modules

COPY package.json ./
COPY package-lock.json ./

RUN rm -rfv package-lock.json node_modules
RUN npm cache clean --force
RUN npm install

RUN ngcc

COPY . .

RUN npm run build

# Stage 2
FROM nginx:alpine
COPY --from=node /angular-seed-project/dist/angular-seed-project /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
