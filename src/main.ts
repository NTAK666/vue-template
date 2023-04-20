import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "@/routes";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

const pinia = createPinia()
const app = createApp(App)

app
	.use(router)
	.use(VueQueryPlugin)
	.use(pinia)
	.mount('#app')
