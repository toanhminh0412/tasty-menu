import authOptions from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import dbConnect from "@/app/lib/dbConnect";
import { Menu } from "@/app/models/Menu";

// Create a new menu
export async function POST(req: Request) {
    // Only authenticated user can call this API
    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session || !session.user) {
        return Response.json({ error: "User must be logged in to call this API" }, { status: 401 })
    }

    const { menu } = await req.json();
    await dbConnect();

    console.log(session.user);

    // Save the new menu to the database
    const newMenu = new Menu({ ...menu, owner: session.user.email });
    await newMenu.save();
    return Response.json({ 
        message: "Menu saved successfully!",
        menuId: newMenu._id
     }, { status: 201 });
}