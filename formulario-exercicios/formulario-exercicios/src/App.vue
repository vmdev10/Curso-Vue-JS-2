<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<!-- Formulário -->
			<form class="painel" v-if="!sent">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					<!-- O modificador de input 'lazy' sincroniza o elemento com os dados após o evento 'change' -->
					<!-- O modificador de input 'trim' retira os espaços do início e do fim do texto -->
					<input v-model.lazy.trim="user.name" type="text">
				</Rotulo>

				<Rotulo nome="Senha">
					<input v-model="user.password" type="password">
				</Rotulo>

				<Rotulo nome="Idade">
					<!-- Mesmo no caso de type="number" o valor retornado pelo HTML é uma String -->
					<!-- O modificador 'number' converte a entrada do usuário para Number -->
					<input v-model.number="user.age" type="number">
				</Rotulo>

				<Rotulo nome="Mensagem">
					<textarea v-model="mensage" name="" cols="30" rows="5"></textarea>
				</Rotulo>

				<Rotulo nome="Características do Problema">
					<!-- O data-bind em checkbox é feito a partir da criação de uma propriedade que e um array vazio
					Essa mesma propriedade é adicionada aos checkbox e ela será preenchida com o valor da propriedade 'value' deles -->
					<span class="mr-4"><input type="checkbox" value="reproduzivel" v-model="characteristics"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente" v-model="characteristics"> Intermitente</span>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input v-model="product" value="Web" type="radio"> Web</span>
					<span class="mr-4"><input v-model="product" value="Mobile" type="radio"> Mobile</span>
					<span><input v-model="product" value="Outro" type="radio"> Outro</span>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<!-- Para fazer o data-bind de um select, posso definir um 'value' em <option> se eu quiser definir um valor diferente do que está sendo exibido
					e adicionar o v-model em <select> ou apenas ocultar o 'value' e o v-model intrpolará o valor que está sendo exbido em <option>	 -->
					<select v-model="priority">
						<option v-for="priority in priorities" :key="priority.code" :value="priority.code">{{ priority.code }}. {{ priority.name }}</option>
					</select>
				</Rotulo>

				<!-- V-model em um componente é necessário receber o 'value' como uma props no componente filho,
				e para fazer a atualização no caminho reverso, isto é, sempre que for feita uma alteração nessa props no componente filho,
				deve ser emitido um evento do tipo input, retornando a alteração -->
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="on"/>
				</Rotulo>

				<hr>
				<button @click.prevent="send">Enviar</button>
			</form>

			<!-- Painel de resultado -->
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ user.name }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span>{{ user.password }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span>{{ user.age }} {{typeAge}}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!-- Aqui é aplicado por padão uma propriedade CSS (white-space) que não considera as quebras de linha nem os espaços desnecessários -->
					<!-- Posso alterar o valor da propriedade css ou usar a tag <pre> que PREserva o estado do texto -->
					<span style="white-space: pre">{{ mensage }}</span>
					<!-- <span>{{ mensage }}</span> -->
				</Rotulo>
				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="c in characteristics" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<!-- Para fazer o data-bind em input radio basta adicionar a mesma propridade aos inputs, que é do tipo String, e o seu valor é preenchido com o valor do 'value' que está marcado -->
					<span>{{ product }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ priority }}</span>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ on }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },

  computed: {
    typeAge() {
      return typeof this.user.age; // Vai ter como padrão o tipo string, que será modificado pelo modifcador de input 'number'
    },
  },

  data() {
    return {
      on: true,
      mensage: "",
      characteristics: [],
      priority: "",
      priorities: [
        { code: 1, name: "Baixa" },
        { code: 2, name: "Média" },
        { code: 3, name: "Alta" },
      ],
      product: "Web",

      // Criar um objeto com os dados do formulário é uma forma de:
      // - Agrupar os dados
      // - Colocar um valor padrão para eles
      // - Dá flexibilidade de ocultar todos os atributos dentro do objeto e penas referencia-los no v-model (user.email), mas via de regra é adicionado os atributos
      user: {
        name: "",
        password: "",
        age: 25,
      },
      sent: false,
    };
  },

  methods: {
    send() {
      this.sent = true;

      // Requisições HTTP
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
