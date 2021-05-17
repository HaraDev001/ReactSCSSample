// @flow
import * as React from 'react';
import { set } from '../tools';
import { rowStyles } from './styles';

type RowTypes = {
	className?: string,
	flex?: boolean,
	justifyBetween?: boolean,
	justifyCenter?: boolean,
	justifyAround?: boolean,
	alignCenter?: boolean,
	wrap?: boolean,
	table?: boolean,
	children: any,
};

export default class Row extends React.Component<RowTypes> {
	render() {
		const { className, children, flex, justifyBetween, justifyCenter, justifyAround, alignCenter, wrap, table } = this.props;
		return (
			<div
				className={`row ${rowStyles} ${set(className)}
					${flex ? 'flex' : ''}
					${justifyBetween ? 'justify-between' : ''}
					${justifyCenter ? 'justify-center' : ''}
					${justifyAround ? 'justify-around' : ''}
					${alignCenter ? 'align-center' : ''}
					${wrap ? 'wrap' : ''}
					${table ? 'display-table' : ''}
				`}
			>
				{children}
			</div>
		);
	}
}
