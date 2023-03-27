import { createRouter, createWebHistory } from "vue-router";
import userStore from "@/store/user";
import CoachDetail from "@/pages/coaches/CoachDetail.vue";
import CoachesList from "@/pages/coaches/CoachesList.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";
import ContactCoach from "@/pages/requests/ContactCoach.vue";
import RequestsReceived from "@/pages/requests/RequestsReceived.vue";
import UserAuth from "@/pages/auth/UserAuth.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      props: true,
      component: CoachDetail,
      children: [{ path: "contact", component: ContactCoach }],
    },
    {
      path: "/register",
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !userStore().isAuthenticated) {
    next("/auth");
    return;
  }
  if (to.meta.requiresUnauth && userStore().isAuthenticated) {
    next("/");
    return;
  }
  next();
});

export default router;
