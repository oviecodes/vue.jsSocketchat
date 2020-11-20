const state = {
  username: "",
  chatroom: ""
};

const getters = {
  //return an object containing username and chatroom from state
  userDetails: state => {
    return {
      username: state.username,
      chatroom: state.chatroom
    };
  }
};

const actions = {
  //actions take a { commit } payload and an object
  async getUserDetails({ commit }, userDetails) {
    commit("setUserData", userDetails);
  }
};

const mutations = {
  //mutate UserData state i.e username and chatRoom
  setUserData: (state, { username, chatroom }) => {
    state.username = username;
    state.chatroom = chatroom;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
