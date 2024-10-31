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
        <div class="text-center">
            <Button type="submit" label="Masuk" class="w-full"/>
        </div>
    </form>
</template>

<script setup lang="ts">
    const { login } = useSanctumAuth()

    const form = reactive({
        email: '',
        password: '',
        remember: false,
    })

    const message = '';

    async function handleFormSubmit() {
        console.log(form);
        
        try {
            await login(form)
        } catch (error) {
            const err = useSanctumError(error)

            console.log(error);
        }
    }

</script>