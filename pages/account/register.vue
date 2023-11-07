<script setup>
import { reset } from '@formkit/core'
const submitRegistrationForm = async (formData) => {
    console.log(formData)
    reset('registrationForm')
}

const handleIconClick = (node, e) => {
    node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
    node.props.type = node.props.type === 'password' ? 'text' : 'password'
}
</script>

<template>
    <div class="mt-8 flex flex-col justify-center items-center">
        <div class="text-center text-2xl font-bold mb-5">
            Create an Account
        </div>
   <div class="w-92">
         <FormKit type="form" @submit="submitRegistrationForm" submit-label="Register" id="registrationForm">
            <FormKit type="text" label="Name" name="name" validation="required" placeholder="Enter your name..." />

            <FormKit type="email" label="Email" name="email" validation="required" placeholder="Enter your email..." />


            <FormKit type="password" name="password" label="Password" placeholder="Password" help="Enter a new password"
                validation="required" validation-visibility="live" suffix-icon="eyeClosed"
                @suffix-icon-click="handleIconClick" />
            <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirmation Password"
                help="Confirm your new password" validation="required|confirm:password" validation-visibility="live"
                validation-label="Password confirmation" suffix-icon="eyeClosed" @suffix-icon-click="handleIconClick" />
        </FormKit>

        <i class="text-gray-700 text-sm">
            Already have an account
            <NuxtLink href="/account/login" class="text-blue-500 hover:text-blue-700">

                Login
            </NuxtLink>

        </i>
   </div>
    </div>
</template>