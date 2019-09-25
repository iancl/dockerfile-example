# Optimized dockerfile example
I created this typescript/nodejs project to show how a multi stage dockerfile
can help decrease the file of a docker image

Before implementing the multi stage dockerfile the size of the built docker
image was 139MB and after implementing the multi stage dockerfile the final
image got reduced to 78.1MB!

May not sound very usefull for this simple app but it would be very useful if
we were running multiple instances of this container.


# Dockerfile
Dockerfile is in path: release/Dockerfile

# Instructions

## build image

```sh
docker build . -t ian/node-app -f release/Dockerfile
```

## run container
```sh
docker run -p 8080:8080 -t ian/node-app
```

## test endpoint
You can use curl:

```sh
curl -X GET localhost:8080/
# you should get "hello!" as response
```

