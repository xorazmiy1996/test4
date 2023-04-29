import {createI18n} from "vue-i18n"
import en from "./locales/en.json"
import ru from "./locales/ru.json"
import uz from "./locales/uz.json"


function loadLocalMessage() {
    const locales = [{en: en}, {ru: ru}, {uz: uz}]
    const message = {}
    locales.forEach(lang =>{
        const key = Object.keys(lang)
        message[key] = lang[key]
    })
    return message

}
export default createI18n({
    locale:'uz',
    fallbackLocale:'en',
    messages:loadLocalMessage()
})