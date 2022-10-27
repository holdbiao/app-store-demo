import { Component as tsc } from 'vue-tsx-support'
import { Component, Prop, Emit } from 'vue-property-decorator'
interface IProps {
  placeholder: string;
}
interface IEvents {
  onInput: KeyboardEvent;
}
@Component
export default class Input extends tsc<IProps, IEvents> {
  @Prop({ type: String, default: 'test'}) placeholder: string;

  @Emit('input')
  handleInput(e: KeyboardEvent) {
    return e
  }
  render() {
    return (
      <input
        placeholder={this.placeholder}
        onInput={this.handleInput}></input>
    )
  }
}
