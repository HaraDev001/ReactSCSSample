//@flow
import { Formik } from 'formik';
import * as React from 'react';
import * as uuid from "uuid";
import Button from '../../../components/Form/Button';
import FieldBig from '../../../components/Form/Field';
import { CloseModal } from '../../../components/Icons';
import Modal from '../../../components/Modal';
import {
	ClickOutside,
	Data,
	isNotUndefined,
	number
} from '../../../components/tools';

type Props = {
	toggleModal: any => void,
	createCategory: (Object) => void,
	isShowed: boolean
}
function CreateNewCategoryModal({toggleModal, isShowed, createCategory}: Props) {
	let category = [
		{
			id: 1,
			name: 'Promos',
			selected: true
		},
		{
			id: 2,
			name: 'Happy hours',
			selected: false
		},
		{
			id: 3,
			name: 'Slider',
			selected: false
		},
		{
			id: 4,
			name: 'Slider',
			selected: false
		},
		{
			id: 5,
			name: 'Slider',
			selected: false
		},
		{
			id: 6,
			name: 'Other',
			selected: false
		}
	];
	let days = [
		{
			id: 1,
			name: 'Mon',
			selected: true
		},
		{
			id: 2,
			name: 'Tue',
			selected: true
		},
		{
			id: 3,
			name: 'Web',
			selected: true
		},
		{
			id: 4,
			name: 'Thu',
			selected: true
		},
		{
			id: 5,
			name: 'Fri',
			selected: true
		},
		{
			id: 6,
			name: 'Sat',
			selected: true
		},
		{
			id: 7,
			name: 'Sun',
			selected: true
		}
	];
	
	const [typeOfCategory, setCategory] = React.useState(category);
	const [workingDays, setWorkingDays] = React.useState(days);
	
	React.useEffect(() => {
		if (!isShowed){
			setCategory(category);
			setWorkingDays(days);
		}
	}, [isShowed]);
	
	const toggleSelected = (id: any, type: string) => {
		if (type === 'category'){
			let obj = typeOfCategory.filter(item => item.id === id);
			if (obj.length > 0){
				obj[0].selected = !obj[0].selected;
			}
			
			setCategory([
				...typeOfCategory
			])
		}else if (type === 'days'){
			let obj = workingDays.filter(item => item.id === id);
			if (obj.length > 0){
				obj[0].selected = !obj[0].selected;
			}
			
			setWorkingDays([
				...workingDays
			])
		}
	};
	
	const onClickedOutsideModal = () => {
		if (isShowed) {
			return toggleModal();
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
		
		if (isNotUndefined(values.startDate)) {
			
			if (values.startDate === "") {
				errors.startDate = required
			}
			
			if (values.startDate) {
				let [startDateHours, startDateRest] = values.startDate.split(':');
				let [startDateMinutes, _] = startDateRest.split('/');
				
				if (number(startDateHours) || number(startDateMinutes)) {
					errors.startDate = required
				}
			}
		}
		
		if (isNotUndefined(values.endDate)) {
			if (values.endDate === "") {
				errors.endDate = required
			}
			
			if (values.endDate){
				let [endDateHours, endDateRest] = values.endDate.split(':');
				let [endDateMinutes, _] = endDateRest.split('/');
				if (number(endDateHours) || number(endDateMinutes)) {
					errors.endDate = required
				}
			}
		}
		
		return errors;
	};
	
	const create = (values, actions) => {
		let category = typeOfCategory.filter(item => item.selected);
		let days = workingDays.filter(item => item.selected);
		
		let createdObj = {
			id: uuid.v4(),
			name: values.name,
			workingDays: days,
			typeOfCategory: category,
			startDate: values.startDate,
			endDate: values.endDate,
			dishes: []
		};
		
		createCategory(createdObj);
		actions.resetForm();
		return toggleModal();
	};
	
	return (
		<Modal isShowed={isShowed}>
			<ClickOutside clickedOutside={onClickedOutsideModal}>
				{({innerRef}) => isShowed && (
					<div ref={innerRef} className={`create-menu-list-item modal-body ${isShowed ? 'show' : ''}`}>
						<h3 className="modal-title">Add a new category </h3>
						<span className="close-modal" onClick={() => toggleModal()}>
							<CloseModal/>
						</span>
						
						<Formik
							initialValues={{
								name: "",
								startDate: "",
								endDate: ""
							}}
							validate={(values) => validate(values)}
							onSubmit={(values, actions) => create(values, actions)}
						>
							{form => (
								<form onSubmit={form.handleSubmit}>
									<fieldset>
										<span className="input-label">Name</span>
										<FieldBig name="name" placeholder="Name" type="text" {...form}/>
										<span className="input-label">Type of category</span>
										
										<ul className="typeOfCategory">
											<Data data={typeOfCategory}>
												{({item, index}) => <li key={index} onClick={() => toggleSelected(item.id, 'category')} className={`${item.selected ? 'selected' : ''}`}>{item.name}</li>}
											</Data>
										</ul>
										
										<span className="input-label">Time</span>
										<div className="date-fields">
											<FieldBig name="startDate" placeholder="Starting time" mask="00:00/am" lazy={false} type="text" {...form}/>
											<FieldBig name="endDate" placeholder="Ending time" mask="00:00/am" lazy={false} type="text" {...form}/>
										</div>
										
										<span className="input-label">Days</span>
										<ul className="select-list">
											<Data data={workingDays}>
												{({item, index}) =>
													<li key={index}
													    onClick={() => toggleSelected(item.id, 'days')}
													    className={`${item.selected ? 'selected' : ''}`}>
														{item.name}
														<span className="deselect" style={{backgroundImage: `url(${require('../../../assets/img/common/icon-deselect.svg')})`}}/>
													</li>
												}
											</Data>
										</ul>
										
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

export default CreateNewCategoryModal;