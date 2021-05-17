//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { GreenMark } from '../../../../components/Icons';
import { ROUTES } from '../../../../routes';

function SelectPlan() {
	return (
		<React.Fragment>
			<h2 className={`section-title enlarged`}>According to your selection, <br/> you need one of these plan.<br /> </h2>
			<div className={`payment-plans`}>
				<div className="payment-plans--item selected">
					<div className="month-price"><span>$99</span>/7 days trial</div><div className="month-price">then $399/month</div>
					<h2 className="type">Essential</h2>
					<hr/>
					<ul>
						<li><GreenMark/>Unlimited project use</li>
						<li><GreenMark/>Advanced dashboard</li>
						<li><GreenMark/>All components included</li>
						<li><GreenMark/>Advanced insight</li>
					</ul>
					<Link to={ROUTES.AUTH.REGISTER_PAYMENT} className="btn btn--getPlan">Choose essential</Link>
				</div>
				
				<div className="payment-plans--item">
					<div className="month-price"><span>$199</span>/7 days trial</div><div className="month-price">then $899/month</div>
					<h2 className="type">Premium</h2>
					<hr/>
					<ul>
						<li><GreenMark/>Unlimited project use</li>
						<li><GreenMark/>Advanced dashboard</li>
						<li><GreenMark/>Mutlivariate components</li>
						<li><GreenMark/>Phone Support</li>
						<li><GreenMark/>Guaranteed 100% uptime</li>
						<li><GreenMark/>Unlimited users</li>
					</ul>
					<Link to={ROUTES.AUTH.REGISTER_PAYMENT} className="btn btn--getPlan">Choose premium</Link>
				</div>
				
			</div>
		</React.Fragment>
	)
}

export default SelectPlan;