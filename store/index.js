const state = () => ({
  codeType: "html"
});

const mutations = {
  updateType(state, payload) {
    state.codeType = payload;
  }
};

const actions = {
  changeType({ commit }, payload) {
    
    commit("updateType", payload);
  }
};

export { state, actions, mutations };
