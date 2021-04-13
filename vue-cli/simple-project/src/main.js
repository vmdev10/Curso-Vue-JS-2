// Porta de entrada da aplicação
// Onde a Vue instance está sendo criada e montada na div "app"
import { createApp } from 'vue'
import App from './App.vue'

//Createapp está criando um elemento e passando coo argumento o componente App
createApp(App).mount('#app')
