import React from 'react';
import Image from 'gatsby-image';

export const Depliant = ({ data }) => {
	const { anno, file_depliant: { absolutePath }, image: { childImageSharp: { fluid } } } = data;

	return (
		<section className="section-both-padding evidence-background">
			<div className="line">
				<div className="margin">
					<div className="s-12 m-12 l-4 margin-m-bottom">
						<a className="image-hover-zoom margin-bottom" href="https://www.sfogliami.it/fl/178918/jfjddn2j143zrxksykv9u115xzhbq7my" target="_blank" rel="noopener noreferrer">
							<Image fluid={fluid} alt={`Depliant ${anno}`} className="depliant margin-auto" />
						</a>
					</div>
					<div className="s-12 m-12 l-8 margin-m-bottom">
						<h2 className="evidence-text">Depliant {anno}</h2>
						<p className="margin-bottom evidence-text">
              Clicca sulla Copertina per visualizzare online il Depliant oppure clicca quì sotto per scaricare il depliant in formato PDF.
						</p>
						<a href={absolutePath} target="_blank" rel="noopener noreferrer" className="button">Scarica il depliant</a>
					</div>
				</div>
			</div>
		</section>
	);
};
