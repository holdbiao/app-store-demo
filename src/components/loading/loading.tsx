import { Component as tsc } from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
import './loading.scss';

/**
 * 全局loading组件
 */
@Component({
  name: 'Loading'
})
export default class Loading extends tsc<{}> {
  
  isLoading = false

  /** 是否执行 */
  isFinally = false

  /**
   * 展示loading
   * @param delay 延迟时间，在规定时间内完成loading，则不渲染loading, 默认100毫秒
   */
  handleShow(delay = 100) {
    this.isFinally = false
    setTimeout(() => {
      !this.isFinally && (this.isLoading = true)
    }, delay)
  }

  /**
   * 控制隐藏
   */
  handleHide() {
    this.isLoading = false
    this.isFinally = true
  }
  render() {
    return this.isLoading ? (
      <div class="loading-wrap">
        <div class="loading-icon"></div>
      </div>
    ) : undefined
  }
}
