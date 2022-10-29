import Vue from 'vue'
import loading from './loading'

const Loading = Vue.extend(loading) // 创建alert组件的构造类
  const Instance = new Loading()
  let vm = Instance.$mount() as loading; // 挂载
  document.body.appendChild(vm.$el) // 插入body

export default {
  install: (Vue) => { // 暴露install方法供Vue.use()调用
    Vue.prototype.$loading = {
      show: vm.handleShow,
      hide: vm.handleHide
    }
  }
}
