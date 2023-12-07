import Vue from "vue";
import { Form, FormItem, Input, Select, Option, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Form);
Vue.use(Option);
Vue.use(Select);
Vue.use(FormItem);
Vue.use(Input);
Vue.prototype.$alert = MessageBox.confirm;
