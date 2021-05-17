//@flow
import { Link, navigate } from '@reach/router';
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../components/Form/Button';
import FieldBig from '../../../components/Form/Field';
import Container from '../../../components/Grid/Container';
import { DotsDelimiters } from '../../../components/Icons';
import { LayoutContext } from '../../../components/LayoutProvider';
import Logo from '../../../components/LayoutProvider/components/Logo';
import {
	email,
	isNotUndefined,
	withFadeEffect
} from '../../../components/tools';
import { ROUTES } from '../../../routes';

type Props = {
	fade: boolean
}

function UserRegister({fade}: Props) {
	const state = React.useContext(LayoutContext);
	const location = window.location.pathname;
	
	React.useEffect(() => {
		state.setState({
			...state,
			title: 'TRANSLEAT | AUTH',
			classNameLayout: 'auth-page',
			isAuthenticated: false,
			withFooter: false,
			withNav: false,
			withHeader: false
		});
	}, [location]);
	
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.email)) {
			if (values.email === "") {
				errors.email = required
			}
			
			if (email(values.email)) {
				errors.email = "* Please enter a valid email."
			}
		}
		
		if (isNotUndefined(values.fullName)) {
			if (values.fullName === "") {
				errors.fullName = required
			}
		}
		
		if (isNotUndefined(values.campanyName)) {
			if (values.campanyName === "") {
				errors.campanyName = required
			}
		}
		
		if (isNotUndefined(values.password)) {
			if (values.password === "") {
				errors.password = required
			}
		}
		
		
		return errors;
	};
	
	const registerUser = () => {
		return navigate(ROUTES.AUTH.REGISTER_RESTAURANT);
	};
	
	return (
		<section className="user-register-section">
			<span className={`orange-bg orange ${fade ? 'fade' : ''}`}/>
			<Container>
				<div className="register-header">
					{/* <Logo white/> */}
					{/* <DotsDelimiters/>
					<Logo className="register_logo"/> */}
					<p className="already-have-account register_already">
						<span>Having troubles to register ?</span>
						<Link to="/">Get help</Link>
					</p>
				</div>
			</Container>
			<div className="form-container">
				<Logo/><br /><br />
				<h2 className="section-title">Happy to see you again <span role="img" aria-labelledby="palm">👋</span></h2>
				<p className="section-subtitle">We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.</p>
				<Formik
					initialValues={{
						email: "",
						fullName: "",
						campanyName: "",
						password: ""
					}}
					validate={(values) => validate(values)}
					onSubmit={(values, actions) => registerUser(values, actions)}
				>
					{form => (
						<form onSubmit={form.handleSubmit}>
							<fieldset>
								<FieldBig name="email" placeholder="Email" type="email" {...form}/>
								<FieldBig name="fullName" placeholder="Your full name" type="text" {...form}/>
								<FieldBig name="campanyName" placeholder="Your company or organization name" type="text" {...form}/>
								<FieldBig name="password" placeholder="Password ( 6+ characters )" minLength={6} type="password" {...form}/>
								<Button label="Create Account" isLoading={form.isSubmitting}/>
								
								<p className="agreement">
									By clicking the button, you agree to our <a href={ROUTES.TERMS} target="_blank" rel="noopener noreferrer" className="policy_font_color"> Terms of Service </a> and have read and acknowledge our <a href={ROUTES.PRIVACY} target="_blank" rel="noopener noreferrer"> Privacy Policy</a>.
								</p>
								<br /><br /><br />
								<p className="already-have-account">
									Already have an account ?
									<Link to={ROUTES.AUTH.LOGIN}>Login</Link>
								</p>
							</fieldset>							
						</form>
					)}
				</Formik>
			</div>
		</section>
	)
}

export default withFadeEffect(UserRegister)