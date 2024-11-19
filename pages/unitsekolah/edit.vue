<template>

  <Card class="max-w-3xl mx-auto">

      <template #title>
          Unit {{ data.nama }}
      </template>

      <template #content>

          <form @submit.prevent="handleFormSubmit">

            <div v-for="(field, index) in formFields" :key="field.id" class="mb-3">
                <label :for="field.id">{{ field.label }}</label>
                
                <InputText v-if="field.type == 'text'" :id="field.id" v-model="form[field.id]" type="text" size="large" class="w-full"/>

                <img v-if="field.type == 'file'" :src="form[field.id]" alt="" class="rounded mb-2">
                <InputText v-if="field.type == 'file'" @change="handleFileUpload" type="file" :id="field.id" class="w-full"/>

            </div>
            
            <div class="text-end">
                <Button type="submit" label="Update"/>
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

    const formFields = [
      {id: 'nama',label: 'Nama',type: 'text'},
      {id: 'jenjang',label: 'Jenjang',type: 'text'},
      {id: 'alamat',label: 'Alamat',type: 'text'},
      {id: 'desa',label: 'Desa',type: 'text'},
      {id: 'kecamatan',label: 'Kecamatan',type: 'text'},
      {id: 'kota',label: 'Kota',type: 'text'},
      {id: 'provinsi',label: 'Provinsi',type: 'text'},
      {id: 'kode_pos',label: 'Kode Pos',type: 'text'},
      {id: 'status',label: 'Status',type: 'text'},
      {id: 'tanggal_berdiri',label: 'Tanggal Berdiri',type: 'text'},
      {id: 'kepala_sekolah',label: 'Kepala Sekolah',type: 'text'},
      {id: 'whatsapp',label: 'Whatsapp',type: 'text'},
      {id: 'telepon',label: 'Telepon',type: 'text'},
      {id: 'email',label: 'Email',type: 'text'},
      {id: 'logo',label: 'Logo',type: 'file'},
    ]

    const form = ref<Record<string, any>>({
        ...data.value,
    });

    function handleFileUpload(event: any) {
        var id = event.target.id
        form.value[id] = URL.createObjectURL(event.target.files[0])
    }

    const handleFormSubmit = async () => {
        const formData = new FormData();
        for (const key in form.value) {
            formData.append(key, form.value[key]);
        }
        console.log(formData);

        try {
            await client('/api/unitsekolah/'+data.value.id, {
                method: 'PUT',
                body: formData
            })
        } catch (er) {
            const e = useSanctumError(er);
            console.log(e.bag);
        }

    }


</script>

