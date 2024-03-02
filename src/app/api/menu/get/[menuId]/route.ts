import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import dbConnect from "@/app/lib/dbConnect";
import { Menu } from "@/app/models/Menu";

// Get a single menu
export async function GET(req: Request, { params }) {
    // Only authenticated user can call this API
    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session || !session.user) {
        return Response.json({ error: "User must be logged in to call this API" }, { status: 401 })
    }

    const { menuId } = params;
    await dbConnect();

    const menu = await Menu.findById(menuId).exec();
    if (!menu) {
        return Response.json({ error: "Menu not found" }, { status: 404 });
    }

    // Only owner can get the menu
    if (menu.owner !== session.user.email) {
        return Response.json({ error: "User is not authorized to get the menu" }, { status: 403 });
    }

    return Response.json(menu, { status: 200 });
}