<template>
    <nuxt-link to="#">
    <div class="w-64">
            <div class="h-32 w-full rounded-md bg-cover bg-center bg-no-repeat" :style='`background-image: url("${imgSrc}")`'></div>
            <div class="my-8">
                <h4 class="font-bold mb-2">{{ title }}</h4>
                <div class="text-xs text-gray-400">
                    {{ subtitle }}
                    <slot />
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            default: "https://www.notion.so/image/https:%2F%2Fres.cloudinary.com%2Fsev-deg-dev%2Fimage%2Fupload%2Fv1661509944%2FPersonal%2520Blog%2520Cover%2520Images%2Fdxx8jqobbxdlajbsy25i.jpg?table=block&id=64b6a708-d67a-4240-ac9f-9f393987771a&cache=v2"
        },
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        horizontal: {
            type: Boolean,
            default: false
        }
    }
}
</script>