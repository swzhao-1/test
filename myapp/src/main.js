import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);
Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-header',
  'ion-navbar',
  'ion-title',
  'ion-content',
  'ion-button',
  'ion-card',
  'ion-toobar',
  'ion-input',
  'ion-item',
  'ion-label',
  'ion-toolbar',
  'ion-radio-group',
  'ion-radio',
  'ion-text',
  'ion-checkbox',
  'ion-back-button',
  'ion-buttons',
  'ion-searchbar',
  'ion-list',
  'ion-col',
  'ion-row',
  'ion-icon',
  'ion-tab-bar',
  'ion-tab-button',

];
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

