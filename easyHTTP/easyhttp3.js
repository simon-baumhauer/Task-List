/**
 * @version 3.0.0
 * @author Simon Baumhauer
 * @license MIT
 */

class EasyHTTP {
  // Make an HTTP GEt Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Mske an HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "Post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make an HTTP PUT Request

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make a HTTP DELETE Request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const resData = "Resources Deleted";
    return resData;
  }
}
