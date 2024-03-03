import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import dbConnect from "@/app/lib/dbConnect";
import { Menu } from "@/app/models/Menu";

// Save an existing menu
export async function POST(req: Request, { params }) {
    // Only authenticated user can call this API
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return Response.json({ error: "User must be logged in to call this API" }, { status: 401 })
    }

    const { menuId } = params;
    const { menu } = await req.json();
    await dbConnect();

    // Update the menu in the database
    await Menu.findByIdAndUpdate(menuId, menu);
    return Response.json({ message: "Menu updated successfully!" }, { status: 200 });
}