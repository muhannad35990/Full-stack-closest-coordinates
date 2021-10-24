FROM node:14-alpine
WORKDIR /server
COPY package.json .
COPY tsconfig.json .
COPY . .
RUN npm install 
EXPOSE 3002
CMD ["npm ","start"]