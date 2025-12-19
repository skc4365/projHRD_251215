export const getAuditionManagement = async () => {
  const res = await fetch('/api/auditions');
  return res.text();
};