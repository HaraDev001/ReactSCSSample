//@flow
import * as React from 'react';
import * as uuid from "uuid";
import { Data } from '../../../../components/tools';
// import '../../../Profile/Settings/settings.scss';
import './menu.css';

function IndivMedia() {
	let indivmedia = [
		{
			id: uuid.v4(),
			lang: 'Facebook',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Twitter',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'Instagram',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Linkedin',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Snapchat',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'YouTube',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Pinterest',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'Whatsapp',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Twitch',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'TikTok',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'Vk',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Wechat',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'Weibo',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'Baidu',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
	];
	
	const [languages, updateLanguages] = React.useState(indivmedia);
	const [isLoading, setIsLoading] = React.useState(false);
	
	const selectLanguage = (id) => {
		let language = languages.filter(item => item.id === id);
		if (language.length > 0) {
			language[0].selected = !language[0].selected;

			return updateLanguages([
				...languages
			])
		}
		return null
	};
	
	const saveLanguages = () => {
		setIsLoading(true);
		// this array should be saved
		// let selectedLanguages = languages.filter(item => item.selected);
		
		setTimeout(() => {
			setIsLoading(false);
			alert("Saved !")
		}, 3000)
	};
	
	return (
		<React.Fragment>
			<div className="media-select">
				<Data data={languages}>
					{({item, index}) => (
						<div key={index}
						     className={`media-item ${item.selected ? "selected" : ''}`}
						     onClick={() => selectLanguage(item.id)}>
							<img src={item.flag} alt={`${item.lang}_flag`}/>
							<span className="lang-name">{item.lang}</span>
						</div>
					)}
				</Data>
			</div>
			{/* <button className={`btn btn--getStarted ${isLoading ? 'loading-btn' : ''}`}
			        disabled={isLoading} type="button"
			        onClick={() => saveLanguages()}>
				Next
				<span className="load-item">
						<span/>
					</span>
			</button> */}
		</React.Fragment>
	)
}

export default IndivMedia;