import { createApp } from 'vue'
import App from './App.vue'
import Counters from './Counters.vue'
// import Counter from './Counter.vue'

// Registrando o componente de forma global
// createApp(App).component('app-counter', Counter).mount('#app')
createApp(App).component('app-counters', Counters).mount('#app')
