# Migration `20200615125044-init`

This migration has been generated at 6/15/2020, 12:50:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `bam`.`User` (
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,`email` varchar(191) NOT NULL  ,`firstName` varchar(191) NOT NULL  ,`id` int NOT NULL  AUTO_INCREMENT,`lastName` varchar(191) NOT NULL  ,`password` varchar(191) NOT NULL  ,`updatedAt` datetime(3) NOT NULL  ,`userGroup` varchar(191) NOT NULL  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `bam`.`File` (
`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,`id` int NOT NULL  AUTO_INCREMENT,`originalFilename` varchar(191) NOT NULL  ,`src` varchar(191) NOT NULL  ,`updatedAt` datetime(3) NOT NULL  ,`userId` int  ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `bam`.`User`(`email`)

CREATE UNIQUE INDEX `File_userId` ON `bam`.`File`(`userId`)

ALTER TABLE `bam`.`File` ADD FOREIGN KEY (`userId`) REFERENCES `bam`.`User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200615125044-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,34 @@
+// This is your Prisma schema file.
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url      = env("PRISMA_DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = [env("PRISMA_BINARY_TARGET")]
+}
+
+model User {
+  id        Int      @id @default(autoincrement())
+  email     String   @unique
+  firstName String
+  lastName  String
+  password  String
+  userGroup String
+  updatedAt DateTime @updatedAt
+  createdAt DateTime @default(now())
+  avatar    File?
+}
+
+model File {
+  id               Int      @id @default(autoincrement())
+  src              String
+  originalFilename String
+  updatedAt        DateTime @updatedAt
+  createdAt        DateTime @default(now())
+  user             User?    @relation(fields: [userId], references: [id])
+  userId           Int?
+}
```


