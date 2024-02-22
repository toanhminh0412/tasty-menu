import bcrypt from "bcrypt";

import dbConnect from "@/app/lib/dbConnect";
import { User } from "@/app/models/User";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    await dbConnect();

    // Find an user with email
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
        return Response.json({ error: "User does not exist. Please sign up!" }, { status: 400 });
    }

    // Check if the password is correct
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return Response.json({ error: "Password is incorrect" }, { status: 400 });
    }
    
    return Response.json({
        'name': user.name,
        'email': user.email
    }, { status: 200 });
}