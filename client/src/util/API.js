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
    return axios.get("/api/users/logout");
  },
  checkAuthenticated: function () {
    return axios.get("/api/users/authenticated")
  },
  getJobs: function(jobTerm) {
    return axios.get("/api/users/jobs/"+ jobTerm)
  }
};
