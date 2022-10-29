import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import axios from 'axios'
import './home.scss'
import { IAppItem, IAppDetail } from './type'
import AppItem, { AppType } from '../../components/app-item/app-item'
import { Debounce } from '../../utils/index'
@Component({
  name: 'App'
})
export default class App extends tsc<{}> {
  /** 搜索文本 */
  searchText = ''

  /** app详情信息 */
  appDetailMap: Map<string, IAppDetail> = null;

  /** 最受欢迎列表 */
  topList: IAppItem[] = []

  /** 搜搜框的聚焦状态 */
  inputFocus = false;

  /** 下载量最多的免费app列表 */
  freeTopList: IAppItem[] = []

  created() {
    this.handleGetAllData()
  }

  /**
   * 含有搜索结果的列表
   */
  get currentList () {
    return this.freeTopList.filter(item => {
      if (this.searchText) {
        const keywork = this.searchText.toLocaleLowerCase()
        /** 参与筛选掉的字段key */
        return ['name', 'artist', 'description'].some(str => {
          const targetStr = item[str]?.toLocaleLowerCase?.() ?? ''
          return targetStr.indexOf(keywork) > -1
        })
      } else {
        return true
      }
    })
  }

  /** 搜索结果为空 */
  get searchEmpty() {
    return !!this.searchText.trim() && !this.currentList.length
  }

  /**
   * 获取应用列表数据
   */
  handleGetAllData() {
    this.$loading.show()
    Promise.all([
      this.getTopList(),
      this.getFreeTopList()
    ]).finally(() => this.$loading.hide())
  }
  /**
   * 获取最受欢迎的应用数据
   */
  async getTopList() {
    const data = await axios({
      method: 'get',
      url: 'https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json'
    })
    console.log(data)
    this.topList = this.handleAppData(data.data.feed.entry)
    console.log(this.topList)
    return data
  }

  /**
   * 获取下载量最多的免费app列表
   */
  async getFreeTopList() {
    const data = await axios({
      method: 'get',
      url: 'https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json'
    })
    this.freeTopList = this.handleAppData(data.data.feed.entry)
    console.log(this.freeTopList)
    this.getAppDetail(this.freeTopList)
    return data
  }

  /**
   * 根据列表的数据获取对应的详情数据
   * @param list 需要获取详情的列表数据
   */
  async getAppDetail(list: IAppItem[]) {
    const idsString = list.reduce((ids, { id }) => {
      return ids ? `${ids},${id}` : id
    }, '')
    console.log(idsString)
    const data = await axios({
      method: 'get',
      // url: `https://itunes.apple.com/hk/lookup?id=${'1636420626' || idsString}`
      url: `https://itunes.apple.com/hk/lookup?id=${'1636420626,1456559188' || idsString}`
    })
    this.appDetailMap = new Map()
    data.data.results.forEach(item => {
      this.appDetailMap.set(`${item.trackId}`, item as IAppDetail)
    })

    this.freeTopList.forEach(item => {
      const detail: IAppDetail = this.appDetailMap.get(item.id)
      this.$set(item, 'averageUserRating', +(detail?.averageUserRating?.toFixed?.(1) || 0))
      this.$set(item, 'description', detail?.description || '')
      this.$set(item, 'userRatingCount', detail?.userRatingCount || 0)
    })
  }

  /**
   * 处理app所需信息的方法
   * @param dataList 接口数据
   */
  handleAppData(dataList: Record<string, any>[]): IAppItem[] {
    return dataList.map(item => {
      const {
        'im:image': [{ label: img },, { label: img100 }],
        category: { attributes: { label: type }},
        'im:name': { label: name },
        'im:artist': { label: artist },
        id: { attributes: { 'im:id': id } }
      } = item
      return {
        img,
        img100,
        type,
        name,
        artist,
        id
      }
    })
  }

  /**
   * 更新搜索值
   * @param evt 输入事件
   */
  @Debounce(300)
  handleSearchChange (evt: Event) {
    const target = evt.target as HTMLInputElement
    this.searchText = target.value
  }

  /**
   * 取消搜索
   */
  handleCancelSearch(evt: Event) {
    evt.stopPropagation()
    this.inputFocus = false
    this.searchText = ''
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
             maxLength={20}
             onFocus={() => this.inputFocus = true}
             onBlur={() => this.inputFocus = false}
             onInput={this.handleSearchChange} />
            {
              (this.inputFocus || this.searchText)
                && <div class="home-search-cancel" onClick={this.handleCancelSearch}>取消</div>
            }
          </div>
        </div>
        <div class="home-main">
          {
            !this.searchText && !!this.topList.length && [
              <div class="home-top-list-title">Recommend</div>,
              <div class="home-top-list">
                {
                  this.topList.map(item => (
                    <AppItem class="home-top-item" data={item} type={AppType.vertical}></AppItem>
                  ))
                }
              </div>
            ]
          }
          {
            !!this.currentList.length
              && <div class="home-free-top-list">
              {
                this.currentList.map((item, index) => (
                  <div class="home-free-top-item">
                    <div class="index">{index + 1}</div>
                    <AppItem class="home-free-top-app" data={item} type={AppType.horizontal}></AppItem>
                  </div>
                ))
              }
            </div>
          }
          {
            this.searchEmpty
              && <div class="home-no-data">
                <i class="iconfont icon-no-data"></i>
                <div class="no-data-title">未找到</div>
                <div class="no-data-desc">{`与“${this.searchText}”相关的结果`}</div>
              </div>
          }
        </div>
      </div>
    )
  }
}