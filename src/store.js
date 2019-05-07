import Vue from 'vue'
import Vuex from 'vuex'
import { moduelA } from '../../moduel/src/list';
import { moduelB } from '../../moduel/src/num';
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    goodslist:moduelA,
    shoplist:moduelB
  }
})
