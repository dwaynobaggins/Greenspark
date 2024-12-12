// import './assets/main.css'
import './assets/css/base.css'
import './assets/css/fonts.css'
import './assets/css/typography.css'
import './assets/css/layout.css'

import { createApp } from 'vue'
import App from './App.vue'

const url = "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }

createApp(App).mount('#app')
