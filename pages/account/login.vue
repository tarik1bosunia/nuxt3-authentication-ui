

<script lang="ts" setup>
import { reset } from '@formkit/core'

type loginInputData = {
    email: string,
    password: string,
}


const submitLoginForm = async (formData:loginInputData) => {
    console.log(formData)
    reset('loginForm')
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

        <i class="text-gray-700 text-sm">
            Don't have an account
            <NuxtLink href="/account/register" class="text-blue-500 hover:text-blue-700">

                Register
            </NuxtLink>

        </i>
   </div>
    </div>
</template>