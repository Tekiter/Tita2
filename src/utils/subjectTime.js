// 과목 시간 변환을 위한 함수들

export function checkTime(time) {
    if (!time || !Array.isArray(time) || !time.every(i => !isNaN(i))) {
        throw new Error('올바르지 않은 과목 시간입니다.')
    }
    return true
}
