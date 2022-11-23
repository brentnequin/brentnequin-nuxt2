import { Client } from '@notionhq/client'

export const actions = {
    async getDocs () {
        const notion = new Client({ auth: this.$config.NOTION_API_SECRET })
        const response = await notion.databases.query({ 
            database_id: this.$config.NOTION_API_DATABASE_ID_DOCS,
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
    }
}