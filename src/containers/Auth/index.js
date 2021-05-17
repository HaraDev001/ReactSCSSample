//@flow
import { Redirect, Router } from '@reach/router';
import * as React from 'react';
import { Consume } from '../../components/LayoutProvider';
import NotFound from '../../components/NotFound';
import { ROUTES } from '../../routes';

type Props = {
	routes: Array<Object>
}
function Auth({routes}: Props) {
	const removeAuthPrefix = (path: string) => {
		return path.replace('/auth/', '');
	};
	return (
		<Consume consume={{
			title: 'TRANSLEAT | AUTH',
			classNameLayout: 'auth-page',
			isAuthenticated: false,
			withFooter: false,
			withNav: false,
			withHeader: true
		}}>
			<Router tabIndex="">
				{routes.map((route, i) => (
					<route.component key={i} {...route} path={removeAuthPrefix(route.path)}/>
				))}
				<Redirect from="/" to={ROUTES.AUTH.LOGIN} noThrow/>
				<NotFound default/>
			</Router>
		</Consume>
	)
}

export default Auth;