export function setItemLocalStorage({ item, value }) {
    localStorage.setItem(item, value);
}
export function getItemLocalStorage(item) {
    return localStorage.getItem(item);
}
export function clearLocalStorage() {
    localStorage.clear();
}
