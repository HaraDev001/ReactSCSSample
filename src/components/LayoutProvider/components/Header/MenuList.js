//@flow
import * as React from 'react';
import { Link, Location } from '@reach/router';
import Media from 'react-media';
import { ROUTES } from '../../../../routes';

type MenuIconProps = {
	label: string,
	children: React.Node,
	isActive?: boolean
}
const MenuIcon = React.memo<MenuIconProps>(({label, children, isActive = false, ...props}) => (
	<li className='menu-item'>
		<Link {...props}
		      getProps={({isCurrent}) => {
			      return {
				      className: isCurrent || isActive ? 'active' : ''
			      };
		      }}
		>
			<span className="menu-label">{label}</span>
			<span className="active-label">{label}</span>
			{children}
		</Link>
	</li>
));

MenuIcon.displayName = "MenuIcon";


const MenuList = React.memo<any>(() => (
	<Location>
		{({location}) =>
			<ul className="menu-list">
				<Media query="(max-width: 1023px)">
					{matches => matches && (
						<React.Fragment>
							<MenuIcon label="Login" to={ROUTES.AUTH.LOGIN}/>
							<MenuIcon label="Get started" to={ROUTES.AUTH.USER_REGISTER}/>
							<MenuIcon label="Home" to="/"/>
						</React.Fragment>
					)}
				</Media>
				<MenuIcon label="Product" to={ROUTES.PRODUCT}/>
				<MenuIcon label="Pricing" to={ROUTES.PRICING}/>
			</ul>
		}
	</Location>
));

MenuList.displayName = "MenuList";

export default MenuList;