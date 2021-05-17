// @flow
import * as React from 'react';
import { set } from '../tools';
import { containerStyles } from './styles';

type ContainerTypes = {
	className?: string,
	fluid?: boolean,
	children: any,
	style?: any
};

export default class Container extends React.Component<ContainerTypes> {
	render() {
		const {className, children, fluid, style} = this.props;
		return (
			<div style={style} className={`container ${set(className)} ${containerStyles} ${fluid ? 'fluid' : ''}`}>
				{children}
			</div>
		);
	}
}