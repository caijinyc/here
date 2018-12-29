export const formatDate = (obj) => {
  const t = new Date(obj);
  const y = t.getFullYear();
  const m = '0' + (t.getMonth() + 1);
  const d = '0' + t.getDate();
  return `
  ${y}-${m.substring(m.length - 2, m.length)}-${d.substring(d.length - 2, d.length)}`;
};


// 截流函数
export function debounce (func, delay) {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export function findIndex(allList, list) {
  return allList.findIndex((item) => {
    return item.id === list.id;
  });
}

