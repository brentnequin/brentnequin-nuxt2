<template>
    <div>
        <TheHeader />
        <main class="container my-24">
            <h1 class="text-4xl my-8">{{ page.properties.Name[page.properties.Name.type][0].plain_text }}</h1>
            <div v-for="block in blocks" v-bind:key="block.id" class="my-4">{{ blockContent(block) }}</div>
        </main>
    </div>
</template>

<script>
export default {

    // data() {
    //     return {
    //         page: null,
    //         blocks: null
    //     }
    // },

    async asyncData ({ app, query, store }) {
        return {
            page: await store.dispatch('getPage', query.s),
            blocks: await store.dispatch('getPageBlocks', query.s)
        }
    },

    mounted() {
        console.log(this.blocks);
    },

    methods: {
        blockContent(block) {
            return 'rich_text' in block[block.type] ? block[block.type].rich_text[0].text.content : null
        }
    }
}
</script>