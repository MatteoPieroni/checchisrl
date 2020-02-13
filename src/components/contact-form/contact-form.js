import React from 'react';

export const ContactForm = () => {
	return (
		<form name="contact" method="POST" action="/contattaci?message=success" netlify-honeypot="botty-field" data-netlify="true" className="customform">
			<div className="s-12">
				<div className="margin">
					<div className="s-12">
						<label htmlFor="contact-name">Nome*</label>
						<input
							name="name"
							id="contact-name"
							className="required email"
							type="text"
							required
						/>
					</div>
					<div className="s-12">
						<label htmlFor="contact-email">Email*</label>
						<input
							name="email"
							id="contact-email"
							className="name"
							type="text"
							required
						/>
					</div>
					<div className="s-12">
						<label htmlFor="contact-message">Messaggio*</label>
						<textarea
							name="message"
							id="contact-message"
							className="required message"
							required
							rows="3"
						></textarea>
					</div>
				</div>
			</div>
			<label className="hidden">Don’t fill this out if you&aposre human: <input name="botty-field" /></label>
			<div className="s-12">
				<button
					className="s-12 submit-form button text-white"
					type="submit"
				>
          Invia la mail
				</button>
			</div>
		</form>
	);
};
