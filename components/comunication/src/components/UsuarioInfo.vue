<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do usuário: <strong>{{ reverseName() }}</strong> </p>
    </div>
</template>

<script>
export default {
    props: ['userName'],
    methods: {
        reverseName() {
            return this.userName.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
