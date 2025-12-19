import { useEffect } from "react";
import { getMenu } from "../api/mainApi";

const MainPage = () => {
    useEffect(() => {
        getMenu()
            .then(data => console.log(data));
    }, []);
    return <div>Main Page</div>;

};

export default MainPage;