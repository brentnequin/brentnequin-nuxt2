<template>
    <div>
        <TheHeader />
        <NotionArticle v-if="$route.query.s" @title="setTitle" />
        <PageNotFound v-else />
    </div>
</template>

<script>
export default {

    head() {
        return {
            title: `${this.title} | Brent Nequin`
        }
    },

    methods: {
        setTitle(title) {
            this.title = title
        }
    }

}
</script>