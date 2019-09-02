<template>
    <transition name="loading">
        <div class="loading" v-if="loading">Loading</div>
    </transition>
</template>

<script>
export default {
    computed: {
        loading() { return this.$store.state.view.loading }
    }
}
</script>

