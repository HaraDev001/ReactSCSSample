//@flow
import * as React from 'react';
import { AngleDown } from '../../../components/Icons';
import { LayoutContext } from '../../../components/LayoutProvider';
import { ClickOutside } from '../../../components/tools';

type PageLabelProps = {
	page: string
}
const PageLabel = React.memo<PageLabelProps>(({page}) => {
	return(
		<div className="profile-container">
			<div className="page-label">
				<p className="unit-label">This is your {page}</p>
				<h2 className="section-label">Hello John Doe</h2>
			</div>
		</div>
	)
});

PageLabel.displayName = 'PageLabel';

type SortButtonProps = {
	label?: string,
	alignRight?: boolean,
	backgroundAlreadyOpened?: boolean,
	options: Array<Object>
}
const SortButton = React.memo<SortButtonProps>(({ options, label, backgroundAlreadyOpened = false, alignRight = false }) => {
	const [isOpened, openDropdown] = React.useState(false);
	const [id, selectId] = React.useState(0);
	const state = React.useContext(LayoutContext);
	
	const closeDropmenu = () => {
		if (!backgroundAlreadyOpened){
			state.setBlurBg(o => !o);
		}
		openDropdown(!isOpened);
	};
	
	const onClickedOutside = () => {
		if (isOpened) {
			return closeDropmenu();
		}
	};
	return (
		<ClickOutside clickedOutside={onClickedOutside}>
			{({innerRef}) => (
				<button ref={innerRef} className={`btn sort-button ${isOpened ? 'active' : ''}`}
				        onClick={() => closeDropmenu()}>
					{!label ? options[id].title : label}
					<AngleDown/>
					
					<ul className={`profile-dropdown ${alignRight ? 'left' : ''} ${isOpened ? 'opened' : ''}`}>
						{options.map((item, i) => (
							<li key={i} className={i === id ? 'selected' : ''}
							    onClick={(e) => {
								    e.stopPropagation();
								    selectId(i);
								    item.callFunc();
								    return closeDropmenu()
							    }}>{item.title}</li>
						))}
					</ul>
				</button>
			)}
		</ClickOutside>
	)
});

SortButton.displayName = 'SortButton';

export {SortButton, PageLabel}