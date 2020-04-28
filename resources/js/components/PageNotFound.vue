<template>
    <div class="w-full">
        <masthead>
            <template v-slot:header>
                Page Not Found
            </template>
            <template v-slot:secondary>
                <p class="hidden"></p>
            </template>
        </masthead>
    </div>
</template>

<script>
    import Masthead from './home/masthead';
    export default {
        name: "PageNotFound",
        components: {
            Masthead
        }
    }
</script>
