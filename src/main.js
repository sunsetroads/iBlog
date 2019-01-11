// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.store = store;
Vue.config.devtools = true;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')