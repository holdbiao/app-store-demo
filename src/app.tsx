import { Component as tsc } from 'vue-tsx-support'
import { Component } from 'vue-property-decorator'
import Home from './pages/home/home'

@Component({
  name: 'App'
})
export default class App extends tsc<{}> {
  render() {
    return (
      <div class="app">
        <Home />
      </div>
    )
  }
}
