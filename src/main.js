import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'portfolio-8ed1f.firebaseapp.com',
  projectId: 'portfolio-8ed1f',
  storageBucket: 'portfolio-8ed1f.appspot.com',
  messagingSenderId: '52483132848',
  appId: '1:52483132848:web:b778779adf7e74bc419a75'
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
