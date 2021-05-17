//@flow
import { Formik } from 'formik';
import * as React from 'react';
import * as uuid from "uuid";
import Button from '../../../components/Form/Button';
import Dropzone from '../../../components/Form/Dropzone';
import FieldBig from '../../../components/Form/Field';
import TextArea from '../../../components/Form/TextArea';
import { CloseModal } from '../../../components/Icons';
import Modal from '../../../components/Modal';
import {
	checkFileSize,
	ClickOutside,
	Data,
	isNotUndefined, number
} from '../../../components/tools';

type Props = {
	toggleModal: any => void,
	createDishe: (Object) => void,
	selectedDish: Object,
	isShowed: boolean
}
function CreateNewDisheModal({toggleModal, isShowed, createDishe, selectedDish}: Props) {
	let keywordList = [
		{
			id: 1,
			name: 'Burger'
		},
		{
			id: 2,
			name: 'Bio'
		},
		{
			id: 3,
			name: 'Vegan'
		},
		{
			id: 4,
			name: 'Tasty'
		},
		{
			id: 5,
			name: 'Spicy'
		},
		{
			id: 6,
			name: 'Hot'
		},
		{
			id: 7,
			name: 'Ripe'
		},
		{
			id: 8,
			name: 'Mature'
		},
		{
			id: 9,
			name: 'Bittersweet'
		},
		{
			id: 123,
			name: 'Acidic'
		},
		{
			id: 27,
			name: 'Astringent'
		},
		{
			id: 687,
			name: 'Watery'
		}
	];
	
	const [keywords, updateKeywordList] = React.useState([
		{
			id: 1,
			name: 'Burger'
		}
	]);
	const [word, searchKeyword] = React.useState('');
	
	React.useEffect(() => {
		if (selectedDish){
			updateKeywordList(selectedDish.keywords)
		}
	}, []);
	
	const onClickedOutsideModal = () => {
		if (isShowed) {
			return toggleModal();
		}
	};
	
	const selectKeyword = (id) => {
		let obj = keywordList.filter(item => item.id === id);
		if (keywords.filter(item => item.id === obj[0].id).length === 0){
			updateKeywordList((prevObj) => ([...prevObj, ...obj]));
			searchKeyword('');
		}
	};
	
	const validate = (values) => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.name)) {
			if (values.name === "") {
				errors.name = required
			}
		}
		
		if (isNotUndefined(values.description)) {
			if (values.description === "") {
				errors.description = required
			}
		}
		
		if (isNotUndefined(values.price)) {
			if (values.price === "") {
				errors.price = required
			}
		}
		
		if (isNotUndefined(values.discount)) {
			if (number(values.discount) || values.discount.includes('-') || values.discount.includes('%')) {
				errors.discount = "* Should be a number without any characters"
			}
		}
		
		if (isNotUndefined(values.image)) {
			if (!values.image) {
				errors.image = required
			}
			
			checkFileSize('image', values.image, errors)
		}
		
		return errors;
	};
	
	const create = (values, actions) => {
		
		let createdObj = {
			id: selectedDish ? selectedDish.id : uuid.v4(),
			name: values.name,
			description: values.description,
			price: values.price,
			keywords: keywords,
			image: values.image,
			discount: values.discount
		};
		console.log(values, createdObj);
		createDishe(createdObj);
		actions.resetForm();
		return toggleModal();
	};
	
	const filteredKeywordList = () => {
		let filterKeywordList = keywordList.filter(item => item.name.toLowerCase().indexOf(word.toLowerCase()) !== -1);
		
		return (
			<Data data={filterKeywordList}>
				{({item, index}) =>
					<li key={index} onClick={() => selectKeyword(item.id)}>
						{item.name}
					</li>
				}
			</Data>
		)
	};
	
	const removeKeyword = (id) => {
		let obj = keywords.filter(item => item.id !== id);
		
		updateKeywordList([
			...obj
		])
	};
	
	return (
		<Modal isShowed={isShowed}>
			<ClickOutside clickedOutside={onClickedOutsideModal}>
				{({innerRef}) => isShowed && (
					<div ref={innerRef} className={`create-menu-list-item modal-body ${isShowed ? 'show' : ''}`}>
						<h3 className="modal-title">Add a new dishe </h3>
						<span className="close-modal" onClick={() => toggleModal()}>
							<CloseModal/>
						</span>
						
						<Formik
							initialValues={{
								name: selectedDish ? selectedDish.name : "",
								description: selectedDish ? selectedDish.description : "",
								price: selectedDish ? selectedDish.price : "",
								image: selectedDish ? selectedDish.image : "",
								discount: selectedDish ? selectedDish.discount : ""
							}}
							validate={(values) => validate(values)}
							onSubmit={(values, actions) => create(values, actions)}
						>
							{form => (
								<form onSubmit={form.handleSubmit}>
									<fieldset>
										<span className="input-label">Name</span>
										<FieldBig name="name" placeholder="Name" type="text" {...form}/>
										
										<span className="input-label">Description</span>
										<TextArea name="description" placeholder="A rich and earthly soup of porcini, shiitake & oyster mushrooms. With our focaccia ..." type="text" {...form}/>
										
										<span className="input-label">Price</span>
										<FieldBig name="price" placeholder="$$$" mask="0000000000" type="text" {...form}/>
										
										<span className="input-label">Discount (optional)</span>
										<FieldBig name="discount" placeholder="Discount in %" type="text" {...form}/>
										
										
										<span className="input-label">Keyword</span>
										<div className="field">
											<label htmlFor={`Keyword_Input`} className="input-label">
												<input type="text" placeholder="Search a keyword …"
												       value={word}
												       onChange={(e) => searchKeyword(e.currentTarget.value)}/>
											</label>
											<ul className={`keywords-list ${word ? 'opened' : ''}`}>
												{word && filteredKeywordList()}
											</ul>
										</div>
										
										<ul className="select-list keywords">
											<Data data={keywords}>
												{({item, index}) =>
													<li key={index}
														onClick={() => removeKeyword(item.id)}
														className="selected">
														{item.name}
														<span className="deselect" style={{backgroundImage: `url(${require('../../../assets/img/common/icon-deselect.svg')})`}}/>
													</li>
												}
											</Data>
										</ul>
										
										<span className="input-label">image</span>
										
										<Dropzone name="image" {...form}/>
										
										<Button label="SAVE" isLoading={form.isSubmitting}/>
									</fieldset>
								</form>
							)}
						</Formik>
					</div>
				)}
			</ClickOutside>
		</Modal>
	)
}



export default CreateNewDisheModal;