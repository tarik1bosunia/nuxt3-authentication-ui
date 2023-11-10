<script lang="ts" setup>
import {reset} from '@formkit/core'
type resetforgottenPasswordRequestFormInput = {
    email:string,
}
const resetforgottenPasswordRequestForm = async(formData: resetforgottenPasswordRequestFormInput)=>{
    console.log(formData)
    reset("resetForgottenPasswordRequestForm")
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
                <FormKit type="form" @submit="resetforgottenPasswordRequestForm" submit-label="Reset Request" id="resetForgottenPasswordRequestForm"
                >
                <FormKit type="email" label="Email" name="email" validation="required" placeholder="Enter your email"/>
            </FormKit>
            </div>
        </div>
    </div>
</template>