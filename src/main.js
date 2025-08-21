import { createApp } from 'vue'
import App from './App.vue'
import { Button,Radio,Table} from 'ant-design-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app=createApp(App)
app.use(Button)
app.use(Radio)
app.use(Table)
app.use(Antd).mount('#app');
//app.use(Button)