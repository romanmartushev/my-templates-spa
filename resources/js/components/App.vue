<template>
    <div class="bg-gray-300">
        <nav class="navbar w-full fixed z-10">
            <div class="flex items-center flex-shrink-0 flex-grow text-white">
                <router-link  class="navbar-item navbar-brand block" :to="{ name: 'home' }">RM</router-link>
            </div>
            <div class="block md:hidden">
                <button class="navbar-burger-container button button-default" @click="show = !show">
                    <svg class="navbar-burger-img" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-shrink-1 md:flex md:items-center md:w-auto md:visible" :class="[show ? 'relative' : 'hidden']">
                <div class="flex flex-col md:flex-grow md:flex-row" id="navbarSupportedContent">
                    <router-link  class="navbar-item navbar-link" :to="{ name: 'home' }">Home</router-link>
                    <router-link  class="navbar-item navbar-link" :to="{ name: 'about' }">About</router-link>
                    <router-link  class="navbar-item navbar-link" :to="{ name: 'contact' }">Contact</router-link>
                </div>
            </div>
        </nav>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>

        <footer class="w-full bg-gray-700 bottom-0 pt-4 text-white">
            <div class="container mx-auto">
                <div class="bg-blue-500 rounded pl-2" id="recent-projects">Recent Projects</div>
                <ul class="list-inside">
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://livewire-thermostat.herokuapp.com/" target="_blank">Thermostat</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="http://www.tforceconstruction.com/" target="_blank">TriForce</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="http://myfamily.pbndev.net/" target="_blank">Ivanov Family Tree</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="http://family.romanmartushev.com/" target="_blank">Martushev Family Tree</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://stonegate-exteriors.herokuapp.com/" target="_blank">STONEGATE EXTERIORS (in development)</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://ibc-company-llc.herokuapp.com/" target="_blank">IBC Company LLC. (in development)</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://shortcode-form-builder.herokuapp.com/views/form-builder.html" target="_blank">Form [short-code] Builder (for development)</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://gigazonegaming.com/" target="_blank">Gigazone Gaming</a></li>
                    <li class="border-b border-gray-800 py-2 px-6"><a href="https://paulbunyan.net/" target="_blank">Paul Bunyan Communications</a></li>
                </ul>
            </div>
            <div class="pt-2">
                <social></social>
            </div>
            <div class="footer-copyright text-center py-3">
                <a href="http://www.romanmartushev.com">romanmartushev.com</a>
            </div>
        </footer>
    </div>
</template>

<script>
	import Social from "./partials/social";
	export default {
		name: "App",
        components: {
			Social
        },
		data() {
			return {
				show: false
			}
		}
	}
</script>
