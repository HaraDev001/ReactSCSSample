//@flow
import { Field } from 'formik';
import * as React from 'react';
import { IMaskInput } from 'react-imask';

type Props = {
	name: string,
	className: string,
	placeholder: string,
	type: string,
	minLength?: number,
	style?: Object,
	mask?: string,
	lazy?: string,
	children?: React.Node
}

function FieldBig({ name, style = null, className, placeholder, type = 'text', minLength = null, children, mask = null, lazy = true, ...form }: Props) {
	const [focused, setFocus] = React.useState(false);
	return (
		<Field name={name}>
			{({ field, form: { touched, errors } }) => {
				const error = touched[field.name] && errors[field.name];
				return (
					<div
						className={`field ${className} ${error ? 'error' : ''}`} style={style}>
						<label htmlFor={`${name}_Input`} className="input-label">
							{children}
							{!mask ? (
								<input {...field}
								       name={name}
								       type={type}
								       onFocus={(e) => e.target.placeholder = ''}
								       onBlur={(e) => e.target.placeholder = placeholder}
								       placeholder={placeholder}
								       minLength={minLength}
								       id={`${name}_Input`}
								       onChange={(e) => {
									       form.handleChange(e)
								       }}/>
							) : (
								<React.Fragment>
									<IMaskInput
										{...field}
										name={name}
										mask={mask}
										lazy={lazy}
										onFocus={(e) => !lazy ? setFocus(true) : e.target.placeholder = ''}
										onBlur={(e) => !lazy && !field.value ? setFocus(false) : e.target.placeholder = placeholder}
										placeholder={placeholder}
										value={field.value}
										id={`${name}_Input`}
										onInput={(e) => form.handleChange(e)}
										className={focused ? 'focused' : ''}
									/>
									{!lazy && (
										<div className="placeholder">
											{placeholder}
										</div>
									)}
								</React.Fragment>
							)}
						</label>
						{error && <div
							className="error-message">{errors[field.name]}</div>}
					</div>
				)
			}}
		</Field>
	)
}

export default FieldBig;