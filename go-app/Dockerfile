FROM golang:1.18.3 AS builder
WORKDIR /go/src/go-app
COPY ./src/ .
RUN go build -o /go/src/go-app/runner
CMD ["./runner"]