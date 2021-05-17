//@flow
import * as React from 'react';
import {Container, Row, Col} from '../../../components/Grid';
import { BlackMarks } from '../../../components/Icons';

function TheProcess() {
	return (
		<section className="the-process-section">
			<Container>
				<Row flex wrap alignCenter>
					<Col tbPush={0.1} tb={5.9} xs={12}>
						<span className="item-label orange-color">How we approach</span>
						<h2 className="section-title enlarged">Over 5,000 of the world’s best engineering teams use the Bugsnag </h2>
						<p className="section-subtitle">
							We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.
						</p>
						<div className="advantages">
							<div className="advantages--item">
								<BlackMarks/>
								<p className="section-subtitle">Cancel anytime</p>
							</div>
							
							<div className="advantages--item">
								<BlackMarks/>
								<p className="section-subtitle">Cancel anytime</p>
							</div>
							
							<div className="advantages--item">
								<BlackMarks/>
								<p className="section-subtitle">Cancel anytime</p>
							</div>
						</div>
					</Col>
					<Col tb={5.9} xs={12}>
						<img src={require('../../../assets/img/common/profile-preview-large.svg')} alt="profile-preview"/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default TheProcess;