import { useEffect } from "react"
import { getEmployeeManagement } from "../api/EmployeeManagementApi";

const EmployeeManagement = () => {
    useEffect(() => {
        getEmployeeManagement().then(data => console.log(data));
    }, []);
    return <div>Employee Management Page</div>;
};

export default EmployeeManagement;