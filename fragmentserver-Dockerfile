FROM golang:1.11-alpine
COPY fragmentServer /server
WORKDIR /server
ENV PATH "$PATH:/server"
RUN go build main.go

CMD main