<template>
    <div class="flex items-center justify-end mb-7">
        <Button class="me-2 !bg-transparent !text-slate-600 !border-none" variant="text">
            <Icon name="bi:bell" />
        </Button>
        <Avatar class="p-overlay-badge" image="https://github.com/adityathok.png?size=200" @click="toggleAvatar" shape="circle" aria-haspopup="true" aria-controls="avatar_menu"/>
        <Menu ref="menu" id="avatar_menu" :model="menuAvatar" :popup="true" />
    </div>
</template>

<script setup>
const { logout } = useSanctumAuth()
const menu = ref();
const toggleAvatar = (event) => {
    menu.value.toggle(event);
};

 // Daftar Menu dengan label dinamis menggunakan user.name
 const menuAvatar = computed(() => {
    return [
        {
            label: 'User',
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    // command: () => router.visit('/profile') 
                },
                { 
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => logout() 
                }
            ]
        }
    ];
});

</script>