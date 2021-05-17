//@flow
import * as React from 'react';
import {Container} from '../../../components/Grid';
import Collapse from '../../Collapse';
import { ClickOutside, Data } from '../../tools';

type FaqProps = {
	faq: Array<Object>
}
function Faq({faq}: FaqProps) {
	return (
		<section className="faq-section">
			<Container style={{position: 'relative'}}>
				<h2>The questions they <br/> ask us most often</h2>
				
				<div className="faq__container">
					<Data data={faq}>
						{({item, index}) => <Item key={index} {...item}/>}
					</Data>
				</div>
				
				<span className="decorative-circle"/>
			</Container>
		</section>
	)
}

type Props = {
	question: string,
	answer: string
}

function Item({question, answer}: Props) {
	const [opened, setOpen] = React.useState(false);
	
	const onClickedOutside = () => {
		if (opened) {
			return setOpen(false);
		}
	};
	return(
		<ClickOutside clickedOutside={onClickedOutside}>
			{({innerRef}) => (
				<div ref={innerRef} className="faq__item">
					<div className={`faq__question ${opened ? 'opened' : ''}`} onClick={() => setOpen(!opened)}>
						<h3>{question}</h3>
						<span>
					<span/>
				</span>
					</div>
					<Collapse
						in={opened}
						className="faq__answer"
						withParent={false}
					>
						<p>{answer}</p>
					</Collapse>
				</div>
			)}
		</ClickOutside>
	)
}

export default Faq;