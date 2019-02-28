import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import PatternMaker from '../create/PatternMaker.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import PatternTops from '../parts/PatternTops.vue';
import PatternSides from '../parts/PatternSides.vue';
import PatternCenters from '../parts/PatternCenters.vue';
import PatternBases from '../parts/PatternBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarCreate from '../sidebars/SidebarCreate.vue';
import PatternLibrary from '../library/PatternLibrary.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/create',
    name: 'Create',
    components: {
      default: PatternMaker,
      sidebar: SidebarCreate,
    },
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseTops',
        path: 'tops',
        component: PatternTops,
      },
      {
        name: 'BrowseSides',
        path: 'sides',
        component: PatternSides,
      }, {
        name: 'BrowseCenters',
        path: 'centers',
        component: PatternCenters,
      }, {
        name: 'BrowseBases',
        path: 'bases',
        component: PatternBases,
      }],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }, {
    path: '/library',
    name: 'Library',
    component: PatternLibrary,
  }],
});
