// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//等效于from './router/index.js'  是node加载的方式
import VueRouter from 'vue-router';
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(VueRouter);//引入router
Vue.use(ViewUI);//引入view

// The routing configuration
// const RouterConfig = {
//     routes: router
// };
// const router = new VueRouter(RouterConfig);

// new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App)
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
