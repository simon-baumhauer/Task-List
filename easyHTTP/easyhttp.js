function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET requestet
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(console.log(null, this.http.responseText));
    } else {
      callback("Error: ", this.http.status);
    }
  };
  this.http.send();
};
// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request
