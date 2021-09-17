<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <p><strong>Código: </strong> {{ id }}</p>
    <button @click="voltar" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
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
  methods: {
    voltar() {
      // Passo o path, que renderizará o seu respectivo componente
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "Início" });
    },
  },
};
</script>
