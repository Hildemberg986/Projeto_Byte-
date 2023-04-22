import { createRouter,createWebHistory } from "vue-router"

import StandForum from "@/components/StandForum.vue"
import SplashLoad from "@/components/SplashLoad.vue";
 
    const routes = [
        {
            path:'/',
            name:'SplashLoad',
            component: SplashLoad
        },
        {
            path:'/Forum',
            name: 'forum',
            component: StandForum
        }
    ]
    const router= createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes 
    })
    
    export default router;