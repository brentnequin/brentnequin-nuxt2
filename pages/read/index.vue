<template>
    <div>
        <TheHeader />
        <NotionArticle v-if="$route.query.s" />
        <PageNotFound v-else />
    </div>
</template>
