import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Important from './pages/Important.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'ToDo', component: ToDo },
    { path: '/important', name: 'Important', component: Important },
    { path: '/modals', name: 'Modals', component: Modals },
  ],
});

createApp(App).use(router).mount('#app');

