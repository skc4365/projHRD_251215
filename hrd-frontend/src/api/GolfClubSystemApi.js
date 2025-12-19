export const getGolfClubSystem = async () => {
  const res = await fetch('/api/golf-clubs');
  return res.text();
};