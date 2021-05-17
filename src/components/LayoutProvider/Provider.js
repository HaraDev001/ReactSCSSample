//@flow
import * as React from 'react';
import {LayoutContext} from "./";
import { Layout } from './';

type Props = {
	children: React.Node,
	value: Object
}

function LayoutProvider(props: Props){
	const [state, setState] = React.useState(props.value);
	const [blurBg, setBlurBg] = React.useState(false);
	
	const contextProps = {
		...state,
		setState,
		blurBg,
		setBlurBg
	};
	
	return (
		<LayoutContext.Provider value={contextProps}>
			<Layout>
				{props.children}
			</Layout>
		</LayoutContext.Provider>
	);
}

export {LayoutProvider};