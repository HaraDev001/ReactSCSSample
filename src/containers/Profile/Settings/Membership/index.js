//@flow
import * as React from 'react';
import { GreenMark } from '../../../../components/Icons';
import * as uuid from "uuid";
import { Data } from '../../../../components/tools';

function Memberships() {
	let plansArr = [
		{
			id: uuid.v4(),
			name: 'Standart',
			price: '79',
			advantages: [
				'Single project use',
				'Basic dashboard'
			]
		},
		{
			id: uuid.v4(),
			name: 'Essential',
			price: '129',
			advantages: [
				'Unlimited project use',
				'Advanced dashboard',
				'All components included',
				'Advanced insight'
			]
		},
		{
			id: uuid.v4(),
			name: 'Premium',
			price: '219',
			advantages: [
				'Unlimited project use',
				'Advanced dashboard',
				'Mutlivariate components',
				'Phone Support',
				'Guaranteed 100% uptime',
				'Unlimited users'
			]
		}
	];
	
	const [plans] = React.useState(plansArr);
	const [selectedPlanId, selectPlan] = React.useState(plans[0].id);
	const [isLoading, setIsLoading] = React.useState(false);
	
	const saveSelectedPlan = () => {
		setIsLoading(true);
		
		setTimeout(() => {
			setIsLoading(false);
			alert("Saved !")
		}, 3000)
	};
	
	return (
		<React.Fragment>
			<span className="item-label">Upgrade your plan</span>
			<div className={`payment-plans`}>
				<Data data={plans}>
					{({item: {price, name, advantages, id}, index}) => {
						let selected = selectedPlanId && selectedPlanId === id;
						return (
							<div key={index} className={`payment-plans--item ${selected ? 'selected' : ''}`}>
								<div className="month-price"><span>${price}</span>/month</div>
								<h2 className="type">{name}</h2>
								<hr/>
								<ul>
									{advantages.map((item, index) => (<li key={index}><GreenMark/>{item}</li>))}
								</ul>
								<button type="button"
								        className="btn btn--getPlan" onClick={() => selectPlan(id)}>{selected ? "You have" : "Choose"} {name}</button>
							</div>
						)
					}}
				</Data>
			</div>
			
			<button className={`btn btn--getStarted ${isLoading ? 'loading-btn' : ''}`}
			        disabled={isLoading} type="button"
			        onClick={() => saveSelectedPlan()}>
				Save
				<span className="load-item">
						<span/>
					</span>
			</button>
		</React.Fragment>
	)
}

export default Memberships;