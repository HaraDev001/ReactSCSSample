//@flow
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../../components/Form/Button';
import FieldBig from '../../../../components/Form/Field';
import { isNotUndefined } from '../../../../components/tools';

function Passwords() {
	
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.currentPass)) {
			if (values.currentPass === "") {
				errors.currentPass = required
			}
		}
		
		if (isNotUndefined(values.newPass)) {
			if (values.newPass === "") {
				errors.newPass = required
			}
		}
		
		if (isNotUndefined(values.confirmNewPass)) {
			if (values.confirmNewPass === "") {
				errors.confirmNewPass = required
			}
		}
		
		return errors;
	};
	
	const updatePasswords = (values, actions) => {
		setTimeout(() => {
			actions.setSubmitting(false);
			return alert('Saved !');
		}, 3000)
	};
	return (
		<Formik
			initialValues={{
				currentPass: '',
				newPass: '',
				confirmNewPass: '',
			}}
			validate={(values) => validate(values)}
			onSubmit={(values, actions) => updatePasswords(values, actions)}
		>
			{form => (
				<form onSubmit={form.handleSubmit}>
					<fieldset>
						<FieldBig name="currentPass" placeholder="**************" type="password" {...form}>
							<span className="item-label">Current password</span>
						</FieldBig>
						<FieldBig name="newPass" placeholder="**************" type="password" {...form}>
							<span className="item-label">New password</span>
						</FieldBig>
						<FieldBig name="confirmNewPass" placeholder="**************" type="password" {...form}>
							<span className="item-label">New password confirmation</span>
						</FieldBig>
						
						<Button label="Save" isLoading={form.isSubmitting}/>
					</fieldset>
				</form>
			)}
		</Formik>
	)
}

export default Passwords;