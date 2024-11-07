<template>

    <PageHeader>
        <template #title>
            Edit {{ data.name }}
        </template>

        <template #subtitle>
            Ubah profil dari user
        </template>
    </PageHeader>

    <div class="rounded-md border overflow-hidden p-3">

        <form action="" method="post" @submit.prevent="handleFormSubmit">

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

    const handleFormSubmit = async () => {
        try {

        } catch (error) {

        }
    }

</script>