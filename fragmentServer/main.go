package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	port := os.Getenv("PORT")

	http.HandleFunc("/public/bundle.js", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "bundle.js")
	})

	http.HandleFunc("/public/bundle.css", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "bundle.css")
	})

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "text/html")
		w.Header().Add("Link", fmt.Sprintf("<http://localhost:%v/public/bundle.js>; rel=\"fragment-script\"", port))
	})

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))

}
