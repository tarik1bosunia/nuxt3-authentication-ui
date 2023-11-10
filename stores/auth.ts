import { defineStore } from "pinia";
export const useAuthStore = defineStore(
  "auth",
   () => {
    const isAuthenticated = ref(false);
    function setAuthenticated(is_authenticated: boolean) {
      isAuthenticated.value = is_authenticated;
    }

    // resetting state
    function $reset() {
      isAuthenticated.value = false;
    }

    return { isAuthenticated, setAuthenticated, $reset };
  },
//   { 
//     persist: true 
//   }

{
    persist: {
        storage: persistedState.cookiesWithOptions({
          sameSite: 'strict',
        }),
      },
}
);
