<template>

    <div class="fixed md:relative overflow-y-auto md:start-0 z-20 top-0 px-2 pb-3 h-svh w-[90%] md:w-[14rem] bg-slate-600 shadow md:shadow-none transition ease-in-out duration-100" :class="{'start-[0%]': useGlobal.opensidebar, 'start-[-100%]': !useGlobal.opensidebar}">

        <div class="flex items-center z-10 p-3 min-h-[5rem] mb-2 border-b border-zinc-500">
            <AppLogo />
        </div>

        <PanelMenu
            :model="items"
            class="w-full border-none rounded-none"
            v-model:expandedKeys="expandedKeys"
            :pt="{
                panel: (options) => ({
                    class: [
                        '!border-none',
                        '!bg-transparent'
                    ]
                }),
                rootList: (options) => ({
                    class: [
                        '!ps-0',
                    ]
                })
            }"
        >
            <template #item="{ item }">
                <button v-if="item.items" v-ripple :class="[classLink,{'bg-blue-600 text-white hover:text-slate-500 shadow' : isActive(item.href)}]">
                    <span>
                        <Icon v-if="item.icon" :name="item.icon" class="mr-2"/>
                        <span>{{ item.label }}</span>
                    </span>
                    <Icon v-if="item.items" name="lucide:chevron-down" />
                </button>
                <NuxtLink v-else :to="item.href" :class="[classLink,{'bg-blue-600 text-white hover:text-slate-500 shadow' : isActive(item.href)}]">
                    <span>
                        <Icon v-if="item.icon" :name="item.icon"  class="mr-2"/>
                        <span :class="{'ml-5':item.key.includes('_')}">{{ item.label }}</span>
                    </span>
                </NuxtLink>
            </template>
        </PanelMenu>       

    </div>

    <div v-if="useGlobal.opensidebar" class="fixed md:hidden h-svh z-10 top-0 bottom-0 end-0 start-0 backdrop-blur-sm bg-white/30" @click="useGlobal.toggelsidebar"></div>
    
</template>

<script setup>
const useGlobal = useGlobalStore()

//route, cek halaman aktif
const route = useRoute()
const isActive = (path) => {
  return route.path === path
}

//expand menu
const expandedKeys = ref({});
const expandNode = (node) => {
    if (node.items && node.items.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.items) {
            expandNode(child);
        }
    }
};

onMounted(() => {
    //expand menu active
    for (let node of items.value) {
        if(node.items){
            for (let child of node.items) {                
                if(route.path === child.href){   
                    expandedKeys.value[node.key] = true;
                }
            }
        }
    }
})


//class untuk tombol menu
const classLink = 'w-full flex items-center justify-between px-4 py-2 cursor-pointer rounded text-white hover:text-slate-900 hover:bg-white hover:shadow';

//daftar menu
const items = ref([
    {
        key: '0',
        label: 'Dashboard',
        icon: 'lucide:layout-grid',
        href:'/',
    },
    {
        key: '1',
        label: 'Siswa',
        icon: 'lucide:users',
        items: [
            {
                key: '1_0',
                label: 'Data Siswa',
                href:'/siswa',
            },
            {
                key: '1_1',
                label: 'Tambah Siswa',
                href:'/siswa/create',
            },
            {
                key: '1_2',
                label: 'Naik Kelas',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        key: '2',
        label: 'Unit Sekolah',
        icon: 'lucide:school',
        items: [
            {
                key: '2_0',
                label: 'Tambah Unit',
                href:'/unitsekolah/create',
            },
            {
                key: '2_1',
                label: 'Daftar Unit',
                href:'/unitsekolah',
            },
            {
                key: '2_2',
                label: 'Naik Kelas',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        key: '3',
        label: 'Pengaturan',
        icon: 'lucide:settings',
        items: [
            {
                key: '3_0',
                label: 'Umum',
                href:'/settings/umum',
            },
            {
                key: '3_1',
                label: 'Jenjang',
                href:'/settings/jenjang',
            }
        ]
    },
]);

</script>