<template>

    <PageHeader>
        <template #title>
            Semua Users
        </template>

        <template #subtitle>
            Semua users yang terdaftar
        </template>
    </PageHeader>

    <div v-if="status === 'pending'">
        Loading ...
    </div>

    <div v-else class="card">
        
        <ButtonGroup v-if="links" >
            <Button v-for="link in links" @click="navigateTo(link.url)" :key="link.url" :label="link.label" size="small"/>
        </ButtonGroup>

        <DataTable :value="users" tableStyle="min-width: 50rem">
            <Column field="avatar" header="Avatar">
                <template #body="slotProps">
                    <img :src="slotProps.data.avatar" alt="Avatar user" class="max-h-7 rounded-full">
                </template>
            </Column>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="role" header="Role"></Column>
            <Column field="created_at" header="Registered">
                <template #body="slotProps">
                    {{ dateIndo(slotProps.data.created_at) }}
                </template>
            </Column>
        </DataTable>


    </div>

</template>

<script lang="ts" setup>
    const route = useRoute()
    const page = ref()

    onMounted(() => {
        page.value = route.query.page||1;
        console.log('/api/users/?page='+page.value)
    })

    const client = useSanctumClient();
    const { data: users, status, links } = await client('/api/users/?page='+page.value);

    const dateIndo = (date: string) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
    }

</script>