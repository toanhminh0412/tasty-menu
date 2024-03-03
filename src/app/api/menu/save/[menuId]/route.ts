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

    // User must be the owner of the menu to update it
    const updatedMenu = await Menu.findById(menuId).exec();

    if (!updatedMenu) {
        return Response.json({ error: "Menu not found" }, { status: 404 });
    }

    if (updatedMenu.owner !== session.user.email) {
        return Response.json({ error: "User must be the owner of the menu to update it" }, { status: 403 });
    }

    // Upload menu images to Firebase Storage if not already uploaded
    updatedMenu.set(menu);
    await updatedMenu.uploadImages();
    // Upload last updated time of menu
    updatedMenu.lastUpdated = Date.now();
    console.log(updatedMenu);

    // Update the menu in the database
    await updatedMenu.save();
    return Response.json({ message: "Menu saved successfully!" }, { status: 200 });
}