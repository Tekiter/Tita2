// 과목 시간 변환을 위한 함수들

const dayOfWeek = {
    1: '일',
    2: '월',
    3: '화',
    4: '수',
    5: '목',
    6: '금',
    7: '토',
}

function timeintToStr(timeint) {
    const hour = Math.floor(timeint / 100)
    let minute = '' + (timeint % 100)
    if (minute.length == 1) {
        minute = '0' + minute
    }
    return `${hour}:${minute}`
}

export function checkTime(time) {
    if (!time || !Array.isArray(time) || !time.every(i => !isNaN(i))) {
        throw new Error('올바르지 않은 과목 시간입니다.')
    }
    return true
}

export function convertTime(time) {
    if (Array.isArray(time) && time.every(t => Array.isArray(t))) {
        return time.map(item => convertTime(item)).join(', ')
    } else {
        const day = dayOfWeek[time[0]]

        return `${day} ${timeintToStr(time[1])}~${timeintToStr(time[2])}`
    }
}
