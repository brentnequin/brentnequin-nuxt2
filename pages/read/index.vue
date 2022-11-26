<template>
    <div>
        <TheHeader />
        <NotionArticle v-if="$route.s" />
        <PageNotFound v-else />
    </div>
</template>
