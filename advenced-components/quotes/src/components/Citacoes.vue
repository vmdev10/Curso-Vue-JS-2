<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <Citacao
      ><h1 slot="fonte">{{ citacoes[indice].fonte }}</h1>
      <p>{{ citacoes[indice].texto }}</p>
      <h6 slot="autor">{{ citacoes[indice].autor }}</h6>
    </Citacao>
  </div>
</template>

<script>
import Citacao from "./Citacao";
export default {
  created() {
    console.log("Created");
  },
  destroyed() {
    console.log("Destroyed");
  },
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead",
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta",
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo",
        },
      ],
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    },
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* A estilização do conteúdo do slot é feita tanto pelo componente pai quanto pelo componente que está o slot */

h1 {
  color: #222;
}
</style>
