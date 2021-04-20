<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário: {{ age }}</p>
    <button @click="changeAge">Alterar Idade</button>
    <button @click="changeFn()">Alterar Idade (Callback)</button>
  </div>
</template>

<script>
import eventBus from '../eventBus'
export default {
  props: { age: { type: Number }, changeFn: Function },
  methods: {
      changeAge() {
        //   const newAge = 33
        //   this.$emit('changed-age', 33)

        // Usando event bus para comunicação entre componentes irmãos
        this.age += 1
        eventBus.$emit('changedAge', this.age)
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
