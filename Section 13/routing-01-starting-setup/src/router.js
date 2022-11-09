import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue'
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/teams'
        }
        ,
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth:true},
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            /* alias: '/'   will load the same component on that path too  */
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',  //teams/:teamId
                    component: TeamMembers,
                    props: true
                    /*
                    this way, in component we can get
                    teamId as a prop and not from 
                    $route.params
                    property, this makes sure to pass the
                    url parameter as a prop
                    */
                }
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log(to, from);
                next();
            }
        },
        {
            path: '/:notFound(.*)',  // any character combination
            component: NotFound
            //redirect: '/teams'
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {left: 0 , top: 0};
    }
})

router.beforeEach(function(to, from, next) {
    // gets called before each navigation to a page
    console.log(to, from);
    //next(false);  // cancel navigation to page
    next(true);
})

router.afterEach(function(to, from) {
    // sending analytics data
    console.log(to, from)
}) 

export default router;