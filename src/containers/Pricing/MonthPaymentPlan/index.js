//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { Container } from '../../../components/Grid';
import { DotsDelimiters, GreenMark } from '../../../components/Icons';
import { withFadeEffect } from '../../../components/tools';

type Props = {
	fade: boolean
}

function MonthPaymentPlan({fade}: Props) {
	const [annual, setToggle] = React.useState(true);
	let plans = {
		annual: {
			standart: '59',
			essential: '99',
			premium: '199'
		},
		monthly: {
			standart: '79',
			essential: '129',
			premium: '219'
		}
	};
	return (
		<section className={`month-plan-section ${fade ? 'fade' : ''}`}>
			<Container style={{position: 'relative'}}>
				<div className="toggle-container">
					<span>Bill Monthly</span>
					<div className={`toggle ${annual ? 'annual' : ''}`} onClick={() => setToggle(t => !t)}><span/></div>
					<span>Bill Annually</span>
				</div>
				
				<div className="payment-plans">
					<div className="payment-plans--item">
						<div className="month-price"><span>${annual ? plans.annual.standart : plans.monthly.standart}</span>/month</div>
						<h2 className="type">Standard</h2>
						<p className="description">All the basics for businesses that are just getting started.</p>
						<hr/>
						<ul>
							<li><GreenMark/>Single project use</li>
							<li><GreenMark/>Basic dashboard</li>
						</ul>
						<Link to="/" className="btn btn--getPlan">Get standard</Link>
					</div>
					
					<div className="payment-plans--item">
						<div className="month-price"><span className="orange-color">${annual ? plans.annual.essential : plans.monthly.essential}</span>/month</div>
						<h2 className="type">Essential</h2>
						<p className="description">Better for growing businesses that want more customers.</p>
						<hr/>
						<ul>
							<li><GreenMark/>Unlimited project use</li>
							<li><GreenMark/>Advanced dashboard</li>
							<li><GreenMark/>All components included</li>
							<li><GreenMark/>Advanced insight</li>
						</ul>
						<Link to="/" className="btn btn--getPlan essencial">Get essential</Link>
					</div>
					
					<div className="payment-plans--item">
						<div className="month-price"><span>${annual ? plans.annual.premium : plans.monthly.premium}</span>/month</div>
						<h2 className="type">Premium</h2>
						<p className="description">Advanced features for pros who need more customization.</p>
						<hr/>
						<ul>
							<li><GreenMark/>Unlimited project use</li>
							<li><GreenMark/>Advanced dashboard</li>
							<li><GreenMark/>Mutlivariate components</li>
							<li><GreenMark/>Phone Support</li>
							<li><GreenMark/>Guaranteed 100% uptime</li>
							<li><GreenMark/>Unlimited users</li>
						</ul>
						<Link to="/" className="btn btn--getPlan">Get premium</Link>
					</div>
					
					<img src={require('../../../assets/img/pricing/decoration-circle.svg')} className={`decoration decoration--circle ${fade ? 'fade' : ''}`} alt="decoration"/>
				</div>
				<DotsDelimiters />
				
				<img src={require('../../../assets/img/pricing/decoration-left.svg')} className={`decoration decoration--left ${fade ? 'fade' : ''}`} alt="decoration"/>
				<img src={require('../../../assets/img/pricing/decoration-right.svg')} className={`decoration decoration--right ${fade ? 'fade' : ''}`} alt="decoration"/>
			</Container>
		</section>
	)
}

export default withFadeEffect(MonthPaymentPlan);