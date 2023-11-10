<script lang="ts" setup>
import {reset} from '@formkit/core'
type resetforgottenPasswordFormInput = {
   password: string,
   confirm_password: string
}
const resetforgottenPasswordForm = async(formData: resetforgottenPasswordFormInput)=>{
    console.log(formData)
    reset("reset-password")
}
</script>

<template>
    <div class="flex flex-wrap">
        <!-- sidebar -->
        <Sidebar />
        <!-- main content -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <div class="my-9 w-96 mx-auto">
                <h1 class="text-center text-2xl font-bold mb-5">Set New Password</h1>
                <FormKit type="form" @submit="resetforgottenPasswordForm" submit-label="Reset Password" id="reset-password"
                >
                <FormKit type="password" label="New Password" name="password" validation="required" placeholder="Enter a new password..."/>
                <FormKit type="password" label="Confirm Password" name="confirm_password" validation="required" placeholder="confirm new password..."/>
            </FormKit>
            </div>
        </div>
    </div>
</template>