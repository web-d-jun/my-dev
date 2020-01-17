interface State {
  loaderDisplay: boolean;
}

const state: State = {
  loaderDisplay: true
};

const mutations: any = {
  loaderDisplayShow(state: any) {
    state.loaderDisplay = false;
  },
  loaderInit(state: any) {
    state.loaderDisplay = true;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
