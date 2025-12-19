import { useEffect } from "react"
import { getStudentEnrollment } from "../api/StudentEnrollmentApi";

const StudentEnrollment = () => {
    useEffect(() => {
        getStudentEnrollment().then(data => console.log(data));
    }, []);
    return <div>StudentEnrollment Page</div>;
};

export default StudentEnrollment;