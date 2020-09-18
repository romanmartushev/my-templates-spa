<template>
    <div class="masthead flex text-center h-screen">
        <transition-group name="slide-up" tag="div" appear class="my-auto md:p-16 pt-16 mx-auto md:bg-gray-600 opacity-75 rounded">
            <h1 key="header" class="text-6xl text-gray-100 uppercase">Let's get in touch!</h1>
            <a key="email-button" class="text-gray-700" href="mailto:martushev8@gmail.com">
                <i class="fas fa-envelope fa-8x text-gray-100"></i>
            </a>
            <p key="emails" class="text-gray-100 text-3xl mb-0">
                <a class="text-gray-100" href="mailto:martushev8@gmail.com">martushev8@gmail.com</a> |
                <a class="text-gray-100" href="mailto:romanm@paulbunyan.net">romanm@paulbunyan.net</a>
            </p>
        </transition-group>
    </div>
</template>

<script>
	export default {
		name: "Contact"
	}
</script>
