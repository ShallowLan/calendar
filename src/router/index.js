export default {
	mode: 'history', // hash/history
	routes: [
		{ path: '/', redirect: '/menu' },
		{
			path: '/menu',
			name: 'menu',
			component: (resolve) => require(['@/page/menu'], resolve),
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: (resolve) => require(['@/components/calendar'], resolve),
		},
		{
			path: '/mulcalendar',
			name: 'mulcalendar',
			component: (resolve) =>
				require(['@/components/calendar-multiple'], resolve),
		},
		{
			path: '/tree',
			name: 'tree',
			component: (resolve) => require(['@/page/tree'], resolve),
		},
		{
			path: '/trees',
			name: 'trees',
			component: (resolve) => require(['@/page/trees'], resolve),
		},
		{
			path: '/sku',
			name: 'sku',
			component: (resolve) => require(['@/page/Sku'], resolve),
		},
		{
			path: '/MouseClick',
			name: 'MouseClick',
			component: (resolve) => require(['@/page/MouseClick'], resolve),
		},
	],
}
