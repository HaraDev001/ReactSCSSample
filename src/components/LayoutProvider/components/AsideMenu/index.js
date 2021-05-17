//@flow
import { Link, Location } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../../routes';
import {
	AsideMenuBtnOpen,
	DashboardIcon, HourGlass, MenuIcon,
	PaymentIcon, SignOut
} from '../../../Icons';
import { ActiveLink } from '../../../tools';
import Logo from '../Logo';

const AsideMenu = React.memo<any>(({location}) => {
	const [isOpened, openMenu] = React.useState(false);
	React.useEffect(() => {
		openMenu(false)
	}, [location]);
	return(
		<aside className={isOpened ? 'opened' : ''}>
			<span className={`bg `}/>
			<Logo to={ROUTES.PROFILE.DASHBOARD}/>
			<Navigation toggleMenu={() => openMenu(open => !open)}/>
			<Link to="/" className="sign-out-link"><SignOut/></Link>
		</aside>
	)
});

AsideMenu.displayName = 'AsideMenu';

const Navigation = React.memo<any>(({toggleMenu}) => (
	<Location>
		{({location}) =>(
			<div className="profile-menu">
				<ul>
					<li className="toggle-btn" onClick={() => toggleMenu()}><AsideMenuBtnOpen/><span>Close menu</span></li>
					
					<li><ActiveLink to={ROUTES.PROFILE.DASHBOARD}><DashboardIcon/><span>Dashboard</span></ActiveLink></li>
					<li><ActiveLink to={ROUTES.PROFILE.RESTAURANT_MENU}><MenuIcon/><span>Menu</span></ActiveLink></li>
					<li><ActiveLink to={ROUTES.PROFILE.STATISTICS}><HourGlass/><span>Statistics</span></ActiveLink></li>
					<li><ActiveLink to={ROUTES.PROFILE.SETTINGS} isActive={location.pathname.includes('settings')}><PaymentIcon/><span>Settings</span></ActiveLink></li>
				</ul>
			</div>
		)}
	</Location>
));

Navigation.displayName = "Navigation";



export default AsideMenu;