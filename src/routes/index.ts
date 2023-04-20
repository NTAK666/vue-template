import * as VueRouter from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		components: {
			default: () => import('@/layouts/DefaultLayout.vue'),
			Navbar: () => import('@/components/Navbar/index.vue'),
			Footer: () => import('@/components/Footer/index.vue'),
		},
		children: [
			{
				path: '',
				strict: true,
				name: 'Home',
				sensitive: true,
				components: {
					default: () => import('@/pages/Home.vue'),
				},
			},
			{
				path: '/about',
				name: 'About',
				sensitive: false,
				components: {
					default: () => import('@/pages/About.vue'),
				}
			},
			{
				path: '/stack',
				name: 'Stack',
				sensitive: false,
				components: {
					default: () => import('@/pages/Stack.vue'),
				}
			},
			{
				path: '/counter',
				name: 'Counter',
				sensitive: false,
				components: {
					default: () => import('@/pages/Counter.vue'),
				}
			},
			{
				path: '/fetch',
				name: 'Fetch',
				sensitive: false,
				components: {
					default: () => import('@/pages/Fetch.vue'),
				}
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		components: {
			default: () => import('@/pages/NotFound.vue'),
			Navbar: () => import('@/components/Navbar/index.vue'),
			Footer: () => import('@/components/Footer/index.vue'),
		},
	}
]

export const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes,
})
