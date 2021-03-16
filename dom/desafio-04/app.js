new Vue({
	el: '#desafio',
	data: {
		isDestaque = false
	},
	methods: {
		iniciarEfeito() {
			return isDestaque ? destaque : escolher
		},
		iniciarProgresso() {

		}
	}
})
