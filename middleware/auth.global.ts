export default defineNuxtRouteMiddleware((to, from) => {

    try {
        if (to.fullPath !== '/home') {
            
            if(to.fullPath !== '/results') return navigateTo('/home')

            
        }

    } catch (error) {

        console.log(error)
    }
});
