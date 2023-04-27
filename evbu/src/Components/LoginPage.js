//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';

// import {
// 	Card,
// 	Button,
// 	CardImg,
// 	CardTitle,
// 	CardText,
// 	CardColumns,
// 	CardSubtitle,
// 	CardBody,
// 	CardGroup,
// } from 'reactstrap';

import '../css/loginPage.css';
import { Container } from 'reactstrap';

function Login() {
	return (
		<div className="loginContainer">
			<div className="login">
				<form action="" className="loginForm">
					<img src={Logo} alt="" className="loginImg" />
					<p className="loginP">Login</p>
					<input
						type="email"
						className="emailInput"
						placeholder="email address"
					/>
					<input
						type="password"
						placeholder="password"
						className="passwordInput"
					/>
					<button className="loginButton">Login</button>
					<p className="registerLing">
						Not Registered?
						<a classname="registerLink" href="url">
							Create an Account.
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
