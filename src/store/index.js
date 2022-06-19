import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import goods from './goods'
import bestsellers from './bestsellers'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: { links, goods, bestsellers, coffee },
})

export default store
