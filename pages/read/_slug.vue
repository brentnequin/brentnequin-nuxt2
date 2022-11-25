<template>
    <main class="container my-24">
        {{ slug }}
    </main>
</template>

<script>
export default {

    data() {
        return {

        }
    },

    created() {
        console.log(this.$route.query.s);
        this.slug = this.$route.query.s
    }
}
</script>