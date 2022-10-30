import Vue from 'vue'
import App from './app'
import './static/css/index.scss';
import './static/icons/iconfont.css';
import Loading from './components/loading/index'
Vue.config.productionTip = false
Vue.use(Loading)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})