<template>
  
    <div class="relative h-full md:flex min-h-svh w-full">

            <AppSidebar />

            <main class="flex-1 p-5 md:pt-4 md:p-6">
                
                <AppHeader />

                <!-- Page Heading -->
                <header v-if="$slots.title" class="mb-10">
                    <h1 class="text-2xl font-bold tracking-tight">
                        <slot name="title" />
                    </h1>
                    <div v-if="$slots.subtitle" class="mt-2">
                        <slot name="subtitle" />
                    </div>
                </header>

                <slot />

                <AppFooter />
                
            </main>


    </div>

</template>