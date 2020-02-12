import React from 'react';
import Img from 'gatsby-image';

export const TeamMember = ({ member }) => {
	const { immagine: { childImageSharp: { fluid } }, nome, ruolo } = member;
	return (
		<div className="s-6 m-4 l-3">
			<div className="padding">
				<Img fluid={fluid} alt={nome} className="full-img border-image border-primary" />
				<h3
					className="text-s-size-16 text-size-20 text-line-height-1 text-dark margin-top-20 margin-bottom-0"
				>
					{nome}
				</h3>
				<p className="text-size-14 text-dark margin-bottom-10">
					{ruolo}
				</p>
			</div>
		</div>
	);
};
