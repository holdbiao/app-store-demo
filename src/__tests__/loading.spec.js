import { mount, createLocalVue } from '@vue/test-utils'
import Home from '../pages/home/home'
import Loading from '../components/loading/index'

describe('test loading', () => {
  const localVue = createLocalVue()
  localVue.use(Loading)
  const wrapper = mount(Home, {
    localVue
  })
  test('render loading', () => {
    setTimeout(() => {
      const Loading = wrapper.findComponent({ name: 'Loading' })
      expect(Loading.isVueInstance()).toBeTruthy()
      expect(Loading.vm.isLoading).toBe(true)
      setTimeout(() => {
        expect(Loading.vm.isLoading).toBe(false)
      }, 200)
    }, 0)
  })
})