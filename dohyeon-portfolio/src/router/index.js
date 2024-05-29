import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import PhotoGramPage from "../layouts/sections/projects/photogram/PhotoGramView.vue";
import TwitterPage from "../layouts/sections/projects/twitter/TwitterView.vue";
import ScmPage from "../layouts/sections/projects/scm/ScmView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/sections/projects/photogram",
      name: "photogram",
      component: PhotoGramPage,
    },
    {
      path: "/sections/projects/twitter",
      name: "twitter-clone",
      component: TwitterPage,
    },
    {
      path: "/sections/projects/scm",
      name: "scm",
      component: ScmPage,
    },
  ],
});

export default router;
