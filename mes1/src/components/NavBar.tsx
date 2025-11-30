import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul className="flex items-center justify-center gap-8 bg-gray-900 px-6 py-4 shadow-md">
            <li className="text-white font-medium hover:text-blue-400 transition duration-200">
                <Link to="/">Home</Link>
            </li>

            <li className="text-white font-medium hover:text-blue-400 transition duration-200">
                <Link to="/about">About</Link>
            </li>

            <li className="text-white font-medium hover:text-blue-400 transition duration-200">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}
