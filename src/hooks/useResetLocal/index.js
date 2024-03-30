export const useResetLocal = () => {
    if (window.confirm("Are you sure you want to log out?")) {
        return localStorage.removeItem("USER_LOGIN");
    }
};
