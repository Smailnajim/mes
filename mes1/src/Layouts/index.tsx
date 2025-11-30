import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Index() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavBar />

            <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}
