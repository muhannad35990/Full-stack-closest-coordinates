FROM node:14-alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY . .
RUN npm install --silent
EXPOSE 3002
CMD ["npm","start"]