FROM node:14
WORKDIR /usr/src/my_node_app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]