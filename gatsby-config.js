require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Checchi srl',
		description: 'Gatsby blog with Strapi',
		author: 'Checchi srl',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: process.env.API_URL,
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					'depliant',
					'editore',
					'team-member'
				],
				queryLimit: 1000,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
			  fonts: [
				'work sans'
			  ],
			  display: 'swap'
			}
		},
	],
};
