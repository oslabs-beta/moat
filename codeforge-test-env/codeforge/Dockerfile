FROM node:10.15.3-alpine
WORKDIR /codeforge
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

CMD ["npm", "run", "build"]