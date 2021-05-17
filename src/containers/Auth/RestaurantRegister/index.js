//@flow
import { Link, Redirect, Router } from '@reach/router';
import * as React from 'react';
import Container from '../../../components/Grid/Container';
import {
	DashboardIcon,
	MenuIcon, PaymentIcon,
	SettingsSmallIcon,
	SignOut
} from '../../../components/Icons';
import { Consume } from '../../../components/LayoutProvider';
import Logo from '../../../components/LayoutProvider/components/Logo';
import NotFound from '../../../components/NotFound';
import { withFadeEffect } from '../../../components/tools';
import { ROUTES } from '../../../routes';

type Props = {
	fade: boolean,
	routes: Array<Object>
}

function RestaurantRegister({fade, routes}: Props) {
	const removeRegisterPrefix = (path: string) => {
		return path.replace('/register/', '');
	};
	return (
		<Consume consume={{
			title: 'TRANSLEAT | REGISTER',
			classNameLayout: 'auth-page',
			isAuthenticated: false,
			withFooter: false,
			withNav: false,
			withHeader: false
		}}>
			<section className="restaurant-register-section">
				<span className="orange-bg orange"/>
				<Container>
					<div className={`register-container ${fade ? 'fade' : ''}`}>
						<span className={`white-bg ${fade ? 'widder' : ''}`} style={{animationDelay: '0.1s'}}/>
						<Navigation/>
						<div className="form-container">
							<Router tabIndex="" style={{width: '100%'}}>
								{routes.map((route, i) => (
									<route.component key={i} {...route} path={removeRegisterPrefix(route.path)}/>
								))}
								<Redirect from="/" to={ROUTES.AUTH.LOGIN} noThrow/>
								<NotFound default/>
							</Router>
						</div>
					</div>
					
					<Link to="/" title="Sign Out"><SignOut/></Link>
				</Container>
			</section>
		</Consume>
	)
}

const Navigation = React.memo(() => (
	<div className="profile-menu">
		<Logo/>
		<ul>
			<li><NavItem to={ROUTES.AUTH.REGISTER_RESTAURANT}><DashboardIcon/>My Company</NavItem></li>
			<li><NavItem to={ROUTES.AUTH.REGISTER_MENU}><MenuIcon/>Social Medias</NavItem></li>
			<li><NavItem to={ROUTES.AUTH.REGISTER_PLAN}><SettingsSmallIcon/>Plan</NavItem></li>
			<li><NavItem to={ROUTES.AUTH.REGISTER_PAYMENT}><PaymentIcon/>Payment</NavItem></li>
		</ul>
	</div>
));

Navigation.displayName = "Navigation";

const NavItem = React.memo(({children, ...props}) => (
	<Link {...props} getProps={({isCurrent}) => {
		return {
			className: isCurrent ? 'active' : ''
		};
	}}>
		{children}
	</Link>
));

NavItem.displayName = "NavItem";

export default withFadeEffect(RestaurantRegister);