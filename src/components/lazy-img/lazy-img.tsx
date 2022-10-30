import { Component as tsc } from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import './lazy-img.scss';

interface IProps {
  src: string;
}

/**
 * 图片懒加载组件
 */
@Component({
  name: 'LazyImg'
})
export default class LazyImg extends tsc<IProps> {
  @Prop({ type: String }) src: string;

  /** 图片加载完成 */
  isLoaded = false

  /** 图片加载失败 */
  isError = false

  /** 监听实例 */
  observer: IntersectionObserver = null;

  mounted() {
    setTimeout(() => this.registerObserver(), 50)
  }

  /**
   * 注销进入监听
   */
  unregisterOberver() {
    if (this.observer) {
      this.observer.unobserve(this.$el);
      this.observer.disconnect();
      this.observer = null;
    }
  }

  /**
   * 给当前组件注册进入监听
   */
  registerObserver() {
    this.observer = new IntersectionObserver(this.handleIntersection)
    this.observer.observe(this.$el)
  }

  /**
   * 监听进入的回调
   * @param entrys 
   */
  handleIntersection(entrys) {
    const [entry] = entrys
    if (this.observer && entry.intersectionRatio > 0) {
      this.fetchImg()
    }
  }

  /**
   * 加载图片
   */
  fetchImg() {
    this.isError = false
    const img = document.createElement('img')
    img.src = this.src
    img.onload = () => {
      this.isLoaded = true
      this.unregisterOberver()
    }
    img.onerror = () => {
      this.isError = true
      this.unregisterOberver()
    }
  }

  render() {
    return (
    <div class="lazy-img-wrap">
      {
        this.isError
          ? <i class="iconfont icon-img-err" onClick={this.fetchImg}></i>
          : (
              this.isLoaded
                ? <img src={this.src}></img>
                : <i class="iconfont icon-loading"></i>
            )
      }
    </div>
    )
  }
}
