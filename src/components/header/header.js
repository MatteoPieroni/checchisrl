import React, { useEffect, useState } from 'react';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.getElementById('root').classList.add('show-menu');
		} else {
			document.getElementById('root').classList.remove('show-menu');
		}

		return () => document.getElementById('root').classList.remove('show-menu');
	}, [isMenuOpen]);

	return (
		<header
			role="banner"
			className="position-absolute margin-top-30 margin-m-top-0 margin-s-top-0"
		>
			<nav
				className="background-transparent background-transparent-hightlight full-width sticky"
			>
				<div className="s-12 l-2">
					<a href="index.html" className="logo">
						<img className="logo-before" src="img/logo-dark.png" alt="" />
						<img className="logo-after" src="img/logo-dark.png" alt="" />
					</a>
				</div>
				<div className="s-12 l-10">
					<p className="nav-text" onClick={() => setIsMenuOpen(!isMenuOpen)}><span></span></p>
					<div className="top-nav right">
						<ul className="right chevron">
							<li><a href="/">Home</a></li>
							<li><a href="/centro-didattico">Centro didattico</a></li>
							<li><a href="/contattaci">Contatti</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
