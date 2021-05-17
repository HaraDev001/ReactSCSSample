//@flow
import * as React from 'react';
import { Container } from '../../../components/Grid';
import { DotsDelimiters } from '../../../components/Icons';
import { withFadeEffect } from '../../../components/tools';

type Props = {
	fade: boolean
}
function AppInterface({fade}: Props) {
	return (
		<section className="app-interface-section">
			<Container style={{position: 'relative'}}>
				<img className={`screen-shot ${fade ? 'fadeInBottom' : ''}`}
				     src={require('../../../assets/img/product/app-preview.png')}
				     srcSet={`${require('../../../assets/img/product/app-preview-2x.png')} 2x`} alt="App Preview"/>
				<DotsDelimiters orange/>
				
				<h2 className="section-title enlarged">Over 5,000 of the world’s best engineering teams use the Bugsnag platform to monitor app health and build better software</h2>
				
				<img src={require('../../../assets/img/product/decoration-1.svg')} className={`decoration decoration--1 ${fade ? 'fade' : ''}`} alt="decoration"/>
				<img src={require('../../../assets/img/product/decoration-2.svg')} className={`decoration decoration--2 ${fade ? 'fade' : ''}`} alt="decoration"/>
			</Container>
		</section>
	)
}

export default withFadeEffect(AppInterface);