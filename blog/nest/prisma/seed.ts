import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'
import { Random } from 'mockjs'
const prisma = new PrismaClient()
async function run() {
  await prisma.user.deleteMany({})
  // const uniqueUsername = `user_${Random.word()}${Date.now()}${Random.integer(1, 1000)}`;
  await prisma.user.create({
    data: {
      name: 'admin',
      password: await hash('admin888'),
      roles: 'admin',
    },
  })

  for (let index = 1; index < 6; index++) {
    await prisma.category.create({
      data: {
        title: Random.ctitle(3, 6),
      },
    })
  }

  for (let index = 0; index < 50; index++) {
    await prisma.article.create({
      data: {
        title: Random.ctitle(1, 10),
        content: Random.cparagraph(10, 50),
        categoryId: Random.integer(1, 5),
      },
    })
  }
}

run()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
