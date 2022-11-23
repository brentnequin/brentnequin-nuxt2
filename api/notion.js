import { Client } from '@notionhq/client'

export default async (req, res) => {

    const notion = new Client({ auth: process.env.NOTION_API_SECRET })

    if (req.method === 'POST') {
        
    } else {
        const database = await notion.databases.query({ database_id: process.env.NOTION_API_DATABASE_ID_DOCS})

        return database
    }
}