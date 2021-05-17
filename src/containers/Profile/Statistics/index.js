//@flow
import * as React from 'react';
import Chart from "react-apexcharts";
import { RadialChart } from 'react-vis';
import { CloseModal, ItemSettings } from '../../../components/Icons';
import { Consume, LayoutContext } from '../../../components/LayoutProvider';
import Modal from '../../../components/Modal';
import {
	ClickOutside,
	Data
} from '../../../components/tools';
import { PageLabel, SortButton } from '../components';

function Statistics() {
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
					description: '',
					price: '',
					keywords: [],
					image: '',
					statistics: {
						graph: {
							data: [
								// [x, y]
								[1562944166000, 0], ///12/07/2019
								[1565622566000, 8936], ///12/08/2019
								[1568300966000, 11267], ///12/09/2019
								[1570892966000, 17973], ///12/10/2019
								[1574262566000, 29980], ///20/11/2019
								[1576990566000, 23459], ///22/12/2019
								[1578990566000, 40689], ///14/01/2020
								
								[1581310566000, 34783], ///10/02/2020
								[1584310566000, 53745] ///15/03/2020
							],
						},
						viewsPerLang: [
							{
								language: "French",
								views: '35,929',
								width: '50%'
							},
							{
								language: "Japanese",
								views: '28,854',
								width: '28%'
							},
							{
								language: "Chinese",
								views: '1,843',
								width: '81%'
							},
							{
								language: "English",
								views: '1,343',
								width: '9%'
							},
							{
								language: "Swedish",
								views: '1,129',
								width: '50%'
							},
							{
								language: "Spanish",
								views: '854',
								width: '28%'
							},
						]
					}
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
	
	const [categories] = React.useState(menu);
	const [selectedCategory, selectCategory] = React.useState(menu[0]);
	const [selectedDish, selectDish] = React.useState(null);
	const [isShowedModal, openModal] = React.useState(false);
	const state = React.useContext(LayoutContext);
	
	const toggleModal = () => {
		state.setBlurBg(o => !o);
		openModal(o => !o);
	};
	
	return (
		<Consume consume={{
			title: 'TRANSLEAT | STATISTICS',
			classNameLayout: 'profile-page',
			isAuthenticated: true,
			withFooter: false,
			withNav: false,
			withHeader: true
		}}>
			<PageLabel page="statistics"/>
			<section className="statistics-section">
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
					
					<StatisticsModal selectedDish={selectedDish} toggleModal={() => toggleModal()} isShowed={isShowedModal}/>
					
					<div className="restaurant-menu-list">
						<div className="category-list">
							<div className="list">
								<Data data={categories}>
									{({item, index}) =>
										<CategoryItem key={index}
										              selectedCategoryId={selectedCategory ? selectedCategory.id : null}
										              selectCategory={() => selectCategory(item)} {...item}
										/>}
								</Data>
							</div>
						</div>
						<div className="dishes-list">
							<div className="list">
								<Data data={selectedCategory ? selectedCategory.dishes : null}>
									{({item, index}) => <DishesItem selected={selectedDish && selectedDish.id === item.id} key={index} {...item} selectDish={() => selectDish(item)} toggleModal={() => toggleModal()}/>}
								</Data>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Consume>
	)
}

