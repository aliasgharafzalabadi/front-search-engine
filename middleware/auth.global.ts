export default defineNuxtRouteMiddleware((to, from) => {

    try {
        if (to.fullPath === '/') {
            
         return navigateTo('/home')

            
        }

    } catch (error) {

        console.log(error)
    }
});
