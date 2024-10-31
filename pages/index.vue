<template>
    
    <div class="relative flex justify-center items-center h-screen w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      
      <div class="text-white backdrop-blur-sm bg-white/30 rounded shadow-xl p-10 m-3 w-full md:w-[450px]">
          
          <div class="text-center mb-5 pb-3 border-b">
            <h1 class="text-xl font-bold">
              Selamat Datang
            </h1>
          </div>

          <template v-if="!isAuthenticated">
            <AuthLoginForm />
          </template>

          
          <template v-if="isAuthenticated">
              <Button @click="logout" label="logout" class="w-full" />
          </template>

      </div>

    </div>

</template>

<script lang="ts" setup>
  const { isAuthenticated,logout } = useSanctumAuth()
</script>