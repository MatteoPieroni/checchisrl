import React from 'react';

import { Layout } from '../components/layout';
import SEO from '../components/seo';
import { ContactForm } from '../components/contact-form';

const ContactPage = ({ location }) => {
	const isSuccess = location?.search.slice(1).split('&').filter(query => (query === 'message=success')).length === 1;

	return (
		<Layout>
			<SEO title="Contattaci" />
			<div id="page-wrapper">
				<main role="main">
					<article>
						<header className="section background-white">
							<div className="line text-center">
								<h1
									className="text-dark text-s-size-30 text-m-size-40 text-l-size-headline text-thin text-line-height-1"
								>
									Contattaci
								</h1>
								{isSuccess && (
									<div className="margin-top-30 margin-bottom-30 text-s-size30">
										<p className="success-notification">Grazie per averci contattati</p>
									</div>
								)}
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
								<div
								// style="background-image: url(img/img-contact.jpg);"
									className="contact-image"
								></div>
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

						<section className="section background-white">
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
