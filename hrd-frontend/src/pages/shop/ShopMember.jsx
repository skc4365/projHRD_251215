import { useEffect, useState } from "react"
import SubHeader from "../../components/SubHeader"
import { ShopMemberList } from "./ShopMemberList";
import { ShopMemberSales } from "./ShopMemberSales";
import { SubNavigation } from "../../components/SubNavigation";
import { getShopMember } from "../../api/ShopMemberApi";
import { Route, Routes } from "react-router-dom";
import '../../components/Sub.css'
import { ShopMemberViewAdd } from "./ShopMemberViewAdd";

export const ShopMember = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getShopMember()
        .then(setItems);

    }, []);
    return (
        <>
            <SubHeader title="쇼핑몰 회원관리" />
            {/** 메뉴링크 */}
            <SubNavigation
                basePath="/shopmember"
                value={[
                    { label: "회원등록", path: "view-add" },
                    { label: "회원조회/수정", path: "list" },
                    { label: "회원매출조회", path: "sales" },
                    { label: "홈으로", path: "" }
                ]}
            />
            {/* 메인내용출력 */}
            <div className="sub-content">
                <Routes>
                    <Route path="view-add" element={<ShopMemberViewAdd />} />
                    <Route path="list" element={<ShopMemberList />} />
                    <Route path="sales" element={<ShopMemberSales />} />
                </Routes>
            </div>


        </>
    );

};
