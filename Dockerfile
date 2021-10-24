FROM node:14-alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN npm install --no-package-lock
COPY . .
EXPOSE 3000
CMD ["npm ","start"]
 