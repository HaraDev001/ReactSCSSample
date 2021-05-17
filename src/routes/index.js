//@flow
import React from 'react';
import Loadable from 'react-loadable';
import { DefaultGuard } from './Guards';

const load = (getComp: () => any) => Loadable({
	loader: () => getComp(),
	loading: () => <div className="still-loading"/>
});

export const ROUTES = {
	HOME: "/",
	PRODUCT: "/product",
	PRICING: "/pricing",
	PRIVACY: "/privacy",
	TERMS: "/terms-of-use",
	AUTH: {
		LOGIN: '/auth/login',
		USER_REGISTER: '/auth/user-register',
		REGISTER_RESTAURANT: '/register/restaurant',
		REGISTER_MENU: '/register/menu',
		REGISTER_PLAN: '/register/select-plan',
		REGISTER_PAYMENT: '/register/payment',
	},
	PROFILE: {
		DASHBOARD: '/dashboard',
		RESTAURANT_MENU: '/restaurant-menu',
		STATISTICS: '/statistics',
		SETTINGS: '/settings',
		SETTINGS_ROUTES: {
			RESTAURANT: '/settings/restaurant',
			LANGUAGES: '/settings/languages',
			PASSWORDS: '/settings/passwords',
			MEMBERSHIP: '/settings/membership',
			BILLING: '/settings/billing-methods',
		},
	}
};

export const routes = [
	{
		path: '/',
		guard: DefaultGuard,
		component: load(() => import('../containers/Home'))
	},
	{
		path: ROUTES.PRODUCT,
		guard: DefaultGuard,
		component: load(() => import('../containers/Product'))
	},
	{
		path: ROUTES.PRICING,
		guard: DefaultGuard,
		component: load(() => import('../containers/Pricing'))
	},
	{
		path: ROUTES.PRIVACY,
		guard: DefaultGuard,
		component: load(() => import('../containers/Privacy'))
	},
	{
		path: ROUTES.TERMS,
		guard: DefaultGuard,
		component: load(() => import('../containers/Terms'))
	},
	{
		path: '/auth/*',
		guard: DefaultGuard,
		component: load(() => import('../containers/Auth')),
		routes: [
			{
				path: ROUTES.AUTH.LOGIN,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/Login'))
			},
			{
				path: ROUTES.AUTH.USER_REGISTER,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/UserRegister'))
			}
		]
	},
	{
		path: '/register/*',
		guard: DefaultGuard,
		component: load(() => import('../containers/Auth/RestaurantRegister')),
		routes: [
			{
				path: ROUTES.AUTH.REGISTER_RESTAURANT,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/RestaurantRegister/Restaurant'))
			},
			{
				path: ROUTES.AUTH.REGISTER_MENU,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/RestaurantRegister/Menu'))
			},
			{
				path: ROUTES.AUTH.REGISTER_PLAN,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/RestaurantRegister/SelectPlan'))
			},
			{
				path: ROUTES.AUTH.REGISTER_PAYMENT,
				guard: DefaultGuard,
				component: load(() => import('../containers/Auth/RestaurantRegister/Payment'))
			}
		]
	},
	
	//Profile
	{
		path: ROUTES.PROFILE.DASHBOARD,
		guard: DefaultGuard, // TODO: here should be AuthGuard to check if user is logged
		component: load(() => import('../containers/Profile/Dashboard'))
	},
	{
		path: ROUTES.PROFILE.RESTAURANT_MENU,
		guard: DefaultGuard, // TODO: here should be AuthGuard to check if user is logged
		component: load(() => import('../containers/Profile/Menu'))
	},
	{
		path: ROUTES.PROFILE.STATISTICS,
		guard: DefaultGuard, // TODO: here should be AuthGuard to check if user is logged
		component: load(() => import('../containers/Profile/Statistics'))
	},
	{
		path: '/settings/*',
		guard: DefaultGuard, // TODO: here should be AuthGuard to check if user is logged
		component: load(() => import('../containers/Profile/Settings')),
		routes: [
			{
				path: ROUTES.PROFILE.SETTINGS_ROUTES.RESTAURANT,
				guard: DefaultGuard,
				component: load(() => import('../containers/Profile/Settings/Restaurant'))
			},
			{
				path: ROUTES.PROFILE.SETTINGS_ROUTES.LANGUAGES,
				guard: DefaultGuard,
				component: load(() => import('../containers/Profile/Settings/Languages'))
			},
			{
				path: ROUTES.PROFILE.SETTINGS_ROUTES.PASSWORDS,
				guard: DefaultGuard,
				component: load(() => import('../containers/Profile/Settings/Passwords'))
			},
			{
				path: ROUTES.PROFILE.SETTINGS_ROUTES.MEMBERSHIP,
				guard: DefaultGuard,
				component: load(() => import('../containers/Profile/Settings/Membership'))
			},
			{
				path: ROUTES.PROFILE.SETTINGS_ROUTES.BILLING,
				guard: DefaultGuard,
				component: load(() => import('../containers/Profile/Settings/Billing'))
			},
		]
	},
];

