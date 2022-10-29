import { Component as tsc } from 'vue-tsx-support';
import { Component, Prop, Watch } from 'vue-property-decorator';
import './stars.scss';

interface IProps {
  score: number;
}
/** 星星的状态 */
type StarStatus = 'full' | 'half' | 'empty'

/**
 * app评分组件
 */
@Component
export default class Stars extends tsc<IProps> {
  /** 评分 */
  @Prop({
    type: Number,
    validator: (val: number) => {
      const isPass = /(^\d+\.\d$)|(^\d+$)/.test(`${val}`)
      if (!isPass) {
        console.error('评分格式错误，请输入整数或者有且只有一位小数的值')
      }
      return isPass
    }
  }) score: number
  /** 最高分 */
  @Prop({ type: Number, default: 5 }) max: number

  /** 需要渲染的星星 */
  starsList: StarStatus[] = []

  /**
   * 根据传入分数生成对应的星星
   * @param score nubmer
   */
  @Watch('score', { immediate: true })
  handleStars(score: number) {
    this.starsList = []
    const intCount = Math.floor(score)
    const fullCount = Math.min(intCount, this.max)
    let count = fullCount;
    const hasHalf = +(`${score}`.match(/\d\.(\d)/)?.[1] ?? 0) >= 5
    let halfExist = false;
    for (let i = 0; i < this.max; i++ ) {
      let type: StarStatus = 'empty'
      if (count) {
        type = 'full'
        count -= 1
      } else if (hasHalf && !halfExist) {
        type = 'half'
        halfExist = true
      }
      this.starsList.push(type)
    }
  }

  render() {
    return (
    <div class="stars-wrap">
      {
        this.starsList.map(item => (
          <i class={[
            'icon-stars',
            'iconfont',
            `icon-star-${item}`
          ]}></i>
        ))
      }
    </div>
    )
  }
}
