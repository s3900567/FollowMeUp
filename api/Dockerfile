FROM node:16-alpine as node

FROM node as server-dependences
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --production=true

#3 Build app
FROM node as server-builder
WORKDIR /app
COPY . .
COPY --from=server-dependences /app/node_modules /app/node_modules
RUN yarn install --production=false
RUN yarn build

#4 Run app
FROM node as server
ENV NODE_ENV=production
WORKDIR /app
COPY --from=server-dependences /app/node_modules /app/node_modules
COPY --from=server-builder /app/package.json /app/package.json
COPY --from=server-builder /app/.env /app/
COPY --from=server-builder /app/dist /app/dist
CMD ["yarn", "start"]