import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { ContactForm } from '../components/contact-form';

const ContactPage = () => {
	return (
		<Layout>
			<SEO title="Contattaci" />
			<div id="page-wrapper">
				<main role="main">
					<article>
						<header className="section">
							<div className="line text-center">
								<h1
									className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1"
								>
									Contattaci
								</h1>
								<p className="margin-bottom-0 text-size-16 text-dark">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis.<br />
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod.
								</p>
							</div>
						</header>
						<section className="full-width background-dark flex-vertical-center">
							<div className="s-12 m-12 l-6">
								<div style={{ backgroundImage: 'url(https://res.cloudinary.com/djsb71n23/image/upload/v1581632355/checchisrl/checchi-srl-indirizzo-mappa_xzw8ek.jpg)' }} className="contact-image">
								</div>
							</div>
							<div className="s-12 m-12 l-6 text-center">
								<div
									className="padding-2x"
									itemScope
									itemType="http://schema.org/Organization"
								>
									<i
										className="icon-sli-location-pin text-white text-size-30 center"
									></i>
									<h2 className="text-size-20 margin-bottom-0 text-white">
										Indirizzo
									</h2>
									<p className="text-size-16">
										<span itemProp="name">
                    Cartolibreria Checchi srl – Centro Didattico Checchi – La
                    Vela Scuola
										</span>
									</p>
									<p className="text-size-16">
										<span
											itemProp="address"
											itemScope
											itemType="http://schema.org/PostalAddress"
										>
											<span itemProp="streetAddress">Via Roma 131</span> -
											<span itemProp="postalCode">55054</span> -
											<span itemProp="addressLocality">Massarosa (Lu)</span>
										</span>
									</p>
									<p className="text-size-16"><a className="evidence" href="https://www.google.com/maps/dir//Cartolibreria+Checchi+Srl,+Via+Cavalieri+di+Vittorio+Veneto,+222,+55054+Massarosa+LU,+Italia/@43.8671594,10.3369385,17z/data=!4m16!1m6!3m5!1s0x12d59ea482c01547:0x5af9acfe4396971c!2sCartolibreria+Checchi+Srl!8m2!3d43.8671556!4d10.3391272!4m8!1m0!1m5!1m1!1s0x12d59ea482c01547:0x5af9acfe4396971c!2m2!1d10.3391272!2d43.8671556!3e3" target="_blank" rel="noopener noreferrer">Indicazioni</a></p>
									<i
										className="icon-sli-envelope text-white text-size-30 center margin-top-20"
									></i>
									<h2 className="text-size-20 margin-bottom-0 text-white">E-mail</h2>
									<p className="text-size-16">
										<a
											className="text-primary-hover"
											href="mailto:scolastico@checchisrl.it"
										>
											<span itemProp="email">scolastico@checchisrl.it</span></a
										>
									</p>
									<i
										className="icon-sli-earphones-alt text-white text-size-30 center margin-top-20"
									></i>
									<h2 className="text-size-20 margin-bottom-0 text-white">
                  Numeri di telefono
									</h2>
									<p className="text-size-16">
                  tel <span itemProp="telephone">0584.939766</span><br />
									</p>
									<p className="text-size-16">
                  fax <span itemProp="faxNumber">0584.963541</span><br />
									</p>
									<p className="text-size-16">
                  cell <span itemProp="telephone">348.2304554</span>
									</p>
								</div>
							</div>
						</section>

						<section className="section">
							<div className="s-12 m-12 l-4 center">
								<h4 className="text-size-20 margin-bottom-20 text-dark text-center">
									Inviaci una mail
								</h4>
								<ContactForm />
							</div>
						</section>
					</article>
				</main>
			</div>
		</Layout>
	);
};
export default ContactPage;
