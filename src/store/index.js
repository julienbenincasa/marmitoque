import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
    state: {
        showLoader: false,
    },
    mutations: {
        LOADING_SPINNER_SHOW_MUTATION(state, payload) {
            state.showLoader = payload.val;
        }
    },
    actions: {},
    modules: {
        auth
    }
  });