type Props = {
	toggleModal: any => void,
	selectedDish: Object,
	isShowed: boolean
}
function StatisticsModal({toggleModal, isShowed, selectedDish}: Props) {
	// let pieChartConfig = {
	// 	type: "pie",
	// 	series: [10, 10, 10, 10, 60],
	// 	options: {
	// 		chart: {
	// 			width: 380,
	// 			type: 'pie',
	// 		},
	// 		labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
	// 		legend: {
	// 			show: false
	// 		}
	// 	},
	// };
	
	let graphChartConfig = {
		//Followed by: https://apexcharts.com/react-chart-demos/area-charts/datetime-x-axis/
		chart: {
			type: "area"
		},
		
		dataLabels: {
			enabled: false
		},
		
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 1,
				stops: [0, 99, 100]
			}
		},
		
		stroke: {
			width: 2,
		},
		
		tooltip: {
			x: {
				format: 'dd/MM/yyyy'
			},
			y: {
				formatter: (seriesName) => seriesName,
			},
			style: {
				fontSize: '12px',
				fontFamily: "Gilroy', sans-serif"
			}
		},
		
		grid: {
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: false
				}
			},
		},
		
		yaxis: {
			tickAmount: 5,
			min: 0,
			labels: {
				show: true,
				formatter: (num) => { return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num) },
			}
		},
		
		xaxis: {
			type: 'datetime',
			tickAmount: 10,
			labels: {
				format: 'MM/yy',
			},
		},
		
		style: {},
		
		filter: 'all_time'
	};
	let pieChartConfig = [
		{angle: 40, labelsAboveChildren: true, showLabels: true, radius: 50, className: 'custom-color'},
		{angle: 20, labelsAboveChildren: true, showLabels: true, radius: 50, className: 'custom-color'},
		{angle: 10, labelsAboveChildren: true, showLabels: true, radius: 45, className: 'custom-color'},
		{angle: 10, labelsAboveChildren: true, showLabels: true, radius: 42, className: 'custom-color'},
		{angle: 10, labelsAboveChildren: true, showLabels: true, radius: 39, className: 'custom-color'},
		{angle: 10, labelsAboveChildren: true, showLabels: true, radius: 36, className: 'custom-color'}
	];
	
	const [xaxisValue, setXaxis] = React.useState({xaxis: null});
	const [chartType, setChart] = React.useState('views');
	
	const onMount = !xaxisValue.xaxis;
	
	React.useEffect(() => {
		return () => {
			setChart("views");
			setXaxis({xaxis: null})
		}
	}, [isShowed]);
	
	React.useEffect(() => {
		chartFilter(graphChartConfig.filter);
	}, [onMount]);
	
	const chartFilter = (type: string) => {
		let currentDate = new Date();
		switch (type) {
			case 'all_time': return setXaxis({
				xaxis: {
					min: undefined,
					max: undefined,
				}
			});
			case '1_month': return setXaxis({
				xaxis: {
					min: new Date().setMonth(currentDate.getMonth() - 1),
					max: currentDate
				}
			});
			case '3_months': return setXaxis({
				xaxis: {
					min: new Date().setMonth(currentDate.getMonth() - 3),
					max: currentDate
				}
			});
			default: return setXaxis({
				xaxis: {
					min: undefined,
					max: undefined,
				}
			});
		}
	};
	
	const onClickedOutsideModal = () => {
		if (isShowed) {
			return toggleModal();
		}
	};
	
	return (
		<Modal isShowed={isShowed}>
			<ClickOutside clickedOutside={onClickedOutsideModal}>
				{({innerRef}) => isShowed && (
					<div ref={innerRef} className={`statistic-modal modal-body ${isShowed ? 'show' : ''}`}>
						<h3 className="modal-title">{selectedDish.name} statistics</h3>
						<span className="close-modal" onClick={() => toggleModal()}>
							<CloseModal/>
						</span>
						
						<div className="filters">
							<div className="type">
								<span className="sort-label">Type of data</span>
								<SortButton alignRight backgroundAlreadyOpened options={[
									{
										title: 'Views',
										callFunc: () => setChart('views')
									},
									{
										title: 'Views per language',
										callFunc: () => setChart('languages')
									}
								]}/>
							</div>
							<div className="date">
								<span className="sort-label">Date of the data</span>
								<SortButton alignRight backgroundAlreadyOpened options={[
									{
										title: 'All time',
										callFunc: () => chartFilter('all_time')
									},
									{
										title: '1 month',
										callFunc: () => chartFilter('1_month')
									},
									{
										title: '3 months',
										callFunc: () => chartFilter('3_months')
									}
								]}/>
							</div>
						</div>
						
						<div className="statistic-block">
							{chartType === 'views' ? (
								<div className="graph-chart-block">
									<Chart
										className="apexcharts-root graph-chart"
										options={{
											...graphChartConfig,
											colors: ['#FF8933'],
											
											xaxis: {
												...graphChartConfig.xaxis,
												...xaxisValue.xaxis
											}
										}}
										series={[
											{
												name: "",
												type: "area",
												data: selectedDish.statistics.graph.data
											}
										]}
										type="area"
										width="100%"
										height="100%"
										style={graphChartConfig.style}
									/>
								</div>
							) : (
								<div className="pie-chart-block">
									<div className="pie-chart">
										{/*<Chart*/}
										{/*	className="apexcharts-root"*/}
										{/*	options={pieChartConfig.options}*/}
										{/*	series={pieChartConfig.series}*/}
										{/*	type="pie"*/}
										{/*	width="100%"*/}
										{/*	height="100%"*/}
										{/*	style={graphChartConfig.style}*/}
										{/*/>*/}
										
										<RadialChart
											data={pieChartConfig}
											width={240}
											height={240} />
									</div>
									
									<div className="progress-bar-block">
										{selectedDish && selectedDish.statistics.viewsPerLang && (
											<Data data={selectedDish.statistics.viewsPerLang}>
												{({item, index}) => (
													<div key={index} className="progress-bar-item">
														<div className="head">
															<span>{item.language}</span>
															<span>{item.views}</span>
														</div>
														<div className="progress-bar">
															<span style={{width: item.width}}/>
														</div>
													</div>
												)}
											</Data>
										)}
									</div>
								</div>
							)}
						</div>
						
					</div>
				)}
			</ClickOutside>
		</Modal>
	)
}


type DishesItemProps = {
	name: string,
	toggleModal: any => void,
	selectDish: any => void,
	selected: boolean
}

const DishesItem = React.memo(({name, toggleModal, selectDish, selected}: DishesItemProps) => {
	return (
		<React.Fragment>
			<div className={`list-item ${selected ? 'selected' : ''}`}>
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
	selectedCategoryId: any
}

const CategoryItem = React.memo(({name, id, selectCategory, selectedCategoryId}: CategoryItemProps) => {
	return (
		<div className={`list-item ${selectedCategoryId === id ? 'selected' : ''} `}
		     onClick={() => selectCategory()}>
			
			<span className="label">{name}</span>
			<button type="button" className="btn settings"><ItemSettings/></button>
		</div>
	)
});

export default Statistics;