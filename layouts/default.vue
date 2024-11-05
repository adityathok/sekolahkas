<template>
  
    <div class="relative h-full md:flex min-h-svh w-full">

            <AppSidebar />

            <main class="relative min-h-svh flex-1 p-5 md:pt-4 md:p-6 pb-10">
                
                <AppHeader />

                <slot />

                <AppFooter />
                
            </main>


    </div>

</template>