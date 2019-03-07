package handlers
import (
  "net/http"
)
/* TODO: implement a CORS middleware handler, as described
in https://drstearns.github.io/tutorials/cors/ that responds
with the following headers to all requests:

  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, PUT, POST, PATCH, DELETE
  Access-Control-Allow-Headers: Content-Type, Authorization
  Access-Control-Expose-Headers: Authorization
  Access-Control-Max-Age: 600
*/

type CorsMW struct {
	MyHandler http.Handler
}

func NewCorsMW(h http.Handler) *CorsMW {
    return &CorsMW{
        h,
    }
}

func (c *CorsMW) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  if r.Method == "OPTIONS" {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    w.Header().Set("Access-Control-Expose-Headers", "Authorization")
    w.Header().Set("Access-Control-Max-Age", "600")
    w.WriteHeader(http.StatusOK)
  }
  c.MyHandler.ServeHTTP(w, r)
}
