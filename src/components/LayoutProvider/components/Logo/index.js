//@flow
import * as React from 'react';
import { Link } from '@reach/router';
import './logo.css';

type Props = {
	type?: string,
	whiteSquares?: boolean,
	white?: boolean,
	to?: string
}

const Logo = React.memo<Props>(({ to = null, type = "", white = false, whiteSquares = false }) => (
	<div className={`logo ${type} ${white ? 'white' : ''}`}>
		<Link to={to ? to : "/"}>
				<span className="logo-container">
					{/* transl<span className="bold">eat</span>
					<img src={require(`../../../../assets/img/common/${whiteSquares || white ? 'squares-white' : 'squares-orange'}.svg`)}
					     alt="squares"/> */}
					S<span className="bold">
						<div className="round">
							<input type="checkbox" className="checkbox" checked/>
							<label for="checkbox"></label>
						</div>
					</span>cialent
				</span>
		</Link>
	</div>
));

Logo.displayName = 'Logo';

export default Logo;