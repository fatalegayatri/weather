// app/services/db.server.ts
import { PrismaClient } from '@prisma/client'

// Prevent multiple Prisma client instances
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['error', 'warn'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Seed initial user
import bcrypt from 'bcryptjs'

export async function seedInitialUser() {
    const existingUser = await prisma.user.findUnique({
        where: { username: 'ipgautomotive' }
    })

    if (!existingUser) {
        const hashedPassword = await bcrypt.hash('carmaker', 10)

        await prisma.user.create({
            data: {
                username: 'ipgautomotive',
                password: hashedPassword
            }
        })
    }
}