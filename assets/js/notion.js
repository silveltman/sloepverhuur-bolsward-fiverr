// const { Client } = require("@notionhq/client")
import { Client } from 'https://unpkg.com/@notionhq/client'

const token = 'secret_rK3VxXVXY7CQii4DaeBdF06Q11AN0uPpUNNTD1IDBWL'
// Initializing a client
const notion = new Client({
  auth: token,
})
console.log(notion)

// ;(async () => {
//   const listUsersResponse = await notion.users.list({})
//   console.log(listUsersResponse)
// })()
