//@flow
import * as React from 'react';
import {Container} from '../../../components/Grid';
import { DotsDelimiters } from '../../../components/Icons';
import { withFadeEffect } from '../../../components/tools';

type Props = {
	fade: boolean
}
function PersonalProfilePreview({fade}: Props) {
	return (
		<section className="personal-profile-preview">
			<Container>
				<img className={`screen-shot ${fade ? 'fadeInBottom' : ''}`} src={require('../../../assets/img/home/profile-preview.svg')} alt="Personal Profile Preview"/>
				<DotsDelimiters />
			</Container>
			<img className="orange-shape" src={require('../../../assets/img/home/shape.svg')} alt="orange-shape"/>
		</section>
	)
}

export default withFadeEffect(PersonalProfilePreview);