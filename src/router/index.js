import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/Main.vue'
import RecordingPage from '../components/RecordingPage.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
    { path: '/recording', component: RecordingPage },
  ]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
