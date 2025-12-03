import { useLocation, useParams } from "react-router-dom";

export default function Test2(){
    const {param} = useParams();
    const location = useLocation();

    return (
        <>
            <h1>hi!</h1>
            <p>{param}</p>
            <p>
                pathname:{location.pathname},
            </p>
        </>
    );
}