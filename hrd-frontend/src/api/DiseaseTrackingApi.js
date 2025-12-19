export const getDiseaseTracking = async () => {
  const res = await fetch('/api/disease-tracking');
  return res.text();
};