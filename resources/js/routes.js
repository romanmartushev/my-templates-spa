import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

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
        }
    ]
}
