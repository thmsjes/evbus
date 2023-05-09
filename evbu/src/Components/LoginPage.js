import Logo from '../images/logo.png';
import '../css/loginPage.css';

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
						<a className="registerLink" href="/register">
							Create an Account.
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
