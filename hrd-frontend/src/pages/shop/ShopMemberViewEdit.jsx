import { useState, useEffect } from 'react';
import { getShopMemberDetail, updateShopMember } from '../../api/ShopMemberApi';
import { ShopMemberForm } from '../../components/ShopMemberForm';

export const ShopMemberViewEdit = ({ custno, onClose, initialForm = null, onSaved }) => {
    const [form, setForm] = useState(initialForm);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (initialForm) return; // 부모에서 초기 데이터를 넘기면 API 호출 생략
        if (!custno) return;
        getShopMemberDetail(custno)
            .then(setForm)
            .catch(() => setMsg('회원 조회 실패'));
    }, [custno, initialForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateShopMember(form);
            setMsg('수정 완료');
            if (onSaved) onSaved(form); // 수정 완료 시 부모 콜백 호출
            onClose();
        } catch (err) {
            setMsg(err.message || '수정 실패');
        }
    };

    if (!form) return <p>로딩중...</p>;

    return (
        <>
            <ShopMemberForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="수정"
                disableCustno={true}
            />
            {msg && <p>{msg}</p>}
        </>
    );
};