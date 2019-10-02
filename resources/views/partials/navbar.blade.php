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
            <a href="https://templated.co/" target="_blank" class="navbar-item navbar-link">Templates</a>
        </div>
    </div>
</nav>
