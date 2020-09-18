<template>
    <header class="masthead text-center text-white flex h-screen">
        <div class="my-auto pt-32 mx-auto">
            <div class="flex-row">
                <div class="flex flex-col mx-auto">
                    <h1 class="md:text-6xl text-3xl uppercase">
                        <strong>
                            <slot name="header">
                                Roman Martushev
                            </slot>
                        </strong>
                    </h1>
                    <h2 class="text-2xl">
                        <slot name="secondary">
                            - web development and design
                        </slot>
                    </h2>
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
