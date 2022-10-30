import { mount } from '@vue/test-utils'
import Loading from '../components/loading/loading'

describe('test loading', () => {
  test('render loading', () => {
    const loading = mount(Loading)
    setTimeout(() => {
      loading.handleShow()
      setTimeout(() => {
        expect(Loading.isVueInstance()).toBeTruthy()
        expect(Loading.vm.isLoading).toBe(true)
      }, 200)
    }, 100)
  })

  test('test hide', () => {
    setTimeout(() => {
      wrapper.vm.$loading.show()
      const Loading = wrapper.findComponent({ name: 'Loading' })
      Loading.vm.handleHide()
      expect(Loading.vm.isLoading).toBe(false)
    }, 100)
    
  })
})