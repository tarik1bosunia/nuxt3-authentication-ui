<script setup>
const isAuthenticated = ref(true)
const isMobileMenuOpened = ref(false)
</script>

<template>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 ">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <a href="/" class="text-white font-bold text-xl">dinotrix</a>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline">
                            <NuxtLink to="/"
                                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                                Home
                            </NuxtLink>

                            <NuxtLink to="/contact"
                                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                                Contact
                            </NuxtLink>

                            <NuxtLink v-if="isAuthenticated" to="/user/dashboard"
                                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-300">
                                Dashboard
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div v-if="!isAuthenticated" class="hidden md:block ">
                    <div class="ml-4 md:ml-6 flex items-center">
                        <NuxtLink to="/account/login" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rouunded">
                            Login</NuxtLink>

                        <NuxtLink to="/account/register" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rouunded">
                            Register</NuxtLink>
                    </div>
                </div>
                <div class="md:hidden z-50">
                    <!-- Mobile Menu Button -->
                    <button @click="isMobileMenuOpened = !isMobileMenuOpened" type="button"
                        class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400b hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M9 20h13v-4H9v4ZM2 8h5V4H2v4Zm0 6h5v-4H2v4Zm0 6h5v-4H2v4Zm7-6h13v-4H9v4Zm0-6h13V4H9v4Z" />
                        </svg>

                    </button>

                    <!-- Mobile Menu. Show/Hide based on momile menu state -->
                    <div v-if="isMobileMenuOpened" class="absolute top-0 insect-x-0 transition-transform md:hidden mt-16">
                        <div class="shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <NuxtLink to="/"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 "
                                    @click="isMobileMenuOpened = false">
                                    Home
                                </NuxtLink>

                                <NuxtLink to="/contact"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 "
                                    @click="isMobileMenuOpened = false">
                                    Contact
                                </NuxtLink>

                                <NuxtLink v-if="isAuthenticated" to="/user/dashboard"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 "
                                    @click="isMobileMenuOpened = false">
                                    Dashboard
                                </NuxtLink>

                            </div>
                        </div>
                        <div v-if="!isAuthenticated">
                            <div class="px-5 py-2 mb-5 ">
                                <NuxtLink to="/account/login"
                                    class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full "
                                    @click="isMobileMenuOpened = false">
                                    Login
                                </NuxtLink>
                                <NuxtLink to="/account/register"
                                    class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full "
                                    @click="isMobileMenuOpened = false">
                                    Register
                                </NuxtLink>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>
.router-link-active {
    background-color: chartreuse;
    color: black;
}
</style>