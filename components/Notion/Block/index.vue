<template>
    <h1 v-if="block.type === 'heading_1'" v-html="handleRichText" class="text-4xl mt-8" />
    <h2 v-else-if="block.type === 'heading_2'" v-html="handleRichText" class="text-3xl mt-8" />
    <h3 v-else-if="block.type === 'heading_3'" v-html="handleRichText" class="text-2xl mt-8" />
    <p v-else-if="block.type === 'paragraph'" v-html="handleRichText" />
    <div v-else-if="['bulleted_list_item', 'numbered_list_item'].includes(block.type)" class="pl-8"><li  v-html="handleRichText" class="pl-2" /></div>
    <div v-else-if="block.type === 'code'" class="bg-slate-600 rounded-md">
        <div class="p-4 overflow-x-auto"
            v-html="$md.render(
                '```' + 
                (block[block.type].language === 'plain text' ? '' : block[block.type].language) + 
                '\n' + 
                block[block.type].rich_text.map(({text}) => text.content).join(''),
                '\n' + '```'
            )"
            />
    </div>
    <div v-else-if="['column_list', 'toggle'].includes(block.type)" class="hidden" />
    <p v-else>?</p>
</template>

<script>
export default {
    props: {
        block: { type: Object }
    },

    computed: {
        handleRichText () {
            let result = ""
            let block = this.block[this.block.type]
            for (let text in block.rich_text) {
                result += this.richText(
                    block.rich_text[text].text.content,
                    block.rich_text[text].annotations.bold,
                    block.rich_text[text].annotations.italic,
                    block.rich_text[text].annotations.strikethrough,
                    block.rich_text[text].annotations.underline,
                    block.rich_text[text].annotations.code,
                )
            }
            return result
        }
    },

    methods: {
        richText(text, bold=false, italic=false, strikethrough=false, underline=false, code=false) {
            let result = text
            if (bold) { result = `<b>${result}</b>` }
            if (italic) { result = `<i>${result}</i>` }
            if (strikethrough) { result = `<strike>${result}</strike>` }
            if (underline) { result = `<u>${result}</u>` }
            if (code) { result = `<code><span>${result}</span></code>` }
            return result
        },
    }
}
</script>