// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'
/* eslint-disable no-unused-vars*/
// import vConsole from 'vconsole'
fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
    loading:require('common/image/default.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
})
