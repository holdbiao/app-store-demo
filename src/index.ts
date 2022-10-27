import Vue from 'vue'
import App from './app'
import './static/css/index.scss';
import './static/icons/iconfont.css';
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})