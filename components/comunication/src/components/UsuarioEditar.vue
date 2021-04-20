<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário: {{ age }}</p>
    <button @click="changeAge">Alterar Idade</button>
  </div>
</template>

<script>
export default {
  props: { age: { type: Number } },
  methods: {
      changeAge() {
        //   const newAge = 33
          this.$emit('changed-age', 33)
      }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
