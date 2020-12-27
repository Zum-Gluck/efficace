import TabBar from './TabBar/index.js'
import TabBarItem from './TabBarItem/index.js'

const components = [
  TabBar,
  TabBarItem
]
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  TabBar,
  TabBarItem
}