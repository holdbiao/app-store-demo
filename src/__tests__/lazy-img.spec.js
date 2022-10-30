import { mount, createLocalVue } from '@vue/test-utils'
import Home from '../pages/home/home'
import Loading from '../components/loading/index'

describe('test LazyImg', () => {
  const localVue = createLocalVue()
  localVue.use(Loading)
  const wrapper = mount(Home, {
    localVue
  })
  test('render LazyImg', () => {
    setTimeout(() => {
      const lazyImg = wrapper.findComponent({ name: 'LazyImg' })
      expect(lazyImg.isVueInstance()).toBeTruthy()
    }, 200)
  })

  test('test loaded', () => {
    setTimeout(() => {
      const lazyImgList = wrapper.findAllComponents({ name: 'LazyImg' })
      const lazyImg1 = lazyImgList.at(0)
      expect(lazyImg1.vm.isLoaded).toBe(true)
    }, 200)
  })

  test('test lazy', () => {
    setTimeout(() => {
      const lazyImgList = wrapper.findAllComponents({ name: 'LazyImg' })
      const lazyImg51 = lazyImgList.at(50)
      expect(lazyImg51.vm.isLoaded).toBe(false)
    }, 200)
  })
})