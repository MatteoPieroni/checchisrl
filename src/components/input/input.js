import React from 'react';

export const Input = ({ name, id, className, type, label, error, onChange, onBlur, isRequired }) => {

	if (type === 'textarea') {
		return (
			<>
				<label htmlFor={id}>{label}{isRequired && '*'}</label>
				<textarea
					name={name}
					id={id}
					className={className}
					onChange={onChange}
					onBlur={onBlur}
					required={isRequired}
					rows="3"
				/>
				{error && <span className="input-error">{error}</span>}
			</>
		);
	}

	return (
		<>
			<label htmlFor={id}>{label}{isRequired && '*'}</label>
			<input
				name={name}
				id={id}
				className={className}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				required={isRequired}
			/>
			{error && <span className="input-error">{error}</span>}
		</>
	);
};