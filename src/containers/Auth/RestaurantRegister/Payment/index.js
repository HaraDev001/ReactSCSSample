//@flow
import { navigate } from '@reach/router';
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import { BlackMarks } from '../../../../components/Icons';
import {
	isNotUndefined
} from '../../../../components/tools';
import { ROUTES } from '../../../../routes';

function Payment() {
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.cardNumber)) {
			if (values.cardNumber === "") {
				errors.cardNumber = required
			}
			
			if (values.cardNumber.length < 19) {
				errors.cardNumber = "* Invalid card number"
			}
		}
		
		if (isNotUndefined(values.cardExpirationDate)) {
			let split = values.cardExpirationDate.split('/');
			let currentYear = new Date().getFullYear();
			let currentMonth = new Date().getMonth()+1;
			
			if (values.cardExpirationDate === "") {
				errors.cardExpirationDate = required
			}
			
			if (Number(split[0]) > 12){
				errors.cardExpirationDate = "* Is not valid Month"
			}
			
			if (split[1] && (Number(split[1]) < currentYear)){
				errors.cardExpirationDate = "* Is not valid Year"
			}
			
			if ( (Number(split[1]) === currentYear) && (Number(split[0]) <= currentMonth)){
				errors.cardExpirationDate = "* Your card is expired"
			}
		}
		
		if (isNotUndefined(values.cardCvv)) {
			if (values.cardCvv === "") {
				errors.cardCvv = required
			}
			
			if (values.cardCvv.length < 3) {
				errors.cardCvv = "* Not less than 3 characters"
			}
		}
		
		return errors;
	};
	
	const registerPayment = (values: Object, actions: Object) => {
		return navigate(ROUTES.PROFILE.DASHBOARD);
	};
	return (
		<React.Fragment>
			<h2 className={`section-title enlarged`}>Over 5,000 of the <br/> world’s best engineering <br/>teams use the Bugsnag </h2>
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
			<Formik
				initialValues={{
					cardNumber: "",
					cardExpirationDate: "",
					cardCvv: ""
				}}
				validate={(values) => validate(values)}
				onSubmit={(values, actions) => registerPayment(values, actions)}
			>
				{form => (
					<form onSubmit={form.handleSubmit}>
						<fieldset>
							<FieldBig name="cardNumber"
							          placeholder="Card Number"
							          mask="0000 0000 0000 0000"
							          type="text"
							          {...form}
							/>
							<FieldBig name="cardExpirationDate"
							          placeholder="Expiration MM/YY"
							          mask="00/2020"
							          className="small"
							          type="text" {...form}/>
							<FieldBig name="cardCvv" className="small" placeholder="CVV" type="password" {...form}/>
							<Button label="Create Account" className="create-restaurant" isLoading={form.isSubmitting}/>
						</fieldset>
					</form>
				)}
			</Formik>
		</React.Fragment>
	)
}

export default Payment;