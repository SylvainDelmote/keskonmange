
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/plats/:id', component: () => import('../components/PlatsDetail.vue') },
      { path: '/edit', component: () => import('../pages/EditerPlat.vue') },
      { path: '/plats', component: () => import('../pages/AfficherPlat.vue') },
      { path: '/add', component: () => import('../pages/AjouterPlat.vue') },
      { path: '/plat', component: () => import('../pages/PagePlat.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
