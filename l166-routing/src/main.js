import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/teams" },
        {
            name: "teams", path: "/teams",
            components: { default: TeamsList, footer: TeamsFooter }, children: [
                { name: "team-members", path: ":teamId", component: TeamMembers, props: true },
            ]
        },
        { path: "/users", components: { default: UsersList, footer: UsersFooter } },
        { path: "/:notFound(.*)", component: NotFound },
    ],
    linkActiveClass: "active-link",
    scrollBehavior(_, _2, savedPosition) {
        //console.log("To:", to);
        //console.log("From:", from);
        //console.log("Position:", savedPosition);
        if (savedPosition)
            return savedPosition;
        return { left: 0, top: 0 };
    },
});

router.beforeEach(function (to, from, next) {
    console.log("Before navigate (global)", to, from);
    //if (to.name !== "teams") {
    //    next({ name: "teams", params: {} });
    //    return;
    //}
    next();
});

const app = createApp(App)
app.use(router);
app.mount('#app');
