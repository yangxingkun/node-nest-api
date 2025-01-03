import { PrismaClient } from '@prisma/client';
import { Random } from 'mockjs';

const prisma = new PrismaClient();

async function main() {
  // ...
  await prisma.user.create({
    data: {
      email: Random.email(),
      password: Random.string(10),
      github: Random.string(),
      name: Random.cname(),
      avatar: Random.image('300x300'),
    },
  });
}
main();
