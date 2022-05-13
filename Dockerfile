FROM alpine:latest

# Request arguments.
ARG USERNAME_DB
ARG PASSWORD_DB
# Save arguments to enviroment variables.
ENV USERNAME_DB=USERNAME_DB
ENV PASSWORD_DB=PASSWORD_DB

RUN apk update && apk add npm

COPY lib/ /back/lib/
COPY api/ /back/api/
COPY [  "package.json", "server.js", "/back/" ]

WORKDIR /back
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
