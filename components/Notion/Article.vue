<template>
    <div v-if="$fetchState.pending"></div>
    <h1 v-else-if="$fetchState.error">Oops, something shit the bed</h1>
    <article v-else class="container my-24">
        <p class="text-gray-400">{{ new Date(page.created_time).toDateString().split(' ').slice(1).join(' ') }}</p>
        <h1 class="text-4xl my-8">{{ page.properties.Name[page.properties.Name.type][0].plain_text }}</h1>
        <div :style='`background-image: url("${page.cover[page.cover.type].url}")`' class="h-60 rounded-md bg-cover bg-center bg-no-repeat my-8" />
        <NotionBlock v-for="block in blocks" v-bind:key="block.id" class="my-4" :block="block" />
    </article>
</template>

<script>
export default {

    data: () => ({
        page: null,
        blocks: null,
    }),

    async fetch () {
        this.page = await this.$store.dispatch('getPage', this.$route.query.s),
        this.blocks = await this.$store.dispatch('getPageBlocks', this.$route.query.s)
        this.$emit('title', this.page.properties.Name[this.page.properties.Name.type][0].plain_text)
    },

    mounted() {
        console.log(this.page)
        console.log(this.blocks)
    },

    // methods: {
    //     blockContent(block) {
    //         return 'rich_text' in block[block.type] ? block[block.type].rich_text[0].text.content : null
    //     }
    // }

}
</script>