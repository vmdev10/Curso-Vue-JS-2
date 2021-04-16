<template>
    <div class="counter">
        <span>{{ counter }}</span>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <!-- <div>test</div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
}
</script>
// A propriedade scoped torna um estilo aplicado a um componente, restrito a ele, não interferindo no css de outro componente.
// O scoped aplicado a um elemento pai será compartilhado com seus elementos filhos diretos, ou seja, não irá interferir nos filhos dos filhos
<style scoped>
    /* div {
        border: 1px solid blue;
    } */
    .counter span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    .counter button {
        height: 30px;
        width: 30px;
        margin: 10px 10px;
        border-radius: 15px;

        background-color: #c8c2c2;
        outline: none;
    }
</style>
