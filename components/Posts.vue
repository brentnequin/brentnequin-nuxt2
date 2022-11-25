<template>
    <div class="container my-24">
        <h2 class="text-3xl text-center my-8">My Blog</h2>
        <div class="m-8 flex flex-wrap justify-center items-center space-x-8">
            <Card 
                v-for="page in pages"
                v-bind:key="page.id"
                :slug="page.id"
                :title="page.properties.Name.title[0].plain_text"
                :created_time="page.created_time"
            />
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            pages: []
        }
    },

    async fetch () {
        this.pages = await this.$store.dispatch('getDocs')
    },

    mounted() {
        console.log(this.pages)
    }
}
</script>