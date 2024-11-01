<template>
    
    <form @submit.prevent="handleFormSubmit">
        <div class="mb-3">
            <label for="email">Email</label>
            <InputText id="email" v-model="form.email" type="text" size="large" class="w-full"/>
        </div>
        <div class="mb-5">
            <label for="password">Password</label>
            <InputText id="password" v-model="form.password" type="password" size="large" class="w-full"/>
        </div>
        
        <div v-if="isLoading">
            <ProgressSpinner v-if="isLoading" class="m-0" style="width: 30px; height: 30px" />
            <span class="opacity-50 text-sm pb-2 inline-block">Memproses login..</span>            
        </div>

        <div class="text-center">
            <Button type="submit" label="Masuk" class="w-full"/>
        </div>
    </form>

</template>

<script lang="ts" setup>
    const { login } = useSanctumAuth()

    const isLoading = ref(false)

    const form = reactive({
        email: '',
        password: '',
        remember: false,
    })

    async function handleFormSubmit() {
        isLoading.value = true; 
        try {
            await login(form)
        } catch (e) {
            const error = useSanctumError(e);
            console.error('Request failed not because of a validation', error.code);
        } finally {
            isLoading.value = false; 
        }
    }

</script>