import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.get(`/`, async (req, res) => {
  res.json({result: 'home'})
})
app.get(`/user`, async (req, res) => {
  const result = await prisma.master_asset.findMany()
  res.json(result)
})

app.get('/users', async (req, res) => {
  const users = await prisma.master_asset.findMany()
  res.json(users)
})
const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
