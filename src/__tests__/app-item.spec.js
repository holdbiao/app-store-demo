import { mount } from '@vue/test-utils'
import AppItem from '../components/app-item/app-item'
const propsData = {
  type: 0,
  data: {
    artist:"Qookka Entertainment Limited",
    id:"1626979616",
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/2e/8f/28/2e8f2849-d761-549a-1869-e6408920453f/AppIcon-hk-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/53x53bb.png",
    img100:"https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/2e/8f/28/2e8f2849-d761-549a-1869-e6408920453f/AppIcon-hk-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.png",
    name:"三國志幻想大陸-卡牌王者",
    type:"遊戲"
  }
}
describe('render compoment app-item', () => {
  test('render vertical', () => {
    const wrapper = mount(AppItem, {
      propsData
    })
    expect(wrapper.classes()).toContain('vertical')
  })
  test('render horizontal', () => {
    const props = JSON.parse(JSON.stringify(propsData))
    props.type = 1
    const wrapper = mount(AppItem, {
      propsData: props
    })
    expect(wrapper.classes()).toContain('horizontal')
  })
})