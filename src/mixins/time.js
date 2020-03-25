import { convertTime } from '../utils/subjectTime'

export default {
    filters: {
        subjectTime(value) {
            if (!value) {
                return ''
            }
            return convertTime(value)
        },
    },
}
