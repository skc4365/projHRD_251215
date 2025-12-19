import { useEffect, useState } from "react";

export const ShopMemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('/api/shopmember/list')
            .then(response => response.json())
            .then(data => setMembers(data))
            .catch(error => console.error('쇼핑회원 목록 조회 실패:', error));
    }, []);

    return (
        <div>
            <h2>회원 목록 조회 / 수정</h2>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>회원번호</th>
                        <th>회원명</th>
                        <th>전화번호</th>
                        <th>주소</th>
                        <th>가입일</th>
                        <th>등급</th>
                        <th>도시</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.custno}>
                            <td>{member.custno}</td>
                            <td>{member.custname}</td>
                            <td>{member.phone}</td>
                            <td>{member.address}</td>
                            <td>{member.joindate}</td>
                            <td>{member.grade_name}</td>
                            <td>{member.city}</td>
                            <td>
                                <button onClick={() => alert("수정 기능 예정")}>
                                    수정
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};