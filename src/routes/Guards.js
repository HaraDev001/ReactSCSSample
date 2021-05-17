//@flow
import * as React from 'react';

type Props = {
	component: Object
}
export class DefaultGuard extends React.Component<Props, {}>{
	render(){
		const {component: Component, ...rest} = this.props;
		
		return (
			<Component {...rest}/>
		)
	}
}