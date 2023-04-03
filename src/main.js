import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//  import axios from 'axios'
// import VueAxios from 'vue-axios'

// import CustomConstants from './constants/Constants.vue';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// Vue.use(CustomConstants);

// import PermissionService from './services/PermissionService.vue';
// import PermissionTypeService from './services/PermissionTypeService.vue';

// Vue.prototype.PermissionService = PermissionService;
// Vue.prototype.PermissionTypeService = PermissionTypeService;

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false;

//Vue.use(axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
