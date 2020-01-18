interface State {
  loaderDisplay: boolean;
  loaderProgressInit: boolean;
}

const state: State = {
  loaderDisplay: true,
  loaderProgressInit: false
};

const mutations: any = {
  loaderDisplayShow(state: any) {
    state.loaderDisplay = false;
  },
  loaderInit(state: any) {
    state.loaderDisplay = true;
    state.loaderProgressInit = true;
  }
};


const actions: any = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
