<template>
    
    <div class="relative flex justify-center items-center h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      
      <div class="text-slate-900 z-20 bg-white shadow-xl p-10 m-3 w-full md:w-[450px]">                   

          <template v-if="!isAuthenticated">
            <div class="mb-5 pb-3 border-b">
              <h1 class="text-xl font-bold">
                Login
              </h1>
            </div>
            <AuthLoginForm />
          </template>
          
          <template v-if="isAuthenticated">
            <div class="mb-5 pb-3 border-b">
              <h1 class="text-xl text-center font-bold">
                Anda sudah masuk
              </h1>
            </div>
            <div class="flex justify-between">
              <Button @click="navigateTo('/dashboard')" label="Dashboard" class="w-full md:w-[48%] md:mb-0 mb-2" outlined/>
              <Button @click="logout" label="Logout" class="w-full md:w-[48%]" />
            </div>
          </template>

      </div>

      <div></div>

    </div>

</template>

<script lang="ts" setup>
  definePageMeta({
    layout: 'blank'
  })
  const { isAuthenticated,logout } = useSanctumAuth()
</script>