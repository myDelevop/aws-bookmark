import { createApp } from 'vue'
import App from './App.vue'

import '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify';
import { awsconfig } from './aws-exports';

import "@aws-amplify/ui-vue/styles.css";

Amplify.configure(awsconfig);


createApp(App).mount('#app')
