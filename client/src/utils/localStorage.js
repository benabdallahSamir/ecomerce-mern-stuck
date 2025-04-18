export function getItem(key) {
  const item = localStorage.getItem(key);
  try {
    if (item) return JSON.parse(item);
  } catch (error) {
    return item;
  }
  return null;
}
export function setItem(key, value) {
  if (key === null || value === undefined) return false;
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}
