import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getBookManager } from "../../api/BookManagerApi";
import { BookManagerMain } from "./BookManagerMain";
import { BookManagerViewAdd } from "./BookManagerViewAdd";
import { BookManagerRent } from "./BookManagerRent";
import { BookManagerList } from "./BookManagerList";

export const BookManager = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getBookManager()
        .then(setItems);
    }, []);
    return (
        <>
            <SubHeader title="도서대여 관리 프로그램" />
            {/** 메뉴링크 */}
            <SubNavigation
                basePath="/bookmanager"
                value={[
                    { label: "홈으로", path: "" },
                    { label: "회원등록", path: "view-add" },
                    { label: "회원대여 현황", path: "rent" },
                    { label: "회원목록 조회/수정", path: "list" }
                ]}
            />
            {/* 메인내용출력 */}
            <div className="sub-content">
                <Routes>
                    <Route path="" element={<BookManagerMain />} />
                    <Route path="view-add" element={<BookManagerViewAdd />} />
                    <Route path="rent" element={<BookManagerRent />} />
                    <Route path="list" element={<BookManagerList />} />
                </Routes>
            </div>
        </>
    );
};