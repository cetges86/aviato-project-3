import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function () {
    return axios.get("/api/users");
  },
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  login: function (loginInfo) {
    return axios.post("/api/users/signIn", loginInfo);
  },
  createUser: function (userData) {
    return axios.post("/api/users/signUp", userData);
  },
  logout: function() {
    return axios.get("api/users/logout");
  },
  checkAuthenticated: function () {
    return axios.get("api/users/authenticated")
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
