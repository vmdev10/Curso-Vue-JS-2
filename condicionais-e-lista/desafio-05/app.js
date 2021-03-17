new Vue({
	el: '#change',
	data: {
		isToSee: false,
		statesList: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 
		'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso',
		'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco',
		'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
		'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'],
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
	},
	methods: {
		toggleToSee() {
			this.isToSee = !this.isToSee
			console.log(this.isToSee)
		}
	}
});
