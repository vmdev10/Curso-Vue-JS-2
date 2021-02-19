new Vue({
  el: "#challenge",
  data: {
    value: "",
  },
  methods: {
    alert() {
      alert("O BOTÃO FOI CLICADO!!!");
    },
    keydownValue(event) {
      this.value = event.target.value;
    },
  },
});
