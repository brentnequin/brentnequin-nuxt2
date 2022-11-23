<template>
    <div>
        <div>This is a post</div>
        <div>database id: {{ $config.docs }}</div>
    </div>
</template>

<script>
import { Client } from '@notionhq/client'
export default {
    async mounted() {
        const notion = new Client({ auth: process.env.NOTION_API_SECRET })

        if (req.method === 'POST') {
            
        } else {
            const database = await notion.databases.query({ database_id: process.env.NOTION_API_DATABASE_ID_DOCS})

            return database
        }
    }
}
</script>