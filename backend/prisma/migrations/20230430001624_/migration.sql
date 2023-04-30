/*
  Warnings:

  - A unique constraint covering the columns `[chave]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuario_chave_key" ON "Usuario"("chave");
