import React from 'react';
import { TeamMember } from '../team-member/team-member';

export const TeamMembersList = ({ list }) => {
	const { edges } = list;
  
	return (
		<section className="section-top-padding">
			<div className="line">
				<h2
					className="text-s-size-40 text-size-50 text-line-height-1 margin-bottom-10 text-thin text-center"
				>
					<span className="text-dark">-</span> Il Team
					<span className="text-dark">-</span>
				</h2>
				<p className="margin-bottom-50 text-center">
        Il nostro team garantisce sempre il miglior servizio. Che si
        tratti di cartoleria, aiuto ai docenti o rappresentanza.
				</p>
				{edges && edges.map(({ node }) => <TeamMember member={node} key={node.id} />)}
			</div>
		</section>

	);
};
