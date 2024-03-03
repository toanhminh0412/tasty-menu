import authOptions from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import dbConnect from "@/app/lib/dbConnect";
import { Menu } from "@/app/models/Menu";

// Get all menus owned by the currently logged in user
export async function GET(req: Request) {
    // Only authenticated user can call this API
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return Response.json({ error: "User must be logged in to call this API" }, { status: 401 })
    }

    await dbConnect();

    const menus = await Menu.find({ owner: session.user.email }).exec();
    return Response.json({ menus: menus }, { status: 200 });
}