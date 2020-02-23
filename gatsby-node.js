/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config();

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ plugins, actions }) => {
	actions.setWebpackConfig({
		plugins: [
			// Add the environment variables to webpack.DefinePlugin with define().
			plugins.define({
				'process.env.FORM_URL': JSON.stringify(process.env.FORM_URL)
			})
		]
	});
};