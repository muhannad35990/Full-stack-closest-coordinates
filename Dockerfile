FROM node:14-alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN apk --no-cache add yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn ","start"]
#  