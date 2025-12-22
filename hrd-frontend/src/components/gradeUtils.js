export const GRADE_MAP = {
  A: 'VIP',
  B: '일반',
  C: '직원'
};

export const codeToName = (code) => {
  if (code == null) return '';
  return GRADE_MAP[code] ?? '';
};

export const nameToCode = (name) => {
  if (!name) return '';
  const entry = Object.entries(GRADE_MAP).find(([, v]) => v === name);
  return entry ? entry[0] : '';
};

export const gradeOptions = () => Object.entries(GRADE_MAP).map(([code, name]) => ({ code, name }));
