import { Component as tsc } from 'vue-tsx-support';
import { Component, Prop } from 'vue-property-decorator';
import './app-item.scss';
import { IAppItem } from '../../pages/home/type';
import Stars from '../stars/stars';
import LazyImg from '../lazy-img/lazy-img';

interface IProps {
  data: IAppItem;
  type: AppType;
}
/**
 * app组件信息的展示方向
 */
export enum AppType {
  vertical, /** 纵向展示 */
  horizontal /** 横向展示 */
}
@Component
export default class AppItem extends tsc<IProps> {
  /**
   * app的信息
   */
  @Prop({ type: Object }) data: IAppItem
  /**
   * app的信息展示方向
   */
  @Prop({ type: Number }) type: AppType

  get imgSrc() {
    return this.type === AppType.horizontal ? this.data.img : this.data.img100
  }
  render() {
    return (
      <div class={[
        'app-item-wrap',
        this.type === AppType.horizontal ? 'horizontal' : 'vertical'
      ]}>
        <div class="app-item-img">
          <LazyImg src={this.imgSrc}></LazyImg>
        </div>
        <div class="app-item-content">
          <div class="app-item-title">{this.data.name}</div>
          <div class="app-item-type">{this.data.type}</div>
          <div class="app-item-score">
            {
              this.type === AppType.horizontal
                && [
                  <Stars score={this.data.averageUserRating}></Stars>,
                  <span class="app-item-score-count">({this.data.userRatingCount || 0 })</span>
                ]
            }
          </div>
          
        </div>
      </div>
    )
  }
}
