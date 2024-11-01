<template>

    <div class="md:hidden absolute top-0 left-0 pt-4 px-5">
        <Button size="small" variant="link" @click="toggleSidebar">
            <Icon name="bi:list" />
        </Button>
    </div>

    <div class="fixed md:relative md:start-0 z-20 top-0 py-3 px-2 h-svh w-[90%] md:w-[16rem] md:bg-zinc-100 shadow md:shadow-none bg-white transition ease-in duration-300" :class="{'start-0': isOpenSidebar, 'start-[-100%]': !isOpenSidebar}">

        <PanelMenu
            :model="items"
            class="w-full border-none rounded-none"
            :pt="{
                panel: (options) => ({
                    class: [
                        '!border-none',
                        '!bg-transparent'
                    ]
                }),
            }"
        >
            <template #item="{ item }">
                <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group rounded hover:bg-white hover:shadow">
                    <Icon v-if="item.icon" :name="item.icon" />
                    <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
                </a>
            </template>
        </PanelMenu>       

    </div>

    <div v-if="isOpenSidebar" class="fixed md:hidden h-svh z-10 top-0 bottom-0 end-0 start-0 backdrop-blur-sm bg-white/30" @click="toggleSidebar"></div>
    
</template>

<script setup>
const isOpenSidebar = ref(false);
const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
};
const items = ref([
    {
        label: 'Dashboard',
        icon: 'bi:grid-1x2-fill',
        href:'/dashboard',
    },
    {
        label: 'Siswa',
        icon: 'bi:people',
        items: [
            {
                label: 'Data Siswa',
                href:'/siswa',
            },
            {
                label: 'Tambah Siswa',
                href:'/siswa/create',
            },
            {
                label: 'Naik Kelas',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        label: 'Unit Sekolah',
        icon: 'bi:buildings',
        items: [
            {
                label: 'Tambah Unit',
                href:'/unitsekolah/create',
            },
            {
                label: 'Daftar Unit',
                href:'/unitsekolah',
            },
            {
                label: 'Naik Kelas',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        label: 'Pengaturan',
        icon: 'bi:gear',
        items: [
            {
                label: 'Umum',
                href:'/setting/umum',
            },
            {
                label: 'Jenjang',
                href:'/setting/jenjang',
            }
        ]
    },
]);

</script>