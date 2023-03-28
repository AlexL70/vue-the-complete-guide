import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import userStore from "@/store/user";
import CoachesList from "@/pages/coaches/CoachesList.vue";
import NotFound from "@/pages/NotFound.vue";

const CoachDetail = defineAsyncComponent(
  () => import("@/pages/coaches/CoachDetail.vue")
);
const CoachRegistration = defineAsyncComponent(
  () => import("@/pages/coaches/CoachRegistration.vue")
);
const ContactCoach = defineAsyncComponent(
  () => import("@/pages/requests/ContactCoach.vue")
);
const RequestsReceived = defineAsyncComponent(
  () => import("@/pages/requests/RequestsReceived.vue")
);
const UserAuth = defineAsyncComponent(
  () => import("@/pages/auth/UserAuth.vue")
);

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
