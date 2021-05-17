//@flow
import { navigate } from '@reach/router';
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import {
	isNotUndefined,
	//number,
	withFadeEffect
} from '../../../../components/tools';
import { ROUTES } from '../../../../routes';

type Props = {
	fade: boolean
}

function Restaurant({fade}: Props) {
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
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
	
	const registerRestaurant = () => {
		return navigate(ROUTES.AUTH.REGISTER_MENU);
	};
	return (
		<React.Fragment>
			<h2 className={`section-title enlarged ${fade ? 'fadeInBottom' : ''}`}>Full Name, let's tell us <br/> a little bit more about <br/>Company name </h2>
			<Formik
				initialValues={{
					restaurantName: "",
					restaurantAddress: "",
					numberOfSeats: ""
				}}
				validate={(values) => validate(values)}
				onSubmit={(values, actions) => registerRestaurant(values, actions)}
			>
				{form => (
					<form onSubmit={form.handleSubmit}>
						<fieldset>
							
							{/*TODO: textarea*/}
							<FieldBig name="restaurantName" placeholder="Tell us shortly what you do please. what is your business about?" type="text" {...form}/>
							<FieldBig name="restaurantAddress" placeholder="Describe your client / target audience" type="text" {...form}/>
							
							{/*TODO: should be a select*/}
							<FieldBig name="numberOfSeats" placeholder="Please copy paste here all your social medias links" type="text" {...form}/>
							<Button label="Next" isLoading={form.isSubmitting}/>
						</fieldset>
					</form>
				)}
			</Formik>
		</React.Fragment>
	)
}

export default withFadeEffect(Restaurant);