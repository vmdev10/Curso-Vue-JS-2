<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
      quantidade: 1,
      preco: 9.99,
    };
  },
  methods: {
    //   A referênia à mapMutations é feita dentro de methods, diferente de mapGetters que é em computed
    ...mapMutations(["adicionarProduto"]),
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;

      // Alterando um dado na store diretamente
      //   this.$store.state.produtos.push(produto);

      // Alterando um dado na store através de uma mutation - opção 1
      //   this.$store.commit("adicionarProduto", produto);

      // Opção 2
      this.adicionarProduto(produto);
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
