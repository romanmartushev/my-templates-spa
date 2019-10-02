<template>
    <div class="container text-gray-100 mx-auto pt-20">
        <div class="flex flex-col px-2 justify-center">
            <img class="mb-3 mb-lg-0 rounded lg:w-3/4 h-auto mx-auto shadow-2xl" src="/images/profile_long.jpg" alt="">
            <div class="bg-gray-700 opacity-75 lg:hover:opacity-100 p-16 rounded lg:absolute shadow-2xl">
                <h2 class="mb-4">
                    <span class="text-2xl">Roman Martushev</span>
                </h2>
                <ul>
                    <li class="text-lg"><u>Occupation: </u></li>
                    <li class="pl-2 pb-4">Web Development/Data Services Representative</li>
                    <li class="text-lg"><u>Location: </u></li>
                    <li class="pl-2 pb-4"><a href="https://paulbunyan.net/" class="text-white">Paul Bunyan Communications</a></li>
                </ul>
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
