<template>
    <div class="masthead text-gray-100 mx-auto h-screen">
        <div class="flex flex-col px-2 justify-center h-full">
            <img class="mb-3 mb-lg-0 rounded lg:w-3/4 h-auto mx-auto shadow-2xl" src="/images/profile_long.jpg" alt="Roman Martushev">
            <div class="bg-gray-700 opacity-75 lg:hover:opacity-100 p-16 rounded lg:absolute shadow-2xl">
                <h2 class="mb-4">
                    <span class="text-2xl">Roman Martushev</span>
                </h2>
                <transition-group name="slide-up" tag="ul" appear>
                    <li class="text-lg" key="occupation"><u>Occupation: </u></li>
                    <li class="pl-2 pb-4" key="occupation-description">Web Development/Data Services Representative</li>
                    <li class="text-lg" key="location"><u>Location: </u></li>
                    <li class="pl-2 pb-4" key="location-description"><a href="https://paulbunyan.net/" class="text-white">Paul Bunyan Communications</a></li>
                </transition-group>
                <social></social>
            </div>
        </div>
    </div>
</template>

<script>
	import Social from "../partials/social";
	export default {
		name: "profile",
		components: {
			Social
		}
    }
</script>
