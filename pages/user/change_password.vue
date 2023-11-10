<script lang="ts" setup>
import {reset} from '@formkit/core'
type cahngePasswordFormInput = {
    password:string,
    new_password: string,
    confirm_new_password: string
}
const submitChangePasswordForm = async(formData: cahngePasswordFormInput)=>{
    console.log(formData)
    reset("cahngePasswordForm")
}
</script>

<template>
    <div class="flex flex-wrap">
        <!-- sidebar -->
        <Sidebar />
        <!-- main content -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <div class="my-9 w-96 mx-auto">
                <h1 class="text-center text-2xl font-bold mb-5">Change Password</h1>
                <FormKit type="form" @submit="submitChangePasswordForm" submit-label="Chnage" id="cahngePasswordForm"
                >
                <FormKit type="password" label="New Password" name="new_password" validation="required" placeholder="Enter a new password..."/>
                <FormKit type="password" label="Confirm Password" name="confirm_new_password" validation="required" placeholder="confirm new password..."/>
                <FormKit type="password" label="Old Password" name="password" validation="required" placeholder="enter your current password..."/>
            </FormKit>
            </div>
        </div>
    </div>
</template>