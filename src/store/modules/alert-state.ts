interface State {
  stateValue: boolean;
}

const state: State = {
  stateValue: false
};

const mutations: any = {
  alertState(state: any, value: any) {
    state.stateValue = value;
    setTimeout(() => {
      state.stateValue = !state.stateValue;
    }, 2000);
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
