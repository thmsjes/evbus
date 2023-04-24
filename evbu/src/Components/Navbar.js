import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';

import '../css/navigation.css';

function Navbar() {
	return (
		<div className="navbar">
			<div className="leftSide">
				<img src={Logo} alt="LOGO" />
			</div>
			<div className="rightSide">
				<Link to="/"> Home </Link>
				<Link to="/login"> Login </Link>
				<Link to="/about"> About </Link>
				<Link to="/calc"> Calculator</Link>
				<Link to="/study"> Study</Link>
				<Link to="/program"> Program </Link>
				<Link to="/saftey"> Saftey</Link>
			</div>
		</div>
	);
}

export default Navbar;
