import { redirect } from "next/navigation";

export default function BackendAdminPage() {
    redirect(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin`);
}