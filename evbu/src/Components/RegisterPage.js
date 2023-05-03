import React, { useState } from 'react';

import '../css/registerPage.css';
import Logo from '../images/logo.png';
function Register() {
	const [value, setValue] = useState('');

	function formatPhoneNumber(phoneInput) {
		let value = phoneInput.target.value;
		if (value.length <= 3) {
			setValue(value);
		}
		if (value.length === 4 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(1, 4);
			setValue(`${areaCode}`);
		}
		if (value.length === 5 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(1, 4);
			setValue(`${areaCode}`);
		}
		if (value.length <= 7 && value.length > 3 && phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 3);
			const firstThree = value.substring(3, 7);
			setValue(`(${areaCode}) ${firstThree}`);
		}
		if (value.length === 5 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 5);
			setValue(`${areaCode}`);
		}
		if (value.length <= 7 && value.length > 5 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 5);
			const nextSet = value.substring(5, 9);
			setValue(`${areaCode}${nextSet}`);
		}
		if (value.length <= 9 && value.length > 7) {
			const areaCode = value.substring(0, 5);
			const nextSet = value.substring(5, 9);
			setValue(`${areaCode}${nextSet}`);
		}
		if (value.length === 8 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 5);
			const nextSet = value.substring(5, 9);
			setValue(`${areaCode}${nextSet}`);
		}

		if (value.length === 9) {
			const areaCode = value.substring(0, 5);
			const firstThree = value.substring(5, 10);
			setValue(`${areaCode}${firstThree}`);
		}
		if (value.length === 10 && phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 5);
			const firstThree = value.substring(5, 9);
			const lastFour = value.substring(9, 11);
			setValue(`${areaCode}${firstThree}-${lastFour}`);
		}
		if (value.length === 10 && !phoneInput.nativeEvent.data) {
			const areaCode = value.substring(0, 5);
			const firstThree = value.substring(5, 9);
			const lastFour = value.substring(9, 11);
			setValue(`${areaCode}${firstThree}${lastFour}`);
		}
		if (value.length <= 14 && value.length > 10) {
			const areaCode = value.substring(0, 5);
			const firstThree = value.substring(5, 9);
			const lastFour = value.substring(9, 14);
			setValue(`${areaCode}${firstThree}${lastFour}`);
		}
	}
	return (
		<div className="registerContainer">
			<div className="register">
				<form action="" className="registerForm">
					<img src={Logo} alt="" className="registerImg" />
					<p className="registerP">Register</p>
					<input
						type="email"
						className="emailInput"
						placeholder="email address"
					/>
					<input
						type="text"
						placeholder="first name"
						className="firstNameInput"
					/>
					<input type="text" placeholder="last name" className="lastInput" />
					<input
						type="text"
						placeholder="school district name"
						className="schoolInput"
					/>
					<input
						onChange={formatPhoneNumber}
						value={value}
						type="tel"
						placeholder="phone number"
						className="phoneInput"
					/>
					<button className="registerButton">Register</button>
					<p className="loginLink">
						Already Registered?
						<a className="loginLink" href="/login">
							Login
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Register;
