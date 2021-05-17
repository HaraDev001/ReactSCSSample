// @flow
import * as React from 'react';
import { css } from 'emotion';
import { set } from '../tools';
import { columnStyles } from './styles';

type ColTypes = {
	xs?: number,
	xsOffset?: number,
	xsPull?: number,
	xsPush?: number,
	sm?: number,
	smOffset?: number,
	smPull?: number,
	smPush?: number,
	tb?: number,
	tbOffset?: number,
	tbPull?: number,
	tbPush?: number,
	md?: number,
	mdOffset?: number,
	mdPull?: number,
	mdPush?: number,
	lg?: number,
	lgOffset?: number,
	lgPull?: number,
	lgPush?: number,
	xl?: number,
	xlOffset?: number,
	xlPull?: number,
	xlPush?: number,
	className?: string,
	children: any,
	style?: any
};

export default class Col extends React.Component<ColTypes> {
	render() {
		const {className, children, style} = this.props;

		return (
			<div
				className={`col ${css(columnStyles(this.props))} ${set(className)}`}
				style={style}
			>
				{children}
			</div>
		);
	}
}
