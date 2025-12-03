import { useNavigate } from "react-router-dom";

export default function Articles(){
    const NavigateFunction = useNavigate();
    return (
        <section>
            <button 
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
            onClick={()=>{NavigateFunction(`/article/${4}`)}}
            >
                article 4
            </button>
            <button 
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
            onClick={()=>{NavigateFunction(`/article/${5}`)}}
            >
                article 5
            </button>
        </section>
    );
}