import { useEffect } from "react"
import { getAuditionManagement } from "../api/AuditionManagementApi"

const AuditionManagement = () => {
    useEffect(() => {
        getAuditionManagement().then(data => console.log(data));
    }, []);
    return <div>Audition Management Page</div>;
};
export default AuditionManagement;