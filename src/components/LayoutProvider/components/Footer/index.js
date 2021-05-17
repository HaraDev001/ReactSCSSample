//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../../routes';
import { Container, Row, Col } from '../../../Grid';
import { withFadeEffect } from '../../../tools';
import Logo from '../Logo';

type Props = {
	fade: boolean
}

function Footer({fade}: Props) {
	return (
		<footer className={fade ? 'fade' : ''}>
			<Container style={{position: 'relative', zIndex: 4}}>
				
				<Row flex wrap justifyBetween alignCenter>
					<Col sm={7.9} md={4.7} xs={12} className="footer-auth-buttons">
						<div className="auth-buttons">
							<Link to={ROUTES.AUTH.USER_REGISTER} className="btn btn--footer-black">Get started</Link>
							<Link to={ROUTES.AUTH.LOGIN} className="btn btn--footer-transparent">Login</Link>
						</div>
					</Col>
					<Col md={5.1} xsPush={0.1} xs={11.8} className="footer-navigation">
						<div className="footer-menu">
							<ul>
								<li className="menu-title">Company</li>
								<li><Link to="/">About us</Link></li>
								<li><Link to="/">Media assets</Link></li>
								<li><Link to="/">Contact</Link></li>
							</ul>
							<ul>
								<li className="menu-title">Product</li>
								<li><Link to={ROUTES.PRICING}>Pricing</Link></li>
								<li><Link to="/">Roadmap</Link></li>
							</ul>
							<ul>
								<li className="menu-title">Other</li>
								<li><Link to={ROUTES.TERMS}>Terms</Link></li>
								<li><Link to="/">Help Center</Link></li>
								<li><Link to={ROUTES.PRIVACY}>Privacy</Link></li>
							</ul>
						</div>
					</Col>
					
					<Col sm={3.9} md={2} xs={12} className="logo-footer">
						<Logo whiteSquares/>
					</Col>
					
					<span className="delimiter"/>
					
					<Col xs={12} style={{order: 4}}>
						<div className="copyright">
							<p>© Transleat {new Date().getFullYear()}. All rights reserved.</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default withFadeEffect(Footer);