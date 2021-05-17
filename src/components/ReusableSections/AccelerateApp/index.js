//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../routes';
import {Container, Row, Col} from '../../Grid';
import { EyeIcon, HeartIcon, QrCode, SettingsIcon } from '../../Icons';

type Props = {
	className?: string,
	children?: React.Node
}

function AccelerateApp({className = "", children}: Props) {
	return (
		<section className={`accelerate-app-section ${className}`}>
			<Container style={{position: 'relative'}}>
				{children}
				<h2 className="section-title enlarged">Over 5,000 of the world’s
					best engineering teams use the Bugsnag platform to monitor
					app health and build better software</h2>
				<Row flex wrap className="accelerate-row">
					<Col tb={8} mdPush={0.1} md={3.9} sm={12} xsPush={1} xs={10}>
						<h2 className="section-title enlarged">Over 5,000 of the world’s best engineering teams use the Bugsnag </h2>
						<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
						<Link to={ROUTES.AUTH.USER_REGISTER} className="btn btn--getStarted">Get started</Link>
					</Col>
					<Col mdPush={1} md={6.9} xs={12}>
						<div className="accelerate">
							<div className="accelerate--item">
								<div className="icon"><QrCode/></div>
								<h3 className="section-title enlarged">Accelerate Turnaround Time</h3>
								<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
							</div>
							
							<div className="accelerate--item">
								<div className="icon"><SettingsIcon/></div>
								<h3 className="section-title enlarged">Accelerate Turnaround Time</h3>
								<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
							</div>
							
							<div className="accelerate--item">
								<div className="icon"><EyeIcon/></div>
								<h3 className="section-title enlarged">Accelerate Turnaround Time</h3>
								<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
							</div>
							
							<div className="accelerate--item">
								<div className="icon"><HeartIcon/></div>
								<h3 className="section-title enlarged">Accelerate Turnaround Time</h3>
								<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default AccelerateApp;