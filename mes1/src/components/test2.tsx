import { useParams } from "react-router-dom";

export default function Test2(){
    const {param} = useParams();
    return (
        <>
            <h1>hi!</h1>
            <p>{param}</p>
        </>
    );
}