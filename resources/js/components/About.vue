<template>
    <div class="w-full">
        <profile></profile>
        <service></service>
    </div>
</template>

<script>
	import Profile from "./about/profile";
	import Service from "./about/service";
	export default {
		name: "About",
        components: {
			Service,
			Profile
        }
	}
</script>

<style scoped>

</style>
