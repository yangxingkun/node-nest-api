# prisma 安装介绍

```bash
sudo mysql.server restart

n new prisma

 ```

## 生产依赖

```bash

# pnpm add prisma prisma-bindings @prisma/client mockjs class-transformer class-validator argon2 @nestjs/jwt @nestjs/config @nestjs/passport passport passport-local passport-jwt multer dayjs express 

pnpm add prisma @prisma/client mockjs class-transformer class-validator argon2 @nestjs/jwt @nestjs/config @nestjs/passport passport passport-local passport-jwt multer dayjs express



```

## 开发依赖

```bash

# pnpm add -D prisma typescript @types/node @types/express @types/passport-jwt @types/passport-local @types/mockjs @types/mapped-types @types/multer @types/express @types/lodash

pnpm add -D typescript @types/node @types/express @types/passport-jwt @types/passport-local @types/mockjs @nestjs/mapped-types @types/multer @types/lodash


```

## 配置 .zshrc 文件

```bash

#node

alias t="ts-node"

alias n="nest"

alias pr=="npx prisma"

```

## 配置 prisma 配置文件

```bash

npx prisma init

pr init


pr migrate dev


```

## 配置 .env 文件

DATABASE_URL="mysql://root:yxk12345@localhost:3306/node-nest-api"

1. mysql 数据库
2. 账号
3. 密码
4. 主机名
5. 端口
6. 数据库名

连接完数据库 建表

- 类似于  mysql -uroot -p yxk12345 操作




`

```bash


#建表
npx prisma migrate dev
#如果没有生成关联表提示，进行格式化
npx prisma format
#表中数据填充
pr db seed ===npx prisma db seed (params) {
pr      (params) {
pr         
pr     }
pr }
#创建管道，生成几个文件， g:gennerate pi:pipe d:detail
n g pi filename --no-spec -d
n g pi filename --no-spec 
# 控制器写法
n g co filename --no-spec -d

```