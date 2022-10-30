import { mount, createLocalVue } from '@vue/test-utils'
import Home from '../pages/home/home'
import Loading from '../components/loading/index'

describe('render home page', () => {
  const localVue = createLocalVue()
  localVue.use(Loading)
  const wrapper = mount(Home, {
    localVue
  })
  test('render pages', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('pages data', () => {
    setTimeout(() => {
      const { topList, freeTopList } = wrapper.vm
      expect(topList.length > 0 && freeTopList.length > 0).toBe(true)
    }, 100)
  })


  test('test input', () => {
    const input = wrapper.find('.home-search-input')
    expect(input.classes()).toContain('home-search-input')
  })

  test('test .home-search-cancel', async () => {
    const input = wrapper.find('.home-search-input')
    await input.trigger('click')
    setTimeout(() => {
      const cancel = wrapper.find('.home-search-cancel')
      expect(cancel.exists()).toBe(true)
    }, 100)
  })
})