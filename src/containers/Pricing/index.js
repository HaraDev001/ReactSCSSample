//@flow
import * as React from 'react';
import { Consume } from '../../components/LayoutProvider';
import AccelerateApp from '../../components/ReusableSections/AccelerateApp';
import Faq from '../../components/ReusableSections/Faq';
import ProductHunt from '../../components/ReusableSections/ProductHunt';
import MonthPaymentPlan from './MonthPaymentPlan';


function Pricing() {
	let faq = [
		{
			question: 'How do I pay for the Essentials or Premium plan?',
			answer: 'You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
		},
		{
			question: 'Can I cancel my Essentials or Premium plan subscription at any time?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi explicabo ipsum? Adipisci aspernatur debitis dignissimos dolore expedita illum laborum'
		},
		{
			question: 'We need to add new users to our team. How will that be billed?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi explicabo ipsum? Adipisci aspernatur debitis dignissimos dolore expedita illum laborum'
		},
		{
			question: 'My team wants to cancel its subscription. How do we do that? Can we get a refund?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi explicabo ipsum? Adipisci aspernatur debitis dignissimos dolore expedita illum laborum'
		},
		{
			question: 'Do you offer discounts for non-profit organizations or educational institutions?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem excepturi explicabo ipsum? Adipisci aspernatur debitis dignissimos dolore expedita illum laborum'
		}
	];
	return (
		<Consume consume={{
			title: 'TRANSLEAT | PRICING',
			classNameLayout: 'pricing-page',
			isAuthenticated: false,
			withFooter: true,
			withNav: true,
			withHeader: true
		}}>
			<ProductHunt/>
			<MonthPaymentPlan/>
			<AccelerateApp/>
			<Faq faq={faq}/>
		</Consume>
	)
}

export default Pricing;