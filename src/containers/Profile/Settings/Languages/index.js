//@flow
import * as React from 'react';
import * as uuid from "uuid";
import { Data } from '../../../../components/tools';

function Languages() {
	let languagesArr = [
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: true
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
		{
			id: uuid.v4(),
			lang: 'English',
			flag: require('../../../../assets/img/common/british-flag.svg'),
			selected: false
		},
	];
	
	const [languages, updateLanguages] = React.useState(languagesArr);
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
			<span className="item-label">Selected languages</span>
			<div className="languages-select">
				<Data data={languages}>
					{({item, index}) => (
						<div key={index}
						     className={`language-item ${item.selected ? "selected" : ''}`}
						     onClick={() => selectLanguage(item.id)}>
							<img src={item.flag} alt={`${item.lang}_flag`}/>
							<span className="lang-name">{item.lang}</span>
						</div>
					)}
				</Data>
			</div>
			<button className={`btn btn--getStarted ${isLoading ? 'loading-btn' : ''}`}
			        disabled={isLoading} type="button"
			        onClick={() => saveLanguages()}>
				Save
				<span className="load-item">
						<span/>
					</span>
			</button>
		</React.Fragment>
	)
}

export default Languages;