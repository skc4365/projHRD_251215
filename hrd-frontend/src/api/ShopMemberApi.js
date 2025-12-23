export const getShopMember = async () => {
  const res = await fetch('/api/shopmember');
  if (!res.ok) throw new Error('메인 실패');
  return res.json();
};
export const getShopMemberViewAdd = async () => {
  const res = await fetch('/api/shopmember/view-add');
  if (!res.ok) throw new Error('화면-[다음회원번호] 조회 실패');
  return res.json();
};
export const getShopMemberList = async () => {
  const res = await fetch('/api/shopmember/list');
  if (!res.ok) throw new Error('회원 조회 실패');
  return res.json();
};
export const getShopMemberSales = async () => {
  const res = await fetch('/api/shopmember/sales');
  if (!res.ok) throw new Error('매출 조회 실패');
  return res.json();
};
export const addShopMember = async (form) => {
  const res = await fetch('/api/shopmember/add', {
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

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || '회원 등록 실패');
  }

  return res.json(); // 또는 return;
};

export const getShopMemberDetail = async (custno) => {
  const res = await fetch(`/api/shopmember/${custno}`);
  if (!res.ok) throw new Error('회원 상세조회 실패');
  return res.json();
};

export const updateShopMember = async (form) => {
  const res = await fetch(`/api/shopmember/update`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || '회원 수정 실패');
  }
  return res.json();
};

export const deleteShopMember = async (custno) => {
  const res = await fetch(`/api/shopmember/delete/${custno}`, {
    method: 'DELETE'
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || '회원 삭제 실패');
  }
  return res.text();
};

// 차후 개선점: 에러처리 통합