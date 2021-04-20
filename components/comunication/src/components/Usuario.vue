<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>Nome do usuário: {{ name }}</p>
    <p>Idade do usuário: {{ age }}</p>
    <button @click="changeName">Alterar Nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :userName="name"
        :age="age"
        :resetFn="resetName"
        @changed-name="name = $event.newName + $event.oldName"
      />
      <app-usuario-editar
        :age="age"
        :changeFn="changeAge"
      />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      name: "Ana",
      age: 21,
    };
  },
  methods: {
    changeName() {
      this.name = "Júlia";
    },
    // Comunicação indireta entre componentes por Callback
    resetName() {
      this.name = "Ana";
    },
    changeAge() {
      this.age = 18
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
