import Vue from 'vue';
import Vuex from 'vuex';

import patternsModule from './modules/patterns';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
  },
  modules: {
    patterns: patternsModule
  },
  getters: {
  },
});

