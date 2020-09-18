import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";

export default {
    mode: 'history',

    routes: [
        {
            name:'home',
            path: '/',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'contact',
            path: '/contact',
            component: Contact
        },
        {
          path: '*',
          component: PageNotFound
        },
    ]
}
