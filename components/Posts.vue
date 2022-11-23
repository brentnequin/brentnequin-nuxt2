<template>
    <div>
        <div>This is a post</div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            database: null
        }
    },

    async fetch () {
        this.database = await this.$store.dispatch('getDocs')
    },

    mounted() {
        console.log(this.database)
    }
}
</script>