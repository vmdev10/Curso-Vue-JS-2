<template>
    <div class="counters">
        <app-counter />
        <app-counter />
        <app-counter />
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

<style>

</style>