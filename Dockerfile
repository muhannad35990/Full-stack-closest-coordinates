FROM node
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN npm install --silent
COPY . .
EXPOSE 3000
CMD ["npm","start"]