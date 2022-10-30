import { mount, createLocalVue } from '@vue/test-utils'
// import Home from '../pages/home/home'
// import Loading from '../components/loading/index'
import LazyImg from '../components/lazy-img/lazy-img'
const src= 'https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/2e/8f/28/2e8f2849-d761-549a-1869-e6408920453f/AppIcon-hk-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/100x100bb.png'
const errSrc = 'http://www.xxxx.com/a.png'

describe('test LazyImg', () => {

  test('render LazyImg', () => {
    const wrapper = mount(LazyImg)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('test error load', async () => {
    const wrapper = mount(LazyImg, {
      propsData: {
        src: errSrc
      }
    })
    setTimeout(() => {
      expect(wrapper.vm.isError).toBe(true)
      expect(wrapper.vm.isLoaded).toBe(false)
    }, 300)

    wrapper.setProps({ src })
    wrapper.vm.fetchImg()
    setTimeout(() => {
      expect(wrapper.vm.isLoaded).toBe(true)
      expect(wrapper.vm.isError).toBe(false)
    }, 300);
  })

  test('test onerror', () => {
    const wrapper = mount(LazyImg, {
      propsData: {
        src
      }
    })
    wrapper.vm.onerror()
    expect(wrapper.vm.isError).toBe(true)
  })

  test('test onload', () => {
    const wrapper = mount(LazyImg, {
      propsData: {
        src: errSrc
      }
    })
    wrapper.vm.onload()
    expect(wrapper.vm.isLoaded).toBe(true)
  })

  test('test unregisterOberver', () => {
    const wrapper = mount(LazyImg, {
      propsData: {
        src
      }
    })
    wrapper.vm.unregisterOberver()
    expect(wrapper.vm.observer).toBe(null)
  })
})