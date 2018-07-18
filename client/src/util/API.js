import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(email, password, id) {
    return axios.post("/signin/" + email + password);
  },
  createUser: function(userData) {
    return axios.post("/api/users", userData);
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
