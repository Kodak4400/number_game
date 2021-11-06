import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(createMetaManager())
app.use(router)
app.mount('#app')
