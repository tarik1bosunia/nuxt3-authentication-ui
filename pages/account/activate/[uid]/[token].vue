<script lang="ts" setup>
const onAccountActivation = async () =>{
    console.log("activated")
}
</script>

<template>
    <div class="mx-auto max-w-md px-4 py-8 ">
        <h1 class="text-3xl font-bold text-center mb-8">Activate your account</h1>
        <div class="bg-white shadow-md rounded-lg px-6 py-8">
            <p class="text-md text-gray-700 mb-4">Please click bellow button to activate your account</p>
            <div class="flex justify-center mb-3">
                <button
                @click="onAccountActivation"
                type="submit"
                class="bg-emerald-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-emerald-500"
                >
                Activate account
                </button>
            </div>
            <i class="text-gray-700 text-sm ">
                Not able to activate?
                <NuxtLink to="/contact" class="text-blue-500 hover:text-blue-700">
                    Contact Us
                </NuxtLink> 
            </i>
        </div>
    </div>
</template>