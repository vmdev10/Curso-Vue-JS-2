new Vue({
	el: '#desafio',
	data: {
		isContrast: true,
		classOne: 'background',
		classTwo: 'color',
		color: 'color1',
		hasClass: true,
		isSuccessFail: 'success',
		yellowColor: 'yellow',
		hasProgress = 'progress'

	},
	methods: {
		iniciarEfeito() {
			return this.isContrast = !this.isContrast
		},
		changeColor() {
			this.hasClass = !this.hasClass
			this.isSuccessFail = this.hasClass ? 'Success' : 'Fail'
		},
		iniciarProgresso() {
			setInterval()
		}
	}
})
