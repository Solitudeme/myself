import Vue from 'vue';
import Vuex from 'vuex';
//挂载Vuex
Vue.user(Vuex);

const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        name:'helloVueX'
    }
})

export default store;


