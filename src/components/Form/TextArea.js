//@flow
import * as React from 'react';
import { Field } from 'formik';

type TextAreaProps = {
	name: string,
	placeholder: string
}

function TextArea({ name, placeholder, ...form }: TextAreaProps) {
	return (
		<Field name={name}>
			{({ field, form: { touched, errors } }) => {
				const error = touched[field.name] && errors[field.name];
				return (
					<div
						className={`field ${error ? 'error' : ''}`}>
						<label htmlFor={`${name}_Input`}
						       className="input-label">
							<textarea {...field}
							          name={name}
							          onFocus={(e) => e.target.placeholder = ''}
							          onBlur={(e) => e.target.placeholder = placeholder}
							          placeholder={placeholder}
							          id={`${name}_Input`}
							          onChange={(e) => {
								          form.handleChange(e)
							          }}/>
						</label>
						{error && <div
							className="error-message">{errors[field.name]}</div>}
					</div>
				)
			}}
		</Field>
	)
}

export default TextArea;