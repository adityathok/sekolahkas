export const useUserStore = defineStore('user', () => {  
    
    const { isAuthenticated, user } = useSanctumAuth()

    const isLogin = isAuthenticated;
    const currentUser = user
  
    return { isLogin, currentUser }
})