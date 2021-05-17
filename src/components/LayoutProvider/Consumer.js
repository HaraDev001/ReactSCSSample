//@flow
import * as React from 'react';
import { LayoutContext } from "./Context";

const isEqual = require("react-fast-compare");

type Props = {
	consume: any,
	children: React.Node
}

class Consume extends React.Component<Props> {
	
	static contextType = LayoutContext;
	
	componentDidMount() {
		this.updateState();
	}
	
	componentDidUpdate(prevProps: Props) {
		if (!isEqual(this.props.consume, prevProps.consume)) {
			this.updateState();
		}
	}
	
	updateState = () => {
		const {consume} = this.props;
		return this.context.setState((prevState) => ({...prevState, ...consume}))
	};
	
	render() {
		return this.props.children
	}
}

const LayoutConsumer = LayoutContext.Consumer;

export { LayoutConsumer, Consume };