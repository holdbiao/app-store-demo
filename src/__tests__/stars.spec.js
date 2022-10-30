import { mount } from '@vue/test-utils'
import Stars from '../components/stars/stars'

describe('render compoment stars', () => {
  test('render', () => {
    const wrapper = mount(Stars)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('render class', () => {
    const wrapper = mount(Stars)
    expect(wrapper.attributes('class')).toBe('stars-wrap')
  })
  test('stars props score', () => {
    const score = 3;
    const wrapper = mount(Stars, {
      propsData: {
        score
      }
    })
    const starsList = wrapper.findAll('.icon-stars')
    expect(starsList.at(0).classes()).toContain('icon-star-full')
    expect(starsList.at(1).classes()).toContain('icon-star-full')
    expect(starsList.at(2).classes()).toContain('icon-star-full')
    expect(starsList.at(3).classes()).toContain('icon-star-empty')
    expect(starsList.at(4).classes()).toContain('icon-star-empty')
  })
})