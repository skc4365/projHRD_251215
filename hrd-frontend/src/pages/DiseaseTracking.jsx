import { useEffect } from "react"
import { getDiseaseTracking } from "../api/DiseaseTrackingApi";

const DiseaseTracking = () => {
    useEffect(() => {
        getDiseaseTracking().then(data => console.log(data));
    }, []);
    return <div>Disease Tracking Page</div>;
};

export default DiseaseTracking;