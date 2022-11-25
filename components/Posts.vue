<template>
    <div class="container my-24">
        <h2 class="text-3xl text-center my-8">My Blog</h2>
        <div class="m-4 flex flex-wrap justify-center items-center">
            <div v-for="page in pages" v-bind:key="page.id" class="m-4">
                <NuxtLink :to="{path: 'read', query: { s: page.id }}">
                    <Card 
                        :title="page.properties.Name.title[0].plain_text"
                        :created-time="page.created_time"
                    />
                </NuxtLink>
            </div>
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