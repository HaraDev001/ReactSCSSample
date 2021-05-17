//@flow
import { Link } from '@reach/router';
import * as React from 'react';
import { ROUTES } from '../../../routes';
import {Container, Row, Col} from '../../Grid';

type Props = {
	img: string,
	title: string,
	subtitle: string,
	label: string,
	direction?: string,
	className?: string,
	labelOrange?: boolean,
	children?: React.Node
}

function BlockContent({img, title, subtitle, label, className = "", children, labelOrange = false, direction = 'ltr'}: Props) {
	return (
		<section className={`block-content-section ${className} ${direction === 'ltr' ? 'ltr' : 'rtl'}`}>
			<Container style={{position: 'relative'}}>
				{children}
				<Row flex wrap>
					<Col tbPush={0.1} tb={5.9} xs={12} style={{order: direction === 'ltr' ? 1 : 2}}>
						<div className="block__content__image" style={{backgroundImage: `url(${img})`}}/>
					</Col>
					<Col tb={5.9} xs={12} style={{order: direction === 'ltr' ? 2 : 1}}>
						<div className={`block__content `}>
							<span className={`item-label ${labelOrange ? 'orange-color' : ''}`}>{label}</span>
							<h2 className="section-title enlarged">{title}</h2>
							<p className="section-subtitle">{subtitle}</p>
							<Link to={ROUTES.AUTH.USER_REGISTER} className="btn btn--getStarted">Get started</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default BlockContent;