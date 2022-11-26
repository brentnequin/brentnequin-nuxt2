<template>
    <div>
        <TheHeader />
        <main class="container my-24">

            <h2 class="text-4xl my-8">Components</h2>
            <h3 class="text-2xl my-8">Card</h3>
            <div class="mx-28 flex space-x-8 items-center justify-center">
                <Card 
                    title="Title"
                    subtitle="Subtitle"
                />
                <Card 
                    title="Title"
                    subtitle="Subtitle"
                />
                <Card 
                    title="Title"
                    subtitle="Subtitle"
                />
            </div>

            <h3 class="text-2xl my-8">Notion Text</h3>
            <div class="mx-28 flex space-x-8 items-center justify-center">
                <!-- <p>
                    <NotionBlockText text="Plain" />
                    <NotionBlockText text="Bold" bold />
                    <NotionBlockText text="Italic" italic />
                    <NotionBlockText text="Strikethrough" strikethrough />
                    <NotionBlockText text="Underline" underline />
                    <NotionBlockText text="Code" code />
                </p> -->
                <p v-html="handleRichText" />
            </div>

        </main>
    </div>
</template>

<script>
export default {
    data: () => ({
        testBlock: {
            rich_text: [
                {
                    text: "Hi ",
                    type: "text",
                    annotations: {
                        bold: true
                    }
                },
                {
                    text: "how ",
                    type: "text",
                    annotations: {
                        italic: true
                    }
                },
                {
                    text: "are you?",
                    type: "text",
                    annotations: {
                        underline: true
                    }
                },
            ]
        }
    }),

    computed: {
        handleRichText () {
            let result = ""
            for (let text in this.testBlock.rich_text) {
                result += this.richText(
                    this.testBlock.rich_text[text].text,
                    this.testBlock.rich_text[text].annotations.bold,
                    this.testBlock.rich_text[text].annotations.italic,
                    this.testBlock.rich_text[text].annotations.strikethrough,
                    this.testBlock.rich_text[text].annotations.underline,
                    this.testBlock.rich_text[text].annotations.code,
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