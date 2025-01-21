import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css'; // 스타일 파일 (있는 경우)

const app = createApp(App);
const pinia = createPinia();

app.use(pinia); // Pinia 등록
app.mount('#app');