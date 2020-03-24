<template>
    <div
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
    >
        <schedule-list-item
            v-for="subject in loaded"
            :key="`subject-${subject.idx}`"
            @mouseover.native="mouseHover(subject)"
            :subject="subject"
        >
        </schedule-list-item>
    </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll'
import ScheduleListItem from './ScheduleListItem'

const lazyLoadChunk = 50

export default {
    directives: {
        infiniteScroll,
    },
    components: {
        ScheduleListItem,
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        search: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        loaded: [],
        busy: false,
        cursor: 0,
    }),
    computed: {
        // 검색과 정렬 기준으로 데이터 추출
        filtered() {
            const result = []

            for (let item of this.items) {
                const conditions = [item.name.includes(this.search)]

                if (conditions.every(chk => chk)) {
                    result.push(item)
                }
            }

            return result
        },
    },
    methods: {
        mouseHover(subject) {
            this.$emit('subjecthover', subject)
        },
        // 스크롤이 끝에 닿을시 데이터 더 가져오기 실행
        loadMore() {
            this.busy = true
            setTimeout(() => {
                this.addChunk(lazyLoadChunk)
                this.busy = false
            }, 0)
        },
        // 특정 size개의 데이터를 추가로 로드
        addChunk(size) {
            for (
                let i = this.cursor;
                i < this.cursor + size && i < this.filtered.length;
                i++
            ) {
                this.loaded.push(this.filtered[i])
            }
            this.cursor += size
        },
        // 현재까지 로드한것 초기화
        resetLoaded() {
            this.cursor = 0
            this.loaded = []
        },
        // 로드를 초기화하고 초기값 넣기
        itemChanged() {
            this.resetLoaded()
            this.addChunk(lazyLoadChunk)
        },
    },
    watch: {
        // 정렬 기준이 바뀌어 추출된 데이터가 바뀌면, 스크롤 다시 초기화
        filtered() {
            this.itemChanged()
        },
    },
    created() {
        this.itemChanged()
    },
}
</script>
