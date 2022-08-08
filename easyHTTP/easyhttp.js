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

easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(console.log(null, this.http.responseText));
    this.http.send(JSON.stringify(data));
  };
};

// Make an HTTP PUT request

// Make an HTTP DELETE request
