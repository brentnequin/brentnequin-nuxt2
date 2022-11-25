import { Client } from '@notionhq/client'

export const actions = {
    async getPages (context, database_id) {
        const notion = new Client({ auth: this.$config.NOTION_API_SECRET })
        const response = await notion.databases.query({ 
            database_id: database_id, //this.$config.NOTION_API_DATABASE_ID_DOCS,
            filter: {
                property: "Published",
                checkbox: {
                    equals: true
                }
            },
            sorts: [{
                property: 'Last edited time',
                direction: 'ascending',
            }]
        })

        return response.results
    },

    async getPage(context, page_id) {
        const notion = new Client({ auth: this.$config.NOTION_API_SECRET })
        const response = await notion.pages.retrieve({
            page_id: page_id
        });

        return response
    },

    async getPageBlocks(context, page_id) {
        const notion = new Client({ auth: this.$config.NOTION_API_SECRET })
        const response = await notion.blocks.children.list({
            block_id: page_id
        });

        return response.results
    }

}