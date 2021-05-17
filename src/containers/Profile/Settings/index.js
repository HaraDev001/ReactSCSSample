//@flow
import { Redirect, Router } from '@reach/router';
import * as React from 'react';
import { Consume } from '../../../components/LayoutProvider';
import NotFound from '../../../components/NotFound';
import { ActiveLink } from '../../../components/tools';
import { ROUTES } from '../../../routes';

type Props = {
	routes: Object
}
function Settings({routes}: Props) {
	const removePrefix = (path: string) => {
		return path.replace('/settings/', '');
	};
	
	return (
		<Consume consume={{
			title: 'TRANSLEAT | SETTINGS',
			classNameLayout: 'profile-page',
			isAuthenticated: true,
			withFooter: false,
			withNav: false,
			withHeader: true
		}}>
			<section className="settings-section">
				<div className="profile-container">
					<Navigation/>
					<div className="settings-content">
						<Router tabIndex="">
							{routes.map((route, i) => (
								<route.component key={i} {...route} path={removePrefix(route.path)}/>
							))}
							<Redirect from="/" to={ROUTES.PROFILE.SETTINGS_ROUTES.RESTAURANT} noThrow/>
							<NotFound default/>
						</Router>
					</div>
				</div>
			</section>
		</Consume>
	);
}

function Navigation() {
	const [underlinePosition, setUnderline] = React.useState({
		left: 0,
		width: 112
	});
	
	const triggerActiveLink = (elem) => {
		setUnderline({
			left: elem.offsetLeft,
			width: elem.offsetWidth
		})
	};
	
	React.useEffect(() => {
		let timeout = setTimeout(() => {
			let activeLink = document.querySelector('.settings-navigation li > a.active');
			setUnderline({
				left: activeLink && activeLink.parentElement ? activeLink.parentElement.offsetLeft : 0,
				width: activeLink && activeLink.parentElement ? activeLink.parentElement.offsetWidth : 112
			})
		}, 1000);
		
		return () => {
			clearTimeout(timeout)
		}
	}, []);
	
	return(
		<div className="settings-navigation">
			<ul>
				<li onClick={(e) => triggerActiveLink(e.currentTarget)}><ActiveLink to={ROUTES.PROFILE.SETTINGS_ROUTES.RESTAURANT}>General</ActiveLink></li>
				<li onClick={(e) => triggerActiveLink(e.currentTarget)}><ActiveLink to={ROUTES.PROFILE.SETTINGS_ROUTES.LANGUAGES}>Languages</ActiveLink></li>
				<li onClick={(e) => triggerActiveLink(e.currentTarget)}><ActiveLink to={ROUTES.PROFILE.SETTINGS_ROUTES.PASSWORDS}>Password & security</ActiveLink></li>
				<li onClick={(e) => triggerActiveLink(e.currentTarget)}><ActiveLink to={ROUTES.PROFILE.SETTINGS_ROUTES.MEMBERSHIP}>Membership</ActiveLink></li>
				<li onClick={(e) => triggerActiveLink(e.currentTarget)}><ActiveLink to={ROUTES.PROFILE.SETTINGS_ROUTES.BILLING}>Billing Methods</ActiveLink></li>
			</ul>
			<span className="underline" style={{transform: `translateX(${underlinePosition.left-2}px)`, width: `${underlinePosition.width}px`}}/>
		</div>
	)
}

export default Settings;