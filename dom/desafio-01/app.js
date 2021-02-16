new Vue({
  el: "#desafio",
  data: {
    name: "Ana Vitória",
    age: 18,
    link: "https://br.vuejs.org/images/logo.png",
  },
  methods: {
    tripleAge() {
      return this.age * 3;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
