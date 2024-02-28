import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
import Dashboard from "./components/Dashboard";

export default async function Home() {
    const session = await getServerSession(authOptions);

    // If logged in, show dashboard
    if (session) {
        return <Dashboard/>
    }
 
    // If not logged in, show landing page
    return (
        <div className="prose">
            <h1>Welcome to TastyMenu</h1>
        </div>
    )
}
