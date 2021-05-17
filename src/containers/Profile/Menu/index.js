//@flow
import * as React from 'react';
import { ItemSettings } from '../../../components/Icons';
import { Consume, LayoutContext } from '../../../components/LayoutProvider';
import { ClickOutside, Data } from '../../../components/tools';
import { PageLabel, SortButton } from '../components';
import CreateNewCategoryModal from './categoryModal';
import CreateNewDisheModal from './disheModal';

function Menu() {
	
	let menu = [
		{
			id: 1,
			name: 'Promos',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: [
				{
					id: 3587334,
					name: 'Burger',
					description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur delectus dolores dolorum eius error fugit',
					price: '5',
					keywords: [],
					image: require('../../../assets/img/profile/dishe.png'),
					discount: ''
				}
			]
		},
		{
			id: 2,
			name: 'Starters',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: []
		},
		{
			id: 3,
			name: 'Main',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: []
		},
		{
			id: 4,
			name: 'Desserts',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: []
		},
		{
			id: 5,
			name: 'Drinks',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: []
		},
		{
			id: 6,
			name: 'Wine',
			workingDays: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
			typeOfCategory: 'promo',
			startDate: '',
			endDate: '',
			dishes: []
		}
	];
	
	const [categories, updateMenuList] = React.useState(menu);
	const [isShowedModal, openModal] = React.useState({open: false, type: ''});
	const [selectedCategory, selectCategory] = React.useState(menu[0]);
	const [selectedDish, selectDish] = React.useState(null);
	const state = React.useContext(LayoutContext);
	
	React.useEffect(() => {
		if (selectedCategory && selectedCategory.id){
			let selected = categories.filter((item) => item.id === selectedCategory.id);
			selectCategory(selected.length > 0 ? selected[0] : {})
		}
	},[categories]);
	
	const updateCategoryList = (obj: Object) => {
		updateMenuList([
			...categories,
			obj
		])
	};
	
	const createDishe = (obj: Object) => {
		let category = categories.filter(item => item.id === selectedCategory.id);
		
		if(category.length > 0) {
			let dishe = category[0].dishes.filter(item => item.id === obj.id);
			
			if (dishe.length > 0){
				dishe[0] = obj;
				let newObj = [{
					...category[0],
					dishes: [
						...dishe
					]
				}];
				let newObj2 = Object.assign(categories, newObj);
				
				updateMenuList(newObj2);
				selectCategory(...newObj);
				
			}else {
				category[0].dishes = [...category[0].dishes, obj];
				updateMenuList([
					...categories
				])
			}
		}
	};
	
	const removeCategory = (id) => {
		updateMenuList((categories) => categories.filter((item) => item.id !== id));
		selectCategory({});
	};
	
	const toggleModal = (type) => {
		state.setBlurBg(o => !o);
		openModal(o => ({
			open: !o.open,
			type: type
		}));
	};
	
	return (
		<Consume consume={{
			title: 'TRANSLEAT | MENU',
			classNameLayout: 'profile-page',
			isAuthenticated: true,
			withFooter: false,
			withNav: false,
			withHeader: true
		}}>
			<PageLabel page="menus"/>
			<section className="menu-section">
				<div className="profile-container">
					<div className="filters">
						<SortButton alignRight options={[
							{
								title: 'Main menu',
								callFunc: () => null
							},
							{
								title: 'Main menu',
								callFunc: () => null
							},
							{
								title: 'Main menu',
								callFunc: () => null
							}
						]}/>
					</div>
					
					<CreateNewCategoryModal createCategory={(item) => updateCategoryList(item)} toggleModal={() => toggleModal('category')} isShowed={isShowedModal.open && isShowedModal.type === 'category'}/>
					<CreateNewDisheModal selectedDish={selectedDish} createDishe={(item) => createDishe(item)} toggleModal={() => toggleModal('dishe')} isShowed={isShowedModal.open && isShowedModal.type === 'dishe'}/>
					
					<div className="restaurant-menu-list">
						<div className="category-list">
							<div className="list">
								<Data data={categories}>
									{({item, index}) =>
										<CategoryItem key={index}
										              removeCategory={() => removeCategory(item.id)}
										              selectedCategoryId={selectedCategory ? selectedCategory.id : null}
										              selectCategory={() => selectCategory(item)} {...item}
									/>}
								</Data>
							</div>
							<button className="btn btn--orange-default" type="button" onClick={() => toggleModal('category')}>Add a new menu’s category</button>
						</div>
						<div className="dishes-list">
							<div className="list">
								<Data data={selectedCategory ? selectedCategory.dishes : null}>
									{({item, index}) => <DishesItem key={index}  createDishe={(item) => createDishe(item)}
									                                toggleModal={() => toggleModal('dishe')}
									                                selectDish={() => selectDish(item)} {...item}/>}
								</Data>
							</div>
							<button className="btn btn--orange-default" type="button" onClick={() => {
								selectDish(null);
								toggleModal('dishe')
							}}>Add a new {selectedCategory ? selectedCategory.name : ""}</button>
						</div>
					</div>
				</div>
			</section>
		</Consume>
	)
}

type DishesItemProps = {
	name: string,
	selectDish: any => void,
	toggleModal: any => void
}

const DishesItem = React.memo(({name, toggleModal, selectDish}: DishesItemProps) => {
	return (
		<React.Fragment>
			
			<div className={`list-item `}>
				<span className="label">{name}</span>
				<button type="button" className="btn settings" onClick={() => {
					toggleModal();
					return selectDish();
				}}><ItemSettings/></button>
			</div>
		</React.Fragment>
	)
});

type CategoryItemProps = {
	name: string,
	id: any,
	selectCategory: Object,
	selectedCategoryId: any,
	removeCategory: any => void
}

const CategoryItem = React.memo(({name, id, selectCategory, selectedCategoryId, removeCategory}: CategoryItemProps) => {
	const state = React.useContext(LayoutContext);
	const [selected, selectToDelete] = React.useState(false);
	
	const toggleDropmenu = () => {
		state.setBlurBg(o => !o);
		selectToDelete(!selected);
	};
	
	const onClickedOutside = () => {
		if (selected) {
			return toggleDropmenu();
		}
	};
	
	return (
		<ClickOutside clickedOutside={onClickedOutside}>
			{({innerRef}) => (
				<div ref={innerRef}
				     className={`list-item ${selected ? 'selected to-delete' : ''} ${selectedCategoryId === id ? 'selected' : ''} `}
				     onClick={() => selectCategory()}>
					
					<span className="label">{name}</span>
					<button type="button" className="btn settings" onClick={() => toggleDropmenu()}><ItemSettings/></button>
					<button type="button" className="btn btn--delete" onClick={() => {
						toggleDropmenu();
						return removeCategory()
					}}>Delete</button>
				</div>
			)}
		</ClickOutside>
	)
});

export default Menu;