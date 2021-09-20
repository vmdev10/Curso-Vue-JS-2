<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhe</h3>
    <p><strong>Código: </strong> {{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link tag="button" primario :to="{ name: 'usuarioEditar', params: { id }, query: { completo: true, lingua: 'pt-BR' }}">Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   // to = this.$route novo
  //   // from = this.$route antigo
  //   $route(to, from) {
  //     // console.log("novo", to.params.id);
  //     // console.log("antigo", from.params.id);
  //     this.id = to.params.id;
  //   },
  // },
};
</script>
