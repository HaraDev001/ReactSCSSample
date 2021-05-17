//@flow
import * as React from 'react';
import { LayoutProvider } from '../components/LayoutProvider';
import NotFound from '../components/NotFound';
import { routes } from '../routes';
import { Router } from '@reach/router';

function Root() {
	return (
		<LayoutProvider value={{ title: 'Loading...', isAuthenticated: false }}>
			<Router tabIndex="">
				{routes.map((route, i) => (
					<route.component key={i} {...route}/>
				))}
				<NotFound default/>
			</Router>
		</LayoutProvider>
	);
}

export default Root;