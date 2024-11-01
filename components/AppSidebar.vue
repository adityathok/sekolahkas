<template>

    <div class="relative h-svh md-w-[16rem] bg-zinc-300">

    </div>
    
</template>

<script setup>
const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-th-large',
        href:'/dashboard',
    },
    {
        label: 'Siswa',
        icon: 'pi pi-users',
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
        icon: 'pi pi-building-columns',
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
        icon: 'pi pi-cog',
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
    {
        label: 'Siswa',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Data Siswa',
                icon: 'pi pi-users',
                href:'/siswa',
            },
            {
                label: 'Tambah Siswa',
                icon: 'pi pi-user-plus',
                href:'/siswa/create',
            },
            {
                label: 'Naik Kelas',
                icon: 'pi pi-caret-up',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        label: 'Siswa',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Data Siswa',
                icon: 'pi pi-users',
                href:'/siswa',
            },
            {
                label: 'Tambah Siswa',
                icon: 'pi pi-user-plus',
                href:'/siswa/create',
            },
            {
                label: 'Naik Kelas',
                icon: 'pi pi-caret-up',
                href:'/siswa/naikkelas',
            }
        ]
    },
    {
        label: 'Siswa',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Data Siswa',
                icon: 'pi pi-users',
                href:'/siswa',
            },
            {
                label: 'Tambah Siswa',
                icon: 'pi pi-user-plus',
                href:'/siswa/create',
            },
            {
                label: 'Naik Kelas',
                icon: 'pi pi-caret-up',
                href:'/siswa/naikkelas',
            }
        ]
    },
]);

</script>