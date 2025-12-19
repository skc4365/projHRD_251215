import { useEffect } from "react"
import { getGolfClubSystem } from "../api/GolfClubSystemApi";

const GolfClubSystem = () => {
    useEffect(() => {
        getGolfClubSystem().then(data => console.log(data));
    }, []);
    return <div>Golf Club System Page</div>;
};

export default GolfClubSystem;