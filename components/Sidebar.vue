<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
const onLogout = async () =>{
    authStore.$reset()
    await navigateTo('/account/login', {replace: true})
}
</script>

<template>
    <div
    class="w-full md:w-1/6 px-4 py-8 md:py-12 bg-gray-700 text-gray-100 sm:h-screen"
    >
      <div class="py-4 px-6 flex flex-col">
        <NuxtLink
        to="/user/dashboard"
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        >
        Dashboard
        </NuxtLink>

        <NuxtLink
        to="/user/profile"
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        >
        Profile
        </NuxtLink>

        
        <NuxtLink
        to="/user/change_password"
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        >
        change password
        </NuxtLink>

        
        <NuxtLink
        to="/user/delete_account"
        class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300"
        >
        delete account
        </NuxtLink>

        <div>
            <button 
            @click="onLogout"
            class="px-3 py-2 text-sm font-medium text-white hover:text-gray-300"
            > 
            Logout
            </button>
        </div>
      </div>  
    </div>
</template>

<style lang="css" scoped>
.router-link-active{
    background-color: chartreuse;
    color: black;
}
</style>