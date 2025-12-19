export const getMenu = async () => {
  const res = await fetch('/main/menu');
  return res.text();
};