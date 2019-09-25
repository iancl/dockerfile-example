# builder stage
FROM node:10.16.3-alpine as builder
# copy the contents of the whole folder project
COPY . /opt/app
# go to project folder
WORKDIR /opt/app
# install node modules and build typescript files
RUN npm install && \
    npm run build

# release stage
FROM node:10.16.3-alpine AS release
# copy built files, package-lock.json and package.json
COPY --from=builder /opt/app/package*.json /opt/app/
COPY --from=builder /opt/app/build/ /opt/app/build/
# go to project folder
WORKDIR /opt/app/
# install only prod dependencies
RUN npm install --production --no-optional && \
    npm cache clean --force
EXPOSE 8080
USER node
CMD ["node", "build/src/app.js"]
