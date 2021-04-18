<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome do usuário: <strong>{{ reverseName() }}</strong> </p>
    </div>
</template>

<script>
export default {
    // props: ['userName'],
    props: {
        userName: {
            type: String, // Definindo o tipo da propriedade que eu espero receber
            // required: true, // Definindo a propriedade 'userName' como obrigatória
            default: 'Anônimo', // Definindo um valor padrão 'Anônimo', caso a propriedade não seja passada. Pode retornar uma função também, com uma lógica mais complexa.
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        }
    },
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
