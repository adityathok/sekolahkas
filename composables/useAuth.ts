export const useAuth = () => {   
    const { isAuthenticated,logout,login } = useSanctumAuth()

    const isLogin = isAuthenticated;
    
    const toLogout = async () => {
        try {
            logout()
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    const toLogin = login;

    return {
        isLogin,
        toLogout,
        toLogin,
    };
}