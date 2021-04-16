<template>
    <div class="counters">
        <h1>CONTADORES</h1>
        <app-counter v-for="n in 5" :key="n"/>
        <button>?</button>
    </div>
</template>

<script>
import Counter from './Counter'
export default {
    components: {
        'app-counter': Counter
    }
}
</script>

<style scoped>
    /* div {
        border: 1px solid red;
    } */
</style>