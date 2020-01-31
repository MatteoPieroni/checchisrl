import React from 'react';

export const Header = () => {
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
					<div className="top-nav right">
						<ul className="right chevron">
							<li><a href="/">Home</a></li>
							<li><a href="about-us.html">About Us</a></li>
							<li><a href="/contattaci">Contatti</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
