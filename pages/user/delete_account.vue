<script lang="ts" setup>
import {reset} from '@formkit/core'
type deleteAccountFormInput = {
    password:string,
}
const submitDeleteAccountForm = async(formData: deleteAccountFormInput)=>{
    console.log(formData)
    reset("deleteAccountForm")
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
                <FormKit type="form" @submit="submitDeleteAccountForm" submit-label="Delete" id="deleteAccountForm"
                >

                <FormKit type="password" label="Confirm Password" name="password" validation="required" placeholder="enter your current password..."/>
            </FormKit>
            </div>
        </div>
    </div>
</template>