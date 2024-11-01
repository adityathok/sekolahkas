const { isAuthenticated,logout,login } = useSanctumAuth()

export const useAuth = () => {    
    const isLogin = isAuthenticated;
    const toLogout = logout;
    const toLogin = login;

    return {
        isLogin,
        toLogout,
        toLogin,
    };
}