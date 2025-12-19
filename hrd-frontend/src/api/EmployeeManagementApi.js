export const getEmployeeManagement = async () => {
  const res = await fetch('/api/employees');
  return res.text();
};