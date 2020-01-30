import React from 'react';

export const ContactForm = () => {
	return (

		<form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true" className="customform">
			<div className="s-12">
				<div className="margin">
					<div className="s-12 m-12 l-6">
						<label htmlFor="contact-name">Nome*</label>
						<input
							name="name"
							id="contact-name"
							className="required email"
							type="text"
							required
						/>
					</div>
					<div className="s-12 m-12 l-6">
						<label htmlFor="contact-email">Email*</label>
						<input
							name="email"
							id="contact-email"
							className="name"
							type="text"
							required
						/>
					</div>
				</div>
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
			<div data-netlify-recaptcha="true"></div>
			<div className="s-12">
				<button
					className="s-12 submit-form button background-primary text-white"
					type="submit"
				>
          Submit Button
				</button>
			</div>
		</form>
	);
};
