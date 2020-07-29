import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(codemirror)
Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
