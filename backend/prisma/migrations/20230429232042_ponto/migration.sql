-- CreateTable
CREATE TABLE "Ponto" (
    "id" TEXT NOT NULL,
    "chave" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ponto_pkey" PRIMARY KEY ("id")
);
