<template>
    <header class="masthead text-center text-white flex h-screen">
        <div class="my-auto pt-32 mx-auto">
            <div class="flex-row">
                <div class="flex flex-col mx-auto">
                    <h1 class="md:text-6xl text-3xl uppercase">
                        <strong>Roman Martushev</strong>
                    </h1>
                    <h2 class="text-2xl"> - web development and design</h2>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
	export default {
		name: "masthead"
	}
</script>

<style type="text/css">
    .masthead {
        background: linear-gradient(
            rgba(52, 58, 64, .4),
            rgba(52, 58, 64, .4)
        ),
        url('/images/masthead.jpg') center center;
        background-size: cover;
        min-height: 500px;
    }
</style>
