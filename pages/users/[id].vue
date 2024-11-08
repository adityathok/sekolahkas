<template>

    <PageHeader>
        <template #title>
            Edit {{ data.name }}
        </template>

        <template #subtitle>
            Ubah profil dari user
        </template>
    </PageHeader>

    <div class="rounded-md border overflow-hidden p-3 md:p-10 max-w-2xl">

        <form action="" method="post" @submit.prevent="handleFormSubmit">

            <div class="mb-3">
                <label for="name" class="block mb-1">Nama</label>
                <InputText type="text" id="name" class="w-full" v-model="form.name" />
            </div>
                       
            <div class="mb-3">
                <label for="email" class="block mb-1">Email</label>
                <InputText type="text" id="email" class="w-full" v-model="form.email" />
            </div>    
            <div class="mb-3">
                <label for="avatar" class="block mb-1">Avatar</label>
                <InputText type="text" id="avatar" class="w-full" v-model="form.avatar" />
            </div>

            <div class="text-right">
                <Button label="Simpan" type="submit"/>
            </div>
        </form>

    </div>

</template>

<script lang="ts" setup>
    const router = useRouter()
    const idUser = useRoute().params.id
    const client = useSanctumClient();

    const { data, status, error, refresh } = await useAsyncData(
        'users'+idUser,
        () => client('/api/users/'+idUser)
    )

    const form = ref({
        name: data.value.name,
        email: data.value.email,
        avatar: data.value.avatar,
    })

    const handleFormSubmit = async () => {
        console.log(form);
        try {
            await client('/api/users/'+data.value.id, {
                method: 'PUT',
                params: form.value
            })
            refresh()
        } catch (error) {
            console.log(error);
        }
    }

</script>