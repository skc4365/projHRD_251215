import { useEffect } from "react";
import { getMenu } from "../api/mainApi";

export const MainPage = () => {
    useEffect(() => {
        getMenu()
            .then(data => console.log(data));
    }, []);
    return <div>Main Page</div>;

};

