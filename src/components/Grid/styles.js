import { css } from 'emotion';
import { percentage } from '../tools';

const config = {
	columns: 12,
	gutter: 30,
	maxWidth: 1680,
	layout: {
		xs: {
			breakpoint: 0,
			container: 570
		},
		sm: {
			breakpoint: 600,
			container: 570
		},
		tb: {
			breakpoint: 1024,
			container: 994
		},
		md: {
			breakpoint: 1270,
			container: 1080
		},
		lg: {
			breakpoint: 1330,
			container: 1250
		}
	}
};

export const clearFix = () => {
	return {
		'&:before, &:after': {
			content: "''",
			display: 'table',
		},
		'&:after': {
			clear: 'both',
		},
	};
};

export const containerStyles = css({
	marginRight: 'auto',
	marginLeft: 'auto',
	paddingLeft: config.gutter / 2,
	paddingRight: config.gutter / 2,
	'@media (max-width: 599px)': {
		width: 'calc(100% - 30px)',
	},
	'@media (min-width: 600px)': {
		width: '570px',
	},
	'@media (min-width: 1024px)': {
		width: '994px',
	},
	'@media (min-width: 1270px)': {
		width: '1080px',
	},
	'@media (min-width: 1370px)': {
		width: '1250px',
	},
	'&.fluid': {
		width: '100%',
	},
	...clearFix(),
});

export const rowStyles = css({
	position: 'relative',
	marginLeft: `-${config.gutter / 2}px`,
	marginRight: `-${config.gutter / 2}px`,
	'&.flex': {
		display: 'flex',
		'&.justify-between': {
			justifyContent: 'space-between'
		},
		'&.justify-center': {
			justifyContent: 'center'
		},
		'&.justify-around': {
			justifyContent: 'space-around'
		},
		'&.align-center': {
			alignItems: 'center'
		},
		'&.wrap': {
			flexWrap: 'wrap',
		}
	},
	'&.display-table': {
		display: 'table'
	},
	...clearFix(),
});

export const colWidths = value => {
	let style = {};

	if (value !== undefined) {
		style = Object.assign({}, style, {
			width: percentage(value, config.columns),
		});
	}

	return style;
};

export const colOffset = value => {
	let style = {};

	if (value !== undefined) {
		style = Object.assign({}, style, {
			marginLeft: percentage(value, config.columns),
		});
	}

	return style;
};

export const colPush = value => {
	let style = {};

	if (value !== undefined) {
		style = Object.assign({}, style, {
			left: percentage(value, config.columns),
		});
	}

	return style;
};

export const colPull = value => {
	let style = {};

	if (value !== undefined) {
		style = Object.assign({}, style, {
			right: percentage(value, config.columns),
		});
	}

	return style;
};

export const columnStyles = props => {
	return {
		position: 'relative',
		minHeight: '1px',
		paddingLeft: config.gutter / 2,
		paddingRight: config.gutter / 2,
		float: 'left',
		...colWidths(props.xs),
		...colOffset(props.xsOffset),
		...colPush(props.xsPush),
		...colPull(props.xsPull),
		'@media(max-width: 599px)': {
			paddingLeft: 0,
			paddingRight: 0,
		},
		'@media(min-width: 600px)': {
			...colWidths(props.sm),
			...colOffset(props.smOffset),
			...colPush(props.smPush),
			...colPull(props.smPull),
		},
		'@media(min-width: 1024px)': {
			...colWidths(props.tb),
			...colOffset(props.tbOffset),
			...colPush(props.tbPush),
			...colPull(props.tbPull),
		},
		'@media(min-width: 1270px)': {
			...colWidths(props.md),
			...colOffset(props.mdOffset),
			...colPush(props.mdPush),
			...colPull(props.mdPull),
		},
		'@media(min-width: 1370px)': {
			...colWidths(props.lg),
			...colOffset(props.lgOffset),
			...colPush(props.lgPush),
			...colPull(props.lgPull),
		},
	};
};
