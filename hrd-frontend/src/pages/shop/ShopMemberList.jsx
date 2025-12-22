import { useEffect, useState } from "react";
import { getShopMemberList, deleteShopMember } from "../../api/ShopMemberApi";
import { Modal } from "../../components/Modal";
import { ShopMemberViewEdit } from "./ShopMemberViewEdit";
import { nameToCode } from "../../components/gradeUtils";


export const ShopMemberList = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editMember, setEditMember] = useState(null);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        getShopMemberList()
            .then(setMembers)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (custno) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;
        setBusy(true);
        try {
            await deleteShopMember(custno);
            setMembers(prev => prev.filter(m => m.custno !== custno));
        } catch (err) {
            alert('삭제 실패: ' + (err.message || err));
        } finally {
            setBusy(false);
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

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
                        <th>수정/삭제</th>
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
                            <button onClick={() => setEditMember({
                                    ...member,
                                    grade: member.grade ?? nameToCode(member.grade_name)
                                })}>
                                수정
                            </button>
                            <button onClick={() => handleDelete(member.custno)} disabled={busy}>
                                삭제
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Modal
                    open={!!editMember}
                    onClose={() => setEditMember(null)}
                >
                    <h2>회원 수정</h2>
                    <ShopMemberViewEdit
                        custno={editMember?.custno}
                        initialForm={editMember}
                        onClose={() => setEditMember(null)}
                    />
                </Modal>
        </div>
    );
};