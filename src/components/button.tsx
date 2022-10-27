import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import Input from './input';
import TextCom from './text.vue';
const ModulesTest = () => import(/* webpackChunkName: 'ModulesTest' */ './modules-test/modules-test')
@Component({
  components: {
    TextCom
  }
})
export default class Button extends tsc<{}> {

  loadModules = false

  list = new Array(10).fill(null)

  handleClick(e) {
    console.log('test tsx: ', e)
    this.loadModules = !this.loadModules
  }
  handleInput(e) {
    console.log('input: ', e)
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        {
          this.loadModules && <ModulesTest></ModulesTest>
        }
        <text-com></text-com>
        <Input placeholder="请输入" onInput={this.handleInput}></Input>
        test tsx 1111
        {
          this.list.map((_item, index) => (
            <div>{index}</div>
          ))
        }
      </div>
    )
  }
}
