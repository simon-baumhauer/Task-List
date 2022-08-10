/**
 * @version 2.0.0
 * @author Simon Baumhauer
 * @license MIT
 */

class EasyHTTP {
  // Make an HTTP GEt Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Mske an HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "Post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make an HTTP PUT Request

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Make a HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => resolve("Resource delted"))
        .catch((err) => reject(err));
    });
  }
}
