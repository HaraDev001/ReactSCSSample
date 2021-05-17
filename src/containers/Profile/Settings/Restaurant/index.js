//@flow
import { Field, Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import { isNotUndefined } from '../../../../components/tools';

function Restaurant() {
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		if (isNotUndefined(values.fullName)) {
			if (values.fullName === "") {
				errors.fullName = required
			}
		}
		
		if (isNotUndefined(values.organisationName)) {
			if (values.organisationName === "") {
				errors.organisationName = required
			}
		}
		
		if (isNotUndefined(values.restaurantName)) {
			if (values.restaurantName === "") {
				errors.restaurantName = required
			}
		}
		
		if (isNotUndefined(values.restaurantAddress)) {
			if (values.restaurantAddress === "") {
				errors.restaurantAddress = required
			}
		}
		
		if (isNotUndefined(values.numberOfSeats)) {
			if (values.numberOfSeats === "") {
				errors.numberOfSeats = required
			}
			
			// if (number(values.numberOfSeats)) {
			// 	errors.numberOfSeats = "* Should be a number"
			// }
		}
		
		return errors;
	};
	
	const updateRestaurantInfo = (values, actions) => {
		setTimeout(() => {
			actions.setSubmitting(false);
			return alert('Saved !');
		}, 3000)
	};
	return (
		<Formik
			initialValues={{
				fullName: 'John Doe',
				organisationName: 'Placette LTD',
				restaurantName: "La Placette",
				restaurantAddress: "4 avenue Carnot, Paris France",
				currency: '€',
				numberOfSeats: "100-150"
			}}
			validate={(values) => validate(values)}
			onSubmit={(values, actions) => updateRestaurantInfo(values, actions)}
		>
			{form => (
				<form onSubmit={form.handleSubmit}>
					<fieldset>
						<FieldBig name="fullName" placeholder="Full Name" type="text" {...form}>
							<span className="item-label">Full Name</span>
						</FieldBig>
						<FieldBig name="organisationName" placeholder="Organisation name" type="text" {...form}>
							<span className="item-label">Organisation name</span>
						</FieldBig>
						
						<FieldBig name="restaurantName" placeholder="Name of the restaurant" type="text" {...form}>
							<span className="item-label">Name of the restaurant</span>
						</FieldBig>
						<FieldBig name="restaurantAddress" placeholder="Address of the restaurant" type="text" {...form}>
							<span className="item-label">Address of the restaurant</span>
						</FieldBig>
						
						<Field name="currency">
							{({ field, form: { touched, errors } }) => {
								const error = touched[field.name] && errors[field.name];
								let currency = [
									'€', '$', '£', '¥'
								];
								return (
									<div className="field">
										<span className="item-label">Currency</span>
										<label htmlFor="currency" className={`select-options ${error ? 'error' : ''}`}>
											<select name="currency" id="currency"
											        onChange={(e) => form.handleChange(e)}>
												{currency.map((item, index) => (
													<option value={item} key={index}>{item}</option>
												))}
											</select>
										</label>
										{error && <div className="error-message">{errors[field.name]}</div>}
									</div>
								)
							}}
						</Field>
						
						<Field name="numberOfSeats">
							{({ field, form: { touched, errors } }) => {
								const error = touched[field.name] && errors[field.name];
								let seats = [
									'5 - 30', '30 - 100', '100 - 150', '+150'
								];
								return (
									<div className="field">
										<span className="item-label">Number of seats</span>
										<label htmlFor="numberOfSeats" className={`select-options ${error ? 'error' : ''}`}>
											<select name="numberOfSeats" id="numberOfSeats"
											        onChange={(e) => form.handleChange(e)}>
												{seats.map((item, index) => (
													<option value={item} key={index}>{item}</option>
												))}
											</select>
										</label>
										{error && <div className="error-message">{errors[field.name]}</div>}
									</div>
								)
							}}
						</Field>
						
						<Button label="Save" isLoading={form.isSubmitting}/>
					</fieldset>
				</form>
			)}
		</Formik>
	)
}

export default Restaurant;