<template>
    <div class="counter">
        <h1>{{ counter }}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
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

<style>
    .counter h1 {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    .counter button {
        height: 30px;
        width: 30px;
        margin-right: 10px;
        border-radius: 15px;

        background-color: #c8c2c2;
        outline: none;
    }
</style>
