import { useState, useEffect } from 'react';
import { addShopMember, getShopMemberViewAdd } from '../../api/ShopMemberApi';
import { useNavigate } from 'react-router-dom';
import { ShopMemberForm } from '../../components/ShopMemberForm';

export const ShopMemberViewAdd = () => {
    const navigate = useNavigate();
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const [form, setForm] = useState({
        custno: '',
        custname: '',
        phone: '',
        address: '',
        joindate: today,
        grade: '',
        city: ''
    });
    const [msg, setMsg] = useState('');
    
    

    useEffect(() => {
        getShopMemberViewAdd()
            .then(data => {
                setForm(prev => ({
                    ...prev,
                    custno: data.nextCustno ?? data.nextCustNo ?? prev.custno
                }));
            })
            .catch(err => setMsg('다음 회원번호 조회 실패: ' + err.message));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); setMsg('');
        if (!form.custno || !form.custname) {
            setMsg('회원번호와 이름은 필수입력입니다.');
            return;
        }
        try {
            await addShopMember(form);

            setMsg('등록되었습니다.');
            // setForm({
            //     custno: form.custno + 1,
            //     custname: '',
            //     phone: '',
            //     address: '',
            //     joindate: '',
            //     grade: '',
            //     city: ''
            // });

            // 등록 후 목록으로 이동
            navigate('/shopmember/list');

        } catch (err) {
            setMsg('오류: ' + err.message);
        }
    };

    return (
        <div className="shop-member-add">
            <h2>회원 등록</h2>
            <ShopMemberForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="등록"
                disableCustno={true}
            />
            {msg && <p>{msg}</p>}
        </div>
    );
};