import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ko from 'vuetify/es5/locale/ko'
import theme from './theme'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: theme,
    },
    lang: {
        locales: { ko },
        current: 'ko',
    },
})
