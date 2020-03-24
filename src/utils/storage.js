/**
 * localStorage 에 값을 JSON 형식으로 저장한다.
 * @param {String} key
 * @param {*} value
 */
export function saveStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

/**
 * localStorage 에서 값을 JSON 형식으로 읽어온다.
 * @param {String} key
 * @param {*} def 존재하지 않을시 기본값
 */
export function loadStorage(key, def) {
    const raw = localStorage.getItem(key)
    if (raw === null || raw === 'undefined') {
        return def
    }
    // try {
    return JSON.parse(raw)
    // } catch {
    //     return def
    // }
}
