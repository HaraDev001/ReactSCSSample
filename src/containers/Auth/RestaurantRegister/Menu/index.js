//@flow
import { navigate } from '@reach/router';
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import {
	isNotUndefined
} from '../../../../components/tools';
import { ROUTES } from '../../../../routes';
import IndivMedia from './indivMedia';

function Menu() {
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.categories)) {
			if (values.categories === "") {
				errors.categories = required
			}
		}
		
		if (isNotUndefined(values.nrDishesDrinks)) {
			if (values.nrDishesDrinks === "") {
				errors.nrDishesDrinks = required
			}
		}
		
		if (isNotUndefined(values.languages)) {
			if (values.languages === "") {
				errors.languages = required
			}
		}
		
		
		return errors;
	};
	
	const registerMenu = (values: Object, actions: Object) => {
		return navigate(ROUTES.AUTH.REGISTER_PLAN);
	};
	return (
		<React.Fragment>
			<h2 className={`section-title enlarged`}>Full Name, which social medias <br/> do you need ? It's the good time to launch <br/>new ones too ! </h2>
			<Formik
				initialValues={{
					categories: "",
					nrDishesDrinks: "",
					languages: ""
				}}
				validate={(values) => validate(values)}
				onSubmit={(values, actions) => registerMenu(values, actions)}
			>
				{form => (
					<form onSubmit={form.handleSubmit}>
						<fieldset>
							{/* <FieldBig name="categories" placeholder="How many categories there is in your menus ? (food, drinks, desserts, cocktails …)" type="text" {...form}/>
							<FieldBig name="nrDishesDrinks" placeholder="How many dishes & drinks there is in your menus ?" type="text" {...form}/>
							<FieldBig name="languages" placeholder="How many languages  do you want ?" type="text" {...form}/>
							<p className="section-subtitle select-languages">Available languages : Arabic, Chinese, English, French, German, Italian, Japanese, Portuguese, Russian, Turkish</p> */}
							<IndivMedia />
							<Button label="Next" isLoading={form.isSubmitting}/>
						</fieldset>
					</form>
				)}
			</Formik>
		</React.Fragment>
	)
}

export default Menu;