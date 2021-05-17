//@flow
import { css } from 'emotion';
import * as React from 'react';
import Transition, { ENTERED, ENTERING, EXITED, EXITING, } from 'react-transition-group/Transition';
import { set } from '../tools';

type CollapseProps = {
	in: boolean,
	timeout?: number,
	renderButton?: React.Node,
	children: React.Node,
	className?: string,
	withParent?: boolean,
	parentClassName?: string,
};

/**
 * @property {boolean} in determines if button is a Link for button (emphasized)
 * @property {number} {optional} timeout is for href url (emphasized)
 * @property {node} {optional} renderButton determines the object for styling (emphasized)
 * @property {string} {optional} className is the button text (emphasized)
 * @property {boolean} {optional} withParent determines button alternative class (emphasized)
 * @property {string} {optional} parentClassName is for button action (emphasized)
 */

const collapseStyles = {
	[EXITED]: 'collapse',
	[EXITING]: 'collapsing',
	[ENTERING]: 'collapsing',
	[ENTERED]: 'collapse in',
};

const collapseStyle = css({
	'&.collapse': {
		display: 'none',

		'&.in': {
			display: 'block',
		},
	},
	'&.collapsing': {
		position: 'relative',
		height: 0,
		overflow: 'hidden',
		transitionProperty: 'height,visibility',
		WebkitTransitionDuration: '.35s',
		transitionDuration: '.35s',
		WebkitTransitionTimingFunction: 'ease',
		transitionTimingFunction: 'ease',
	},
});

class Collapse extends React.Component<CollapseProps> {
	collapse = React.createRef(); // $FlowFixMe

	static defaultProps = {
		in: false,
		timeout: 300,
	};

	getDimensionValue = () => {
		if (this.collapse.current !== null) {
			return (
				parseInt(this.collapse.current.offsetHeight, 10) +
				parseInt(
					//$FlowFixMe
					this.collapse.current.style.marginTop.length > 0
						//$FlowFixMe
						? this.collapse.current.style.marginTop
						: 0,
					10,
				) +
				parseInt(
					//$FlowFixMe
					this.collapse.current.style.marginBottom
						? this.collapse.current.style.marginBottom
						: 0,
					10,
				)
			);
		}
		return 0;
	};

	handleInit = () => {
		if (this.collapse.current !== null) {
			this.collapse.current.style.height = '0';
		}
	};

	handleEntering = () => {
		if (this.collapse.current !== null) {
			this.collapse.current.style.height = `${this.collapse.current
				.scrollHeight}px`;
		}
	};

	handleEntered = () => {
		if (this.collapse.current !== null) {
			this.collapse.current.style.height = null;
		}
	};

	handleExit = () => {
		if (this.collapse.current !== null) {
			//$FlowFixMe
			this.collapse.current.style.height = `${this.getDimensionValue()}px`;
			//$FlowFixMe
			this.collapse.current.offsetHeight; // eslint-disable-line no-unused-expressions
		}
	};

	renderWithParent = (p: CollapseProps) => {
		const {
			renderButton,
			children,
			className,
			parentClassName,
			...props
		} = p;
		return (
			<div className={`collapse-block ${set(parentClassName)}`}>
				{renderButton}
				<Transition
					{...props}
					aria-expanded={props.in}
					onEnter={this.handleInit}
					onEntering={this.handleEntering}
					onEntered={this.handleEntered}
					onExit={this.handleExit}
					onExiting={this.handleInit}
				>
					{state => (
						<div
							ref={this.collapse}
							className={`${collapseStyles[state]}
                                ${set(className)} ${collapseStyle}`}
						>
							{children}
						</div>
					)}
				</Transition>
			</div>
		);
	};

	renderWithoutParent = (p: CollapseProps) => {
		const {children, className, ...props} = p;
		return (
			<Transition
				{...props}
				aria-expanded={props.in}
				onEnter={this.handleInit}
				onEntering={this.handleEntering}
				onEntered={this.handleEntered}
				onExit={this.handleExit}
				onExiting={this.handleInit}
			>
				{state => (
					<div
						ref={this.collapse}
						className={`${collapseStyles[state]}
                                ${set(className)} ${collapseStyle}`}
					>
						{children}
					</div>
				)}
			</Transition>
		);
	};

	render() {
		const {withParent, ...props} = this.props;
		return withParent
			//$FlowFixMe
			? this.renderWithParent(props)
			//$FlowFixMe
			: this.renderWithoutParent(props);
	}
}

export default Collapse;