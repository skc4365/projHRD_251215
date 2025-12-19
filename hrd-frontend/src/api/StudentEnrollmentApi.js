export const getStudentEnrollment = async () => {
  const res = await fetch('/api/student-enrollments');
  return res.text();
};