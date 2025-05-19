import { createUser, createUserToken, hasEmail } from "@/services/auth";
import { NextResponse, userAgent } from "next/server";

export async function POST(request: Request) {

    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
        return NextResponse.json({ error: "Campos Incompletos" }, { status: 400 });
    }

    const has = await hasEmail(email);
    if (has) return NextResponse.json({ error: "Email já cadastrado" }, { status: 400 });

    const newUser = await createUser(name, email, password);
    if (!newUser) return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });

    const token = await createUserToken(newUser.id);

    return NextResponse.json({ user: newUser, token }, { status: 201 });
}