// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'//等效于from './router/index.js'  是node加载的方式
import VueRouter from 'vue-router';
import store from './store/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(Vuex);
Vue.use(VueRouter);//引入router
Vue.use(ViewUI);//引入view
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,     //属性值和属性名一样时省略 router:router
  components: { App },
  template: '<App/>',
  store
})
