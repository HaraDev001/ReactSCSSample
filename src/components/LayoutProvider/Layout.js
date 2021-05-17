//@flow
import { Location } from '@reach/router';
import * as React from 'react';
import Helmet from 'react-helmet';
import VideoPresentation from '../ReusableSections/VideoPresentation';
import { LayoutContext } from './';
import AsideMenu from './components/AsideMenu';
import CookiePolicy from './components/CookiePolicy';
import Footer from './components/Footer';
import Header from './components/Header';

type Props = {
	children: React.Node,
}

function Layout(props: Props) {
	const state = React.useContext(LayoutContext);
	const { title, classNameLayout } = state;
	return (
		<Location>
			{({location}) => (
				<React.Fragment>
					<Helmet><title>{title}</title></Helmet>
					
					<CookiePolicy/>
					
					{state.withHeader && <Header withNav={state.withNav} isAuthenticated={state.isAuthenticated}/>}
					
					{state.isAuthenticated && <AsideMenu location={location}/>}
					
					<main role="main" className={`${classNameLayout}`}>
						{props.children}
						{state.withFooter && (<VideoPresentation/>)}
					</main>
					
					<span className={`blur-bg ${state.blurBg ? "show" : '' }`}/>
					
					{/* Footer */}
					{state.withFooter && <Footer/>}
				</React.Fragment>
			)}
		</Location>
	)
}

export { Layout }