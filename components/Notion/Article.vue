<template>
    <article v-if="page" class="container my-24">
        <h1 class="text-4xl my-8">{{ page.properties.Name[page.properties.Name.type][0].plain_text }}</h1>
        <div v-for="block in blocks" v-bind:key="block.id" class="my-4">{{ blockContent(block) }}</div>
    </article>
</template>

<script>
export default {

    data() {
        return {
            page: null,
            blocks: null
        }
    },

    async fetch () {
        this.page = await this.$store.dispatch('getPage', this.$route.query.s),
        this.blocks = await this.$store.dispatch('getPageBlocks', this.$route.query.s)
    },

    methods: {
        blockContent(block) {
            return 'rich_text' in block[block.type] ? block[block.type].rich_text[0].text.content : null
        }
    }

}
</script>