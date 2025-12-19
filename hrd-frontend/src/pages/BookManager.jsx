import { useEffect } from "react"
import { getBookManager } from "../api/BookManagerApi";

const BookManager = () => {
    useEffect(() => {
        getBookManager().then(data => console.log(data));
    }, []);
    return <div>Book Manager Page</div>;
};

export default BookManager;