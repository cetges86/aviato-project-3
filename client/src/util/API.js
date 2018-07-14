import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(email) {
    return axios.get("/api/users/" + email);
  },
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  loginUser: function(email, password) {
    return axios.get("api/users", email, password);
  }
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
