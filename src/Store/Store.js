// store.js (Vuex store)
import { reactive } from 'vue';

const state = reactive({
  isLoggedIn: false,
});

const mutations = {
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
};

export default {
  state,
  mutations,
};
