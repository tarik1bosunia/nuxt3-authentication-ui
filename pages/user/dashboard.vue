

<script lang="ts" setup>

const user = ref(null)

</script>

<template>
    <div class="flex flex-wrap">
        <!-- sidebar content -->
        <Sidebar />
        <!-- main content -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <h1 class="bg-emerald-700 p-5 text-2xl font-bold text-white">User Pannel</h1>

            <div v-if="user">
                <h1 class="text-4xl font-bold text-gray-800 mb-4"> Data from API Response</h1>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4 "> Welcome Tata </h2>
                <p class="text-gray-700 text-xl md-6">
                    your id is 1234 and your email is tata@gmail.com
                </p>
            </div>
        </div>

    </div>
</template>