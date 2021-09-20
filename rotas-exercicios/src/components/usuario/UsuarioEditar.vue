<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código: </strong> {{ id }} / {{ id }}</p>
    <p><strong>Completo: </strong> {{ this.$route.query.completo ? 'Sim' : 'Não' }}</p>
    <p><strong>Idioma: </strong> {{ this.$route.query.lingua }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>
