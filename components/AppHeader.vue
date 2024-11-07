<template>
    <div class="flex items-center justify-between mb-2">

        <div>
            <div class="md:hidden">
                <Button @click="useGlobal.toggelsidebar()" severity="secondary" variant="link">
                    <Icon name="bi:list" />
                </Button>
            </div>
        </div>

        <div class="flex items-center justify-end">
            <Button class="me-2 !bg-transparent !text-slate-600 !border-none" variant="text">
                <Icon name="bi:bell" />
            </Button>
            
            <img @click="toggleAvatar" src="~/assets/img/ava-man.jpg" alt="Avatar user" class="max-h-7 rounded-full">
            <Menu ref="menu" id="avatar_menu" :model="menuAvatar" :popup="true" />

        </div>
    </div>
    
</template>

<script setup>

const useGlobal = useGlobalStore()

const { toLogout } = useAuth()
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
                    command: () => navigateTo('/profile') 
                },
                { 
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    command: () => toLogout() 
                }
            ]
        }
    ];
});

</script>