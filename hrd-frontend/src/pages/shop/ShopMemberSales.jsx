import React, { useState, useEffect } from 'react';
import { getShopMemberSales } from '../../api/ShopMemberApi';

export const ShopMemberSales = () => {
    const [salesList, setSalesList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getShopMemberSales()
            .then(setSalesList)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>로딩 중...</div>;

    return (
        <div className="shop-member-sales">
            <h2>회원 매출 조회</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>회원번호</th>
                        <th>회원이름</th>
                        <th>등급</th>
                        <th>매출</th>
                    </tr>
                </thead>
                <tbody>
                    {salesList.map((sales) => (
                        <tr key={sales.custno}>
                            <td>{sales.custno}</td>
                            <td>{sales.custname}</td>
                            <td>{sales.grade_name}</td>
                            <td>{sales.sales?.toLocaleString()}원</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};