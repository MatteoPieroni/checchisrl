import React from 'react';
import Img from 'gatsby-image';

export const EditorLogo = ({ editor }) => {
	const { node: { immagine: { childImageSharp: { fluid } }, nome } } = editor;
	return (
		<div className="s-6 m-4 l-2">
			<Img fluid={fluid} alt={nome} />
		</div>
	);
};
