import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AboutPage from './Components/About';
import WhyPage from './Components/WhyPage';
import ReviewsPage from './Components/ReviewsPage';
import CalcPage from './Components/CalcPage';
import StudyPage from './Components/StudyPage';
import ProgramPage from './Components/ProgramPage';
import SafteyPage from './Components/SafteyPage';
import ContactUsPage from './Components/ContactUsPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/register" element={<RegisterPage />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/why" element={<WhyPage />}></Route>
					<Route path="/reviews" element={<ReviewsPage />}></Route>
					<Route path="/saftey" element={<SafteyPage />}></Route>
					<Route path="/study" element={<StudyPage />}></Route>
					<Route path="/contactUs" element={<ContactUsPage />}></Route>
					<Route path="/program" element={<ProgramPage />}></Route>
					<Route path="/calc" element={<CalcPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
