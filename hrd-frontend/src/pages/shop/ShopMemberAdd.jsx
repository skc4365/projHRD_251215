import React, { useState, useEffect } from 'react';

export const ShopMemberAdd = () => {
    const [form, setForm] = useState({
        custno: '',
        custname: '',
        phone: '',
        address: '',
        joindate: '',
        grade: '',
        city: ''
    });
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const fetchNextCustno = async () => {
            try {
                const res = await fetch('/api/shopmember/add');
                if (res.ok) {
                    const data = await res.json();
                    setForm(f => ({ ...f, custno: data.nextCustno }));
                }
            } catch (err) {
                console.error('nextCustno 가져오기 실패:', err);
            }
        };
        fetchNextCustno();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.custno || !form.custname) {
            setMsg('회원번호와 이름은 필수입니다.');
            return;
        }
        try {
            const res = await fetch('/api/shopmember', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    custno: Number(form.custno),
                    custname: form.custname,
                    phone: form.phone,
                    address: form.address,
                    joindate: form.joindate || null,
                    grade: form.grade || null,
                    city: form.city || null
                })
            });
            if (res.ok) {
                setMsg('등록되었습니다.');
                setForm({ custno: '', custname: '', phone: '', address: '', joindate: '', grade: '', city: '' });
            } else {
                const text = await res.text();
                setMsg('등록 실패: ' + text);
            }
        } catch (err) {
            setMsg('오류: ' + err.message);
        }
    };

    return (
        <div className="shop-member-add">
            <h2>홈쇼핑 회원 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>회원번호: <input type="number" name="custno" value={form.custno} onChange={handleChange} required disabled/></label>
                </div>
                <div>
                    <label>이름: <input type="text" name="custname" value={form.custname} onChange={handleChange} maxLength={20} required /></label>
                </div>
                <div>
                    <label>전화: <input type="tel" name="phone" value={form.phone} onChange={handleChange} maxLength={13} placeholder="010-1234-5678" /></label>
                </div>
                <div>
                    <label>주소: <input type="text" name="address" value={form.address} onChange={handleChange} maxLength={60} /></label>
                </div>
                <div>
                    <label>가입일: <input type="date" name="joindate" value={form.joindate} onChange={handleChange} /></label>
                </div>
                <div>
                    <label>등급:
                        <select name="grade" value={form.grade} onChange={handleChange}>
                            <option value="">선택</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>도시: <input type="text" name="city" value={form.city} onChange={handleChange} maxLength={2} placeholder="예:01 or 30 or 60" /></label>
                </div>
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
            {msg && <p>{msg}</p>}
        </div>
    );
};