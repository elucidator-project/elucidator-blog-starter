FROM node:latest
USER node

LABEL MAINTAINER="Iwan Firmawan <firmawaneiwan@gmail.com>"

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install --quiet --no-progress -g pnpm
RUN npm cache clean --force

# make the 'app' folder the current working directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /home/node/app
COPY pnpm-lock.yaml /home/node/app

# install project dependencies
RUN rm -rf node_modules
RUN pnpm i
RUN pnpm i esbuild

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . /home/node/app

# build app for production with minification
RUN pnpm build

EXPOSE 3000
CMD [ "pnpm", "dev" ]