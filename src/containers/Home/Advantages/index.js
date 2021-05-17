//@flow
import * as React from 'react';
import Collapse from '../../../components/Collapse';
import { Col, Container, Row } from '../../../components/Grid';
import { ClickOutside } from '../../../components/tools';

function Advantages() {
	return (
		<section className="advantages-section orange">
			<Container>
				<Row flex wrap alignCenter>
					<Col tbPush={2.5} tb={6} mdPush={0.1} md={5.9}>
						<Item active className="_1" title="Over 5,000 of the world’s best engineering teams use the Bugsnag "
						      description="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.">
							<svg xmlns="http://www.w3.org/2000/svg" width="617.435" height="22.851" viewBox="0 0 617.435 22.851">
								<path id="Path_509" data-name="Path 509" d="M47.648,2273.132s530.144-6.809,617.135-18.87" transform="translate(-47.622 -2252.281)" fill="none" stroke="#000" strokeWidth="4"/>
							</svg>
						</Item>
						
						<Item className="_2" title="Over 5,000 of the world’s best"
						      description="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.">
							<svg xmlns="http://www.w3.org/2000/svg" width="574.399" height="25.449" viewBox="0 0 574.399 25.449">
								<path id="Path_510" data-name="Path 510" d="M107.316,2273.567s101-34.118,573.684-16.37" transform="translate(-106.676 -2250.012)" fill="none" stroke="#000" strokeWidth="4"/>
							</svg>
						</Item>
						
						<Item className="_3" title="Over 5,000 of the world’s best"
						      description="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs.">
							<svg xmlns="http://www.w3.org/2000/svg" width="647.363" height="74.194" viewBox="0 0 647.363 74.194">
								<path id="Path_511" data-name="Path 511" d="M103.514,2232.708s114.939,15.358,363.443,24.489c87.124,3.2,146.058-4.6,283.132,0" transform="matrix(0.998, -0.07, 0.07, 0.998, -258.605, -2172.964)" fill="none" stroke="#000" strokeWidth="4"/>
							</svg>
						</Item>
					</Col>
					<Col mdPush={0.1} md={5.9} xs={12}>
						<img src={require('../../../assets/img/common/profile-preview-large.svg')} alt="profile-preview"/>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

type Props = {
	title: string,
	description: string,
	className: string,
	children: React.Node,
	active?: boolean
}

function Item({ title, description, children, className, active = false }: Props) {
	const [opened, setOpen] = React.useState(active);
	
	const onClickedOutside = () => {
		if (opened) {
			return setOpen(false);
		}
	};
	return (
		<ClickOutside clickedOutside={onClickedOutside}>
			{({ innerRef }) => (
				<div ref={innerRef} className={`advantage-item ${className}`}>
					<h3 className="section-title enlarged" onClick={() => setOpen(!opened)}>
						{title}
					</h3>
					<Collapse
						in={opened}
						withParent={false}
					>
						<p className="section-subtitle">
							{description}
						</p>
					</Collapse>
					{children}
				</div>
			)}
		</ClickOutside>
	)
}

export default Advantages;