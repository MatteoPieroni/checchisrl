/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import './components.css';
import './responsee.css';
import './template-style.css';
import './custom.css';
import { Header } from '../header';
import { Footer } from '../footer';

export const Layout = ({ children, location }) => {
	useEffect(() => {
		document.getElementById('root').classList.remove('show-menu');
	}, []);

	return (
		<div className="size-1140" id="root">
			<Header location={location} />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
