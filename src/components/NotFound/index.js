import { css } from 'emotion';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const styles = css({
	position: 'relative',
	minHeight: '100vh',
	'& h2': {
		margin: 'calc(50vh - 145px) auto 30px',
		fontFamily: 'Ankle, sans-serif',
		fontSize: 40,
		fontWeight: 800,
		lineHeight: 1.38,
		textAlign: 'center',
		color: '#000',
	}
});

const NotFound = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Not Found</title>
			</Helmet>
			<main className={`notFound ${styles}`}>
				<h2>Page not found</h2>
			</main>
		</Fragment>
	);
};

export default NotFound;
