

<script lang="ts" setup>
import { reset } from '@formkit/core'
import { useAuthStore } from '@/stores/auth';
const serverError = ref(false)
const isSuccess = ref(false)
const authStore = useAuthStore()

type loginInputData = {
    email: string,
    password: string,
}


const submitLoginForm = async (formData:loginInputData) => {
    console.log(formData)
    // reset('loginForm')
    authStore.setAuthenticated(true)
    return navigateTo("/user/dashboard", {replace: true})
}

const handleIconClick = (node: { props: { suffixIcon: string; type: string } }, e: Event) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>

<template>
    <div class="mt-8 flex flex-col justify-center items-center">
        <div class="text-center text-2xl font-bold mb-5">
            Login
        </div>
   <div class="w-92">
         <FormKit type="form" @submit="submitLoginForm" submit-label="Login" id="loginForm">
         
            <FormKit type="email" label="Email" name="email" validation="required" placeholder="Enter your email..." />


            <FormKit type="password" name="password" label="Password" placeholder="Password" help="Enter a new password"
                validation="required" validation-visibility="live" suffix-icon="eyeClosed"
                @suffix-icon-click="handleIconClick" />

        </FormKit>
        <div class="mb-2 text-sm">
            <NuxtLink
            
             to="/account/reset_forgotten_password_request"
             class="text-blue-500 hover:text-blue-700"
             >
                forgot password
            </NuxtLink>
        </div>

        <i class="text-gray-700 text-sm">
            Don't have an account
            <NuxtLink href="/account/register" class="text-blue-500 hover:text-blue-700">

                Register
            </NuxtLink>

        </i>
   </div>
   <div v-if="serverError">
            <p class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative">
                Unable to login
            </p>
        </div>

        <div v-if="isSuccess">
            <p class="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative">
                login successfull
            </p>
        </div>
    </div>
</template>