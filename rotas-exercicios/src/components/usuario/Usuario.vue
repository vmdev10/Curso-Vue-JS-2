<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <router-view></router-view>
    <button @click="voltar" sucesso>Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",

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
