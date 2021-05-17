//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../routes';
import { Col, Container, Row } from '../../Grid';
import { PlayIcon } from '../../Icons';

function VideoPresentation() {
	const location = window.location.pathname === ROUTES.PRODUCT;
	return (
		<section className="video-presentation-section">
			<img src={require(`../../../assets/img/common/${location ? 'rectangle-top-2' : 'rectangle-top'}.png`)} className="rectangle-top" alt="rectangle-top"/>
			<img src={require('../../../assets/img/common/rectangle-bottom.png')} className="rectangle-bottom" alt="rectangle-bottom"/>
			<Container>
				<Row flex wrap>
					<Col tbPush={0.1} tb={5.9} xs={12}>
						<div className="video-player" style={{backgroundImage: `url(${require('../../../assets/img/common/video-bg.jpg')})`}}>
							<a href="https://www.youtube.com/?gl=EN&hl=en" rel="noopener noreferrer" target="_blank" className="play-button">
								<PlayIcon/>
							</a>
						</div>
					</Col>
					<Col tbPush={0.1} tb={5.9} xs={12}>
						<div className="content">
							<span className="item-label">Reinvent How You Communicate</span>
							<h2 className="section-title white">Our Design process <span role="img" aria-labelledby="palm">👋</span></h2>
							<p className="section-subtitle white">
								We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.
							</p>
							<Link to={ROUTES.AUTH.USER_REGISTER} className="btn btn--getStarted white">Get started</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default VideoPresentation;