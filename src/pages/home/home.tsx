import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import axios from 'axios'
import './home.scss'
import { IAppItem } from './type'
@Component({
  name: 'App'
})
export default class App extends tsc<{}> {
  /** 搜索文本 */
  searchText = ''

  /** 最受欢迎列表 */
  topList: IAppItem[] = []

  created() {
   this.getTopList()
  }

  async getTopList() {
    const data = await axios({
      method: 'get',
      url: 'https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json'
    })
    console.log(data)
    this.topList = data.data.feed.entry.map(item => {
      const {
        title: { label },
        'im:image': [{ label: img }],
        'im:contentType': { attributes: { label: type }}
      } = item
      return {
        title: label,
        img,
        type
      }
    })
    console.log(this.topList)
  }

  /**
   * 更新搜索值
   * @param evt 输入事件
   */
  handleSearchChange (evt: Event) {
    const target = evt.target as HTMLInputElement
    this.searchText = target.value
  }
  render() {
    return (
      <div class="home-wrap">
        <div class="home-search-wrap">
          <div class="home-search">
            <i class="iconfont icon-search home-search-icon"></i>
            <input
             class="home-search-input"
             placeholder="Search"
             value={this.searchText}
             onInput={this.handleSearchChange} />
          </div>
        </div>
      </div>
    )
  }
}