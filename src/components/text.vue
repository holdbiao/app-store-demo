<template>
  <div>
    text component
    <div v-html="htmlTpl"></div>
  </div>
</template>

<script>
/** https://jsxss.com/zh/options.html  https://juejin.cn/post/6844903918518927367*/
import xss from 'xss'; /** 也可配置到vue-loader里统一处理v-html */
export default {
  name: 'TextCom',
  data () {
    return {
      // htmlTpl: `<span class="test" onclick="alert(11)">2222</span>`
      htmlTpl: xss(`<span class="test" onclick="alert(11)">2222</span>`, {
        whiteList: {
          span: ['class'] /** 允许span标签的class */
        }
      })
    }
  }
}
</script>

