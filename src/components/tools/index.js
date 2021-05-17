//@flow
import { Link } from '@reach/router';
import * as React from "react";
export * from './fns';

type DataProps = {
	data: any,
	children: Object => React.Node
}

export class Data extends React.Component<DataProps> {
	render() {
		const {data, children} = this.props;
		
		if (!data) {
			return null;
		}
		
		if (Object.prototype.toString.call(data) === "[object Array]") {
			return data.map((item: Object, index: number) => children({item: item, index: index}))
		}
		
		if (Object.prototype.toString.call(data) === "[object Object]") {
			return Object.entries(data).map<Object>(([k: string, v], index: number) => children({item: [k, v], index: index}))
		}
		
		return null;
	}
}

// ClickOutsideProps
type ClickOutsideProps = {
	clickedOutside: (e: Event) => void;
	children: any => React.Node
}

export class ClickOutside extends React.Component<ClickOutsideProps> {
	
	 node: React.ElementRef<any> = React.createRef();
	
	componentDidMount() {
		document.addEventListener('click', this.outsideClickHandler, true);
	};
	
	componentWillUnmount() {
		document.removeEventListener('click', this.outsideClickHandler, true);
	};
	
	outsideClickHandler = (e: Event): void => {
		const domNode = this.node.current;
		
		if (domNode !== null && !domNode.contains(e.target)) {
			const {clickedOutside} = this.props;
			clickedOutside(e);
		}
	};
	
	render() {
		return this.props.children({
			innerRef: this.node
		});
	}
}

export function withFadeEffect(Component: React.ComponentType<any>) {
	function Enhancer(props: Object) {
		const [fade, setEffect] = React.useState(false);
		const location = window.location.pathname;
		React.useEffect(() => {
			setEffect((f) => !f);
			return () => {
				setEffect(false)
			}
		}, [location]);
		
		return <Component fade={fade} {...props}/>
	}
	Enhancer.displayName = `withFadeEffect(${Component.displayName || Component.name})`;
	
	return Enhancer;
}

type ActiveLinkProps = {
	children: React.Node,
	isActive?: boolean
}
export const ActiveLink = React.memo<ActiveLinkProps>(({children, isActive = false, ...props}) => (
	<Link {...props} getProps={({isCurrent}) => {
		return {
			className: isCurrent || isActive ? 'active' : ''
		};
	}}>
		{children}
	</Link>
));