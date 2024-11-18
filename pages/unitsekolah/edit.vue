<template>

  <Card class="max-w-3xl mx-auto">

      <template #title>
          Unit {{ data.nama }}
      </template>

      <template #content>

          <form @submit.prevent="handleFormSubmit">
              <div class="mb-3">
                  <label for="nama">Nama</label>
                  <InputText id="nama" v-model="form.nama" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="jenjang">Jenjang</label>
                  <InputText id="jenjang" v-model="form.jenjang" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="kepala_sekolah">Kepala Sekolah</label>
                  <InputText id="kepala_sekolah" v-model="form.kepala_sekolah" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="telepon">Telepon</label>
                  <InputText id="telepon" v-model="form.telepon" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="whatsapp">Whatsapp</label>
                  <InputText id="whatsapp" v-model="form.whatsapp" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="email">Email</label>
                  <InputText id="email" v-model="form.email" type="text" size="large" class="w-full"/>
              </div>
              <div class="mb-3">
                  <label for="alamat">Alamat</label>
                  <InputText id="alamat" v-model="form.alamat" type="text" size="large" class="w-full"/>
              </div>
              <div class="text-end">
                  <Button type="submit" label="Update"/>
              </div>

              <div v-for="(field, index) in formFields" class="mb-3">
                <label :for="field.id">{{ field.label }}</label>
                
                <InputText v-if="field.type == 'text'" :id="field.id" v-model="form[field.id]" type="text" size="large" class="w-full"/>

              </div>

          </form>

      </template>
  </Card>

</template>

<script setup lang="ts">
    const client = useSanctumClient();
    const route = useRoute()
    const idUnit = route.query.id || '';

    if(!idUnit){
       await navigateTo('/unitsekolah')
    }

    const { data, status, error, refresh } = await useAsyncData(
        'users'+idUnit,
        () => client('/api/unitsekolah/'+idUnit)
    )

    const formFields = ref([
      {
        id: 'nama',
        label: 'Nama',
        type: 'text',
      },
      {
        id: 'jenjang',
        label: 'Jenjang',
        type: 'text',
      },
      {
        id: 'jenjang',
        label: 'Jenjang',
        type: 'text',
      }
    ])

    const form = ref({
        nama: data.value.nama,
        jenjang: data.value.jenjang,
        kepala_sekolah: data.value.kepala_sekolah,
        telepon: data.value.telepon,
        whatsapp: data.value.whatsapp,
        email: data.value.email,
        alamat: data.value.alamat,
    })

    const handleFormSubmit = async () => {
      
    }


</script>

