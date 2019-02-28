import axios from 'axios';

export default {
  namespaced: true,
  state: {
    library: [],
    parts: null,
    foo: 'patterns-foo',
  },
  mutations: {
    addPatternToLibrary(state, pattern) {
      state.library.push(pattern);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(result => commit('updateParts', result.data))
        .catch(console.error);
    },
    addPatternToLibrary({ commit, state }, pattern) {
      const library = [...state.library, pattern];
      return axios.post('/api/library', library)
        .then(() => commit('addPatternToLibrary', pattern));
    }
  },
  getters: {
    foo(state) {
      return `patterns-getter/${state.foo}`;
    },

  },
};

