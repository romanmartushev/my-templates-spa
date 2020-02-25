import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App';
Vue.use(VueRouter);


export default new Vue({
    router: new VueRouter(routes),
    render: h => h(App),
});
