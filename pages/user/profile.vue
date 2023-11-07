<script lang="ts" setup>
type profileForm = {
name:string
}

const name = ref("tata")
const submitProfileForm = async(formData: FormData) =>{
    console.log(formData)
}
</script>

<template>
    <div class="flex flex-wrap">
        <!-- sidebar -->
        <Sidebar />
        <!-- main content -->
        <div class="w-full md:w-3/4 px-4 py-8 md:py-12">
            <div class="my-9 w-96 mx-auto">
                <h1 class="text-center text-2xl font-bold mb-5">
                    Update User profile
                </h1>
                <FormKit type="form" @submit="submitProfileForm" submit-label="Update">
                    <FormKit 
                    type="text" label="Name" name="name"
                    validation="required" placeholder="Enter your name..."
                    v-model="name"
                    />
                </FormKit>
            </div>
        </div>
        
    </div>
</template>