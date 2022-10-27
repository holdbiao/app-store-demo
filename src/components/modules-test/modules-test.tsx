import { Component as tsc } from 'vue-tsx-support';
import { Component } from 'vue-property-decorator';
import './modules-test.scss';

@Component({
  components: {
  }
})
export default class ModulesTest extends tsc<{}> {
  render() {
    return (
      <div class="modules-test">
        modules-test
      </div>
    )
  }
}
