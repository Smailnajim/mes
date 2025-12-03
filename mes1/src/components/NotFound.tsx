import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center text-center gap-4 py-16">
            <p className="text-6xl font-bold text-gray-800">404</p>
            <p className="text-gray-600">We couldn&apos;t find that page.</p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
            >
                Go home
            </Link>
        </section>
    );
}
