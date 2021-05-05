<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot>
        <slot name="autor"></slot>
    </div>
</template>

<script>
export default {
    props: ['quote']
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    /* A estilização do conteúdo do slot é feita tanto pelo componente pai quanto pelo componente que está o slot */
    h1 {
        color: red;
    }
</style>
