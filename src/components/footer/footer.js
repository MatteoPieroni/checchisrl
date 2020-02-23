import React from 'react';

import { Icons } from '../icons';

export const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer>
			<div className="background-dark padding text-center footer-social">
				<a
					className="margin-right-10"
					target="_blank"
					rel="noopener noreferrer"
					href="https://it-it.facebook.com/checchisrl/"
				>
					<Icons.Facebook size={30} fill="#fff" />
					<span className="text-strong text-white hide-s hide-m"
					>FACEBOOK</span
					></a
				>
			</div>

			<section
				className="section-small-padding text-center background-dark full-width"
			>
				<div className="line">
					<div className="margin">
						<div className="s-12 m-12 l-4 margin-m-bottom-30" itemScope itemType="http://schema.org/Organization">
							<h3 className="text-size-16">Company Address</h3>
							<p className="text-size-14">
								<span itemProp="name">
                Cartolibreria Checchi srl – Centro Didattico Checchi – La Vela Scuola  
								</span>
								<br />
								<span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
									<span itemProp="streetAddress">Via Roma 131</span> - <span itemProp="postalCode">55054</span> - <span itemProp="addressLocality">Massarosa (Lu)</span>
								</span>
							</p>
						</div>
						<div className="s-12 m-12 l-4 margin-m-bottom-30">
							<h3 className="text-size-16">E-mail</h3>
							<p className="text-size-14">
								<a href="mailto:scolastico@checchisrl.it"><span itemProp="email">scolastico@checchisrl.it</span></a>
							</p>
						</div>
						<div className="s-12 m-12 l-4 ">
							<h3 className="text-size-16">Numeri di telefono</h3>
							<p className="text-size-14">
              tel <a href="tel:0584939766"><span itemProp="telephone">0584.939766</span></a><br />
              fax <a href="tel:0584963541"><span itemProp="faxNumber">0584.963541</span></a><br />
              cell <a href="tel:3482304554"><span itemProp="telephone">348.2304554</span></a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<hr
				className="break margin-top-bottom-0"
				style={{ borderColor: 'rgba(0, 0, 0, 0.80)' }}
			/>

			<section className="padding background-dark full-width">
				<div className="text-center">
					<p className="text-size-12">
						Copyright {year}, Cartolibreria Checchi srl
					</p>
				</div>
			</section>
		</footer>
	);
};
