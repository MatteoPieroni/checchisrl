import React from 'react';
import { EditorLogo } from '../editor-logo';

export const EditorsList = ({ list }) => {
	const { allStrapiEditore: { edges } } = list;

	return (
		<section className="section background-white">
			<div className="line">
				<h2
					className="text-s-size-40 text-size-50 text-line-height-1 margin-bottom-10 text-thin text-center"
				>
					<span className="text-dark">-</span> Case editrici
					<span className="text-dark">-</span>
				</h2>
				<p className="margin-bottom-50 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy<br />
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
				</p>
				<div className="margin2x">
					{edges && edges.map(editor => <EditorLogo key={editor.node.id} editor={editor} />)}
					{/* 
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/erickson-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/fabbri-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/mondadori-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/3-10-tre-dieci-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/l-saperii-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/eli-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/rcs-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/nicola-milano-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/tre-sei-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/edizioni-il-rubino-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/raffaello-d-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/la-scuola-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img
							className="margin-bottom-40"
							src="img/raffaello-editore-cartolibreria-checchi-massarosa.jpg"
							alt=""
						/>
					</div>
					<div className="s-6 m-4 l-2">
						<img className="margin-bottom-40" src="img/la-spiga-modern-languages-editore-cartolibreria-checchi-massarosa.jpg" alt="" />
					</div>
					<div className="s-6 m-4 l-2">
						<img className="margin-bottom-40" src="img/raffaello-ragazzi-editore-cartolibreria-checchi-massarosa.jpg" alt="" />
					</div> */}
				</div>
			</div>
		</section>
	);
};
