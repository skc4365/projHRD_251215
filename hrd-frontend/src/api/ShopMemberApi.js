export const getShopMember = async () => {
  const res = await fetch('/api/shopmember');
  return res.text();
};