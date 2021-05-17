//@flow
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import { ItemSettings } from '../../../../components/Icons';
import { LayoutContext } from '../../../../components/LayoutProvider';
import {
	ClickOutside,
	Data, hideCardNumber,
	isNotUndefined
} from '../../../../components/tools';
import * as uuid from "uuid";

function Billing() {
	let currentBillingArr = [
		{
			id: uuid.v4(),
			cardNumber: '1234 1234 1234 5678',
			expirationDate: '12/2021',
			cvv: '1232454'
		}
	];
	
	const [billMethods, updateBillingMethods] = React.useState(currentBillingArr);
	
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
	
	const addMethod = (values, actions) => {
		let newMethod = {
			id: uuid.v4(),
			cardNumber: values.cardNumber,
			expirationDate: values.cardExpirationDate,
			cvv: values.cardCvv
		};
		
		setTimeout(() => {
			updateBillingMethods([
				...billMethods,
				newMethod
			]);
			
			actions.setSubmitting(false);
			actions.resetForm();
		}, 1000)
	};
	
	const removeMethod = (id) => {
		updateBillingMethods((bill) => bill.filter((item) => item.id !== id));
	};
	
	return (
		<div className="billing-block">
			{billMethods.length > 0 && (
				<React.Fragment>
					<span className="item-label">Current billing method</span>
					<div className="billing-methods">
						<Data data={billMethods}>
							{({item, index}) => (
								<BillingMethodItem key={index} removeMethod={() => removeMethod(item.id)} {...item}/>
							)}
						</Data>
					</div>
				</React.Fragment>
			)}
			
			<span className="item-label">Add new billing method</span>
			<Formik
				initialValues={{
					cardNumber: "",
					cardExpirationDate: "",
					cardCvv: ""
				}}
				validate={(values) => validate(values)}
				onSubmit={(values, actions) => addMethod(values, actions)}
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
							
							<div className="card-info">
								<FieldBig name="cardExpirationDate"
								          placeholder="Expiration MM/YY"
								          mask="00/2020"
								          className="small"
								          type="text" {...form}/>
								
								<FieldBig name="cardCvv" className="small" placeholder="CVV" type="password" {...form}/>
							</div>
							
							<Button label="Save" isLoading={form.isSubmitting}/>
						</fieldset>
					</form>
				)}
			</Formik>
		</div>
	)
}

const BillingMethodItem = React.memo(({cardNumber, removeMethod}) => {
	const state = React.useContext(LayoutContext);
	const [selected, selectToDelete] = React.useState(false);
	
	const toggleDropmenu = () => {
		state.setBlurBg(o => !o);
		selectToDelete(!selected);
	};
	
	const onClickedOutside = () => {
		if (selected) {
			return toggleDropmenu();
		}
	};
	
	return (
		<ClickOutside clickedOutside={onClickedOutside}>
			{({innerRef}) => (
				<div ref={innerRef} className={`billing-methods-item ${selected ? 'selected' : ''}`}>
					<span className="number">{hideCardNumber(cardNumber)}</span>
					<button type="button" className="btn settings" onClick={() => toggleDropmenu()}><ItemSettings/></button>
					<button type="button" className="btn btn--delete" onClick={() => {
						toggleDropmenu();
						return removeMethod()
					}}>Delete</button>
				</div>
			)}
		</ClickOutside>
	)
});

export default Billing;