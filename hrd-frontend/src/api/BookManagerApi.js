export const getBookManager = async () => {
  const res = await fetch('/api/books');
  return res.text();
};