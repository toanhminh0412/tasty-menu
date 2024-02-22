import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "@/app/contants";
import dbConnect from "@/app/lib/dbConnect";
import { User } from "@/app/models/User";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    await dbConnect();

    // Check if an user with the same email exists
    const existingUser = await User.findOne({ email: email }).exec();
    if (existingUser) {
        return Response.json({ error: "User with the email already exists" }, { status: 400 });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ email: email, password: hashedPassword });
    await user.save();
    return Response.json({ message: "Sign up successfully!" }, { status: 201 });
}