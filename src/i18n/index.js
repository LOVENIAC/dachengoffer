import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
// 引入各个语言配置文件
import zh from './config/zh';
import en from './config/en';
// 创建vue-i18n实例i18n
const i18n = new VueI18n({
    // 设置默认语言
    locale: localStorage.getItem('language') || 'zh', // 语言标识,页面对应显示相同的语言
    // 添加多语言（每一个语言标示对应一个语言文件）
    messages: {
        zh,
        en,
    }
})
// 暴露i18n
export default i18n;
