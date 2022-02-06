const { createApp } = require('vue');
import App from './App.vue';
import 'vuetify/dist/vuetify.css';
import { createVuetify } from 'vuetify';

createApp(App).use(createVuetify()).mount('#app');
