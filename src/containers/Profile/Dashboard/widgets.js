//@flow
import * as React from 'react';
import Chart from "react-apexcharts";
import Collapse from '../../../components/Collapse';
import { AngleDown } from '../../../components/Icons';

type ChartWidgetProps = {
	chartsOptions: Object,
	xaxisValue: Object
}
const ChartWidget = React.memo<ChartWidgetProps>(({chartsOptions, xaxisValue}) => {
	const [isOpened, open] = React.useState(true);
	return (
		<React.Fragment>
			<h2 className={`section-label ${isOpened ? 'opened' : ''}`} onClick={() => open(!isOpened)}>Menu’s views <AngleDown/></h2>
			<div className="widget chart-widget transparent">
				<Collapse
					className="widget-collapse"
					in={isOpened}
					withParent={false}
				>
					<Chart
						className="apexcharts-root graph-chart"
						options={{
							...chartsOptions,
							colors: ['#FF8933'],
							
							xaxis: {
								...chartsOptions.xaxis,
								...xaxisValue.xaxis
							}
						}}
						series={[
							{
								name: "",
								type: "area",
								data: chartsOptions.data
							}
						]}
						type="area"
						width="100%"
						height="100%"
						style={chartsOptions.style}
					/>
				</Collapse>
			</div>
		</React.Fragment>
	)
});

ChartWidget.displayName = 'ChartWidget';

//
type SistemWidgetsProps = {
	label: string,
	children: React.Node,
	active?: boolean
}

const SistemWidgets = React.memo<SistemWidgetsProps>(({ label, children, active = false }) => {
	const [isActive, toggle] = React.useState(active);
	return (
		<div className={`widget columnDirection ${isActive ? 'active' : ''}`}>
			<div className="toggle-container justifyBetween">
				{children}
				<div className="toggle-btn" onClick={() => {
					return toggle(!isActive);
				}}>
					{isActive ? 'ON' : 'OFF'}
					<div className={`toggle ${isActive ? 'active' : ''}`} onClick={() => toggle(t => !t)}><span/></div>
				</div>
			</div>
			
			<p className="unit-label">{label}</p>
		</div>
	)
});

SistemWidgets.displayName = 'SistemWidgets';

export {SistemWidgets, ChartWidget}