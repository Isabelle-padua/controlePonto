/*
  Warnings:

  - Added the required column `tipoValor` to the `Ponto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ponto" ADD COLUMN     "tipoValor" INTEGER NOT NULL;
