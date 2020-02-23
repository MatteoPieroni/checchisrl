import React, { useState } from 'react';
import axios from 'axios';
import { Input } from '../input';

const isValid = value => value && value.trim().length > 0;
const EMPTY_ERROR = 'Sembra che questo campo sia vuoto, ricontrolla per favore';

export const ContactForm = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [formError, setFormError] = useState(false);
	const [formData, setFormData] = useState({
		values: {},
		errors: {},
		touched: {},
	});
	const honeypotRef = React.createRef();

	const handleChange = event => {
		const { target: { name, value } } = event;
		
		setFormData({
			...formData,
			values: {
				...formData.values,
				[name]: value,
			},
			errors: {
				...formData.errors,
				...(!!formData.touched[name] || (isValid(value) ? { [name]: '' } : { [name]: EMPTY_ERROR, })),
			},
		});
	};

	const handleBlur = event => {
		const { target: { name, value } } = event;

		setFormData({
			...formData,
			errors: {
				...formData.errors,
				...(isValid(value) ? { [name]: '' } : { [name]: EMPTY_ERROR, }),
			},
			touched: {
				...formData.touched,
				[name]: true,
			}
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = formData.values;

		setFormError(false);
		setIsSuccess(false);

		const isHoneypotFilled = formData.values.honeypot;
		if (isHoneypotFilled || honeypotRef.current.value) {
			return;
		}

		const errors = Object.values(formData.errors).some(value => !!value);
		if (errors) {
			return;
		}

		try {
			await axios({
				url: process.env.FORM_URL,
				method: 'POST',
				crossDomain: true,
				data,
				dataType: 'json',
				contentType: 'multipart/form-data',
				processData: false,
				headers: {
					'Accept': 'application/json'
				}
			});

			setFormError(false);
			setIsSuccess(true);
			setFormData({
				values: {},
				errors: {},
				touched: {},
			});
		} catch(e) {
			setFormError(true);
			console.log(e);
		}
	};

	const buildInputHandlers = name => ({
		onBlur: handleBlur,
		onChange: handleChange,
		error: formData.errors[name],
	});

	return (
		<>
			{isSuccess && (
				<div className="margin-top-30 margin-bottom-30 text-s-size30 text-center">
					<p className="success-notification">Grazie per averci contattati</p>
				</div>
			)}
			{formError && (
				<div className="margin-top-30 margin-bottom-30 text-s-size30 text-center">
					<p className="error-notification">C&apos;è stato un problema, si prega di riprovare</p>
				</div>
			)}
			<form name="contact" onSubmit={handleSubmit} className="customform">
				<div className="s-12">
					<div className="margin">
						<div className="s-12 margin-bottom-15">
							<Input
								label="Nome"
								name="name"
								id="contact-name"
								className="required email"
								type="text"
								isRequired
								{...buildInputHandlers('name')}
							/>
						</div>
						<div className="s-12 margin-bottom-15">
							<Input
								label="Email"
								name="email"
								id="contact-email"
								className="name"
								type="email"
								isRequired
								{...buildInputHandlers('email')}
							/>
						</div>
						<div className="s-12 margin-bottom-15">
							<Input
								label="Messaggio"
								type="textarea"
								name="message"
								id="contact-message"
								className="required message"
								isRequired
								{...buildInputHandlers('message')}
							/>
						</div>
						<input className="hidden" name="honeypot" type="text" ref={honeypotRef} />
					</div>
				</div>
				<div className="s-12">
					<button
						className="s-12 submit-form button text-white"
						type="submit"
					>
          Invia la mail
					</button>
				</div>
			</form>
		</>
	);
};
