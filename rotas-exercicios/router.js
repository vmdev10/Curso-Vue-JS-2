import Vue from "vue";
import Router from "vue-router";
import Inicio from "./src/components/Inicio.vue";
import Usuario from "./src/components/usuario/Usuario.vue";

// Fazer o registro global -  A partir daí eu consigo acessar o router nos componentes, através do this.$router ou as rotas através do this.$route
Vue.use(Router);

export default new Router({
  mode: "hash",
  // mode: "history", É necessário uma configuração no servidor para usar o modo 'history' corretamente
  routes: [
    {
      path: "/",
      name: "Início",
      component: Inicio,
    },
    {
      path: "/usuario/:id",
      props: true,
      component: Usuario,
    },
  ],
});
