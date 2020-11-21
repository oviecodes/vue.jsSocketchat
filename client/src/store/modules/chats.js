const state = {
  username: "",
  chatroom: "",
  messages: [],
  socket: null
};

const getters = {
  //return an object containing username and chatroom from state
  userDetails: state => {
    return {
      username: state.username,
      chatroom: state.chatroom
    };
  },
  socket: state => state.socket,
  getMessages: state => state.messages

};

const actions = {
  //actions take a { commit } payload and an object
  async getUserDetails({ commit }, userDetails) {
    commit("setUserData", userDetails);
  },

  async setSocketState({ commit }, socket) {
    commit('setSocketState', socket)
  }, 

  async setMessages({ commit }, msg) {
    commit('setMessages', msg)
  },

  async resetStateMessages({ commit }) {
    commit('resetStateMessages')
  }
};

const mutations = {
  //mutate UserData state i.e username and chatRoom
  setUserData: (state, { username, chatroom }) => {
    state.username = username;
    state.chatroom = chatroom;
  },

  setSocketState: (state, socket) => {
    state.socket = socket
  },

  setMessages: (state, msg) => state.messages.push(msg),

  resetStateMessages: (state) => state.messages = []
};

export default {
  state,
  getters,
  actions,
  mutations
};
