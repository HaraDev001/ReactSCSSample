//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../routes';
import {Container} from '../../Grid';
import { BlackMarks, ProductHuntIcon } from '../../Icons';

function ProductHunt() {
	return (
		<section className={`product-hunt-section`}>
			<Container>
				<ProductHuntIcon/>
				
				<h2 className="section-title">Community management on
					demand <span role="img" aria-labelledby="palm">👋</span>
				</h2>
				<p className="section-subtitle">We give you a professional
					designer to help you with all of your creative needs. No
					interviews, no contracts, unlimited designs.</p>
				<Link to={ROUTES.AUTH.USER_REGISTER} className="btn btn--getStarted">Get started</Link>
				
				<div className="advantages">
					<div className="advantages--item">
						<BlackMarks/>
						<p className="section-subtitle">7 days money back guarantee</p>
					</div>
					
					<div className="advantages--item">
						<BlackMarks/>
						<p className="section-subtitle">Quick onboarding</p>
					</div>
					
					<div className="advantages--item">
						<BlackMarks/>
						<p className="section-subtitle">Cancel anytime</p>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default ProductHunt;