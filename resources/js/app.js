import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Social from "./components/partials/social";

Vue.use(VueRouter);

let app = new Vue({
    el: '#app',
    data() {
        return {
            show: false
        }
    },
    components: {
        Social
    },
    router: new VueRouter(routes)
});
