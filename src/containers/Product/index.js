//@flow
import * as React from 'react';
import { Consume } from '../../components/LayoutProvider';
import BlockContent from '../../components/ReusableSections/BlockContent';
import ProductHunt from '../../components/ReusableSections/ProductHunt';
import AppInterface from './AppInterface';
import TheProcess from './TheProcess';

function Product() {
	return (
		<Consume consume={{
			title: 'TRANSLEAT | PRODUCT',
			classNameLayout: 'product-page',
			withFooter: true,
			isAuthenticated: false,
			withNav: true,
			withHeader: true
		}}>
			<ProductHunt/>
			<AppInterface/>
			<BlockContent img={require('../../assets/img/product/cardBg.png')}
			              title="Over 5,000 of the world’s best engineering teams use the Bugsnag "
			              subtitle="We give you a professional designer to help you with all of your creative needs. No interviews, no contracts, unlimited designs."
			              label="How we approach"
			              labelOrange
			              direction="ltr">
				<svg className="decoration" xmlns="http://www.w3.org/2000/svg" width="189.375" height="171.458" viewBox="0 0 189.375 171.458">
					<g id="Group_992" data-name="Group 992" transform="matrix(0.899, -0.438, 0.438, 0.899, -848.254, 312.678)">
						<path id="Path_518" data-name="Path 518" d="M881.045,217.24c-13.762-23.664,14.063-46.234,27.1-39.618C948.1,197.889,901.733,252.817,881.045,217.24Z" transform="translate(14.898 25.851)"/>
						<path id="Path_519" data-name="Path 519" d="M966.785,224.878c-.525,2.706-1.33,13.943-12.264,22.384-11.319,8.737-29.782.543-26.99-14.233,2.361-12.5,12.606-26.874,23.824-24.246a68.008,68.008,0,0,1,7.292,2.213C962.725,212.45,966.947,219.41,966.785,224.878Z" transform="translate(43.713 44.327)" fill="#ff8933"/>
						<path id="Path_520" data-name="Path 520" d="M927.05,216.614c-4.949.159-10.193-2.047-11.814-7.545-4.711-15.957,11.163-34.625,22.127-23.352a20.658,20.658,0,0,1,4.51,6.177,15.063,15.063,0,0,1,1.112,9.709C940.444,212.413,933.841,216.917,927.05,216.614Z" transform="translate(36.289 29.211)"/>
						<path id="Path_521" data-name="Path 521" d="M879.246,185.763c.148,5.812-2.1,10.22-6.569,13.325-12.535,8.715-23.094-2.6-20.881-11.4,2.9-11.551,10.466-23.906,19.256-18.055C876.62,173.336,879.1,178.84,879.246,185.763Z" transform="translate(0 21.047)" fill="#ff8933"/>
						<path id="Path_522" data-name="Path 522" d="M928.824,165.549A9.022,9.022,0,0,1,921,160.5c-3.578-6.36-.694-14.661,2.415-21.313,2.159-4.619,7.808-8.9,12.475-7.113C950.334,137.612,944.157,166.093,928.824,165.549Z" transform="translate(39.15 0)"/>
						<path id="Path_523" data-name="Path 523" d="M911.809,247.061c-3.2-.437-5.361-2.963-5.5-6.45-.189-4.684,2.785-10.984,5.867-14.454,3.217-3.621,7.944-2.993,10.339,1.415C926.99,235.8,921.411,248.375,911.809,247.061Z" transform="translate(31.624 53.178)" fill="#ff8933"/>
					</g>
				</svg>
			</BlockContent>
			<TheProcess/>
		</Consume>
	)
}

export default Product;