import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
  async getAll() {
    return await prisma.product.findMany();
  },

  async getById(id) {
    return await prisma.product.findUnique({ where: { id: Number(id) } });
  },

  async create(data) {
    return await prisma.product.create({ data });
  },

  async update(id, data) {
    return await prisma.product.update({
      where: { id: Number(id) },
      data,
    });
  },

  async delete(id) {
    return await prisma.product.delete({
      where: { id: Number(id) },
    });
  }
};
