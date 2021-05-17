//@flow
import * as React from 'react';
import {
	EyeSmall,
	Folder,
	Heart,
	HourGlass, Sliders, Star
} from '../../../components/Icons';
import { Consume } from '../../../components/LayoutProvider';
import { PageLabel, SortButton } from '../components';
import { ChartWidget, SistemWidgets } from './widgets';

const chartsOptions = {
	//Followed by: https://apexcharts.com/react-chart-demos/area-charts/datetime-x-axis/
	
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
		// min: new Date().getTime(),
		// max: new Date().getTime(),
		tickAmount: 10,
		labels: {
			format: 'MM/yy',
		},
	},
	
	style: {
		width: 'calc(100% + 50px)',
		marginLeft: '-45px',
		marginRight: 'auto'
	},
	
	filter: 'all_time'
};

function Dashboard() {
	const [xaxisValue, setXaxis] = React.useState({xaxis: null});
	
	const onMount = !xaxisValue.xaxis;
	
	React.useEffect(() => {
		chartFilter(chartsOptions.filter);
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
	
	return (
		<Consume consume={{
			title: 'TRANSLEAT | DASHBOARD',
			classNameLayout: 'profile-page',
			isAuthenticated: true,
			withFooter: false,
			withNav: false,
			withHeader: true
		}}>
			<PageLabel page="dashboard"/>
			
			<section className="dashboard-section">
				
				<div className="profile-container">
					
					<div className="filters justifyEnd">
						<SortButton options={[
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
						<SortButton options={[
							{
								title: 'All languages',
								callFunc: () => null
							},
							{
								title: 'English',
								callFunc: () => null
							},
							{
								title: 'French',
								callFunc: () => null
							},
							{
								title: 'Deutsch',
								callFunc: () => null
							}
						]}/>
					</div>
					
					<div className="row-widget">
						<ViewsWidget label="Menu’s views" views="40,689" color="black"><EyeSmall/></ViewsWidget>
						<ViewsWidget label="Dishes selected" views="11,689" color="orange"><Heart/></ViewsWidget>
						<ViewsWidget label="Total Orders" views="40,689"><Folder/></ViewsWidget>
					</div>
					
					<div className="row-widget">
						<div className="col-widget medium">
							<ChartWidget chartsOptions={chartsOptions} xaxisValue={xaxisValue}/>
						</div>
						<div className="col-widget small widder">
							<SistemWidgets label="Happy hours" active={true}>
								<HourGlass/>
							</SistemWidgets>
							
							<SistemWidgets label="Sliders">
								<Sliders/>
							</SistemWidgets>
							
							<SistemWidgets label="Special offers">
								<Star/>
							</SistemWidgets>
						</div>
					</div>
				
				</div>
			</section>
		</Consume>
	)
}

type ViewsWidgetProps = {
	color?: string,
	label: string,
	views: string,
	children: React.Node
}
const ViewsWidget = React.memo(({ views, label, children, color = "" }: ViewsWidgetProps) => {
	return (
		<div className="col-widget small">
			<div className={`widget justifyCenter ${color}`}>
				<div className="icon">{children}</div>
				<div className="views">
					<p className="unit-label">{label}</p>
					<h4>{views}</h4>
				</div>
			</div>
		</div>
	)
});
ViewsWidget.displayName = 'ViewsWidget';

export default Dashboard;