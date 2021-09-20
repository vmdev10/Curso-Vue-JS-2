import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio.vue";
// import Menu from "./components/template/Menu.vue";

import Usuario from "./components/usuario/Usuario.vue";
import UsuarioLista from "./components/usuario/UsuarioLista.vue";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue";
import UsuarioEditar from "./components/usuario/UsuarioEditar.vue";
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
      // components: {
      //   default: Inicio,
      //   menu: Menu,
      // },
    },
    {
      path: "/usuario",
      component: Usuario,
      children: [
        {
          path: "",
          component: UsuarioLista,
        },
        {
          path: ":id",
          component: UsuarioDetalhe,
          props: true,
        },
        {
          path: ":id/editar",
          name: "usuarioEditar",
          component: UsuarioEditar,
          props: true,
        },
      ],
    },
  ],
});
