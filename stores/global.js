export const useGlobalStore = defineStore('global', () => {
    
    const opensidebar = ref(false)

    function toggelsidebar() {
        opensidebar.value = !opensidebar.value
    }
  
    return { opensidebar, toggelsidebar }
})