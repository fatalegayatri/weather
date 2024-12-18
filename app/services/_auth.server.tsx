// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import bcrypt from 'bcryptjs';
import { prisma } from "~/services/db.server";
import { sessionStorage } from "~/utils/session.server";

export const authenticator = new Authenticator<{
    id: string;
    username: string
}>(sessionStorage);

authenticator.use(
    new FormStrategy(async ({ form }) => {
        const username = form.get("username");
        const password = form.get("password");

        const user = await prisma.user.findUnique({
            where: { username: username as string }
        });

        if (!user) {
            throw new Error("Invalid username or password");
        }

        const isValid = await bcrypt.compare(
            password as string,
            user.password
        );

        if (!isValid) {
            throw new Error("Invalid username or password");
        }

        return {
            id: user.id,
            username: user.username
        };
    }),
    "user-pass"
);