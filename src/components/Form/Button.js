//@flow
import * as React from 'react';

type Props = {
	isLoading?: boolean,
	className?: string,
	label: string
}
function Button({ isLoading, className, label }: Props) {
	return (
		<button className={`btn btn--getStarted ${className} ${isLoading ? 'loading-btn' : ''}`}
		        disabled={isLoading} type="submit">
			{label}
			
			<span className="load-item">
				<span/>
			</span>
		</button>
	)
}

export default Button;