// const http = new easyHTTP();

// Get Posts

// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// get Single Post

// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
// const data = {
//   title: "Custom Post",
//   body: "This is a custom post",
// };

// Create Post
// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Update Post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Delete Post

// http.delete(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// easyHTTP 2

const http = new EasyHTTP();

// Get Users
// http
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User Data
const data = {
  name: "John Doe",
  username: "johndoes",
  email: "jdoe@gmail.com",
};

// Create User

// http
//   .post("https://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Update User

// http
//   .put("https://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete User

http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
