export const formatDate = (
  obj,
  opt = {
    y: true,
    m: true,
    d: true
  }
) => {
  const t = new Date(obj);
  const y = t.getFullYear();
  let m = '0' + (t.getMonth() + 1);
  m = m.substring(m.length - 2, m.length);
  let d = '0' + t.getDate();
  d = d.substring(d.length - 2, d.length);

  const res = [];
  if (opt.y) { res.push(y); }
  if (opt.m) { res.push(m); }
  if (opt.d) { res.push(d); }

  return res.join('-');
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

export function findIndex (allList, list) {
  return allList.findIndex((item) => {
    return item.id === list.id;
  });
}

export function formatPlayCount (count) {
  if (!count) {
    return 0;
  }
  if (count < 1e5) {
    return Math.floor(count);
  } else {
    return Math.floor(count / 10000) + '万';
  }
}

export function imageRatio (width = 0, height = width) {
  return `?param=${window.devicePixelRatio * width}x${window.devicePixelRatio * height}`;
}
