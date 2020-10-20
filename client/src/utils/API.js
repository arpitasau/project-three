import axios from "axios";

export default {
  // Gets the user data
  getUserData: function (id) {
    return axios.get("/api/savedfavs", {
      params: {
        userID: id,
      },
    });
  },
  // Deletes the favorite with the given id and user id
  deleteUserData: function (uid, fid) {
    return axios.delete("/api/removedfavs", {
      params: {
        userID: uid,
        favID: fid,
      },
    });
  },

  updateProject: function (todoItem) {
    return axios.get("/api/projects", {
      params: {
        notes: todoItem,
      },
    });
  },

  getVidFromDB: function(){
    return axios.get('/api/projectvid')
  }
};
