export const getBookManager = async () => {
  const res = await fetch('/api/bookmanager');
  return res.text();
};