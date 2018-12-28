export const formatDate = (obj) => {
  const t = new Date(obj);
  const y = t.getFullYear();
  const m = '0' + (t.getMonth() + 1);
  const d = '0' + t.getDate();
  return `
  ${y}-${m.substring(m.length - 2, m.length)}-${d.substring(d.length - 2, d.length)}`;
};
