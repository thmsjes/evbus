import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
	Card,
	Button,
	CardImg,
	CardTitle,
	CardText,
	CardColumns,
	CardSubtitle,
	CardBody,
	CardGroup,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/homePage.css';
function HomePage() {
	return (
		<CardGroup>
			<Card>
				<CardBody>
					<CardTitle>About Cornice Technology</CardTitle>
					<CardSubtitle>How it started</CardSubtitle>
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
						elit cursus, pellentesque dolor sed, fringilla augue. Donec bibendum
						nibh et auctor eleifend.
					</CardText>
					<Button>About</Button>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<CardTitle>Why Cornice Technology</CardTitle>
					<CardSubtitle>One stop shop</CardSubtitle>
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
						elit cursus, pellentesque dolor sed, fringilla augue. Donec bibendum
						nibh et auctor eleifend.
					</CardText>
					<Button>Why</Button>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
					<CardTitle>Reviews</CardTitle>
					<CardSubtitle> What our clients have to say</CardSubtitle>
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
						elit cursus, pellentesque dolor sed, fringilla augue. Donec bibendum
						nibh et auctor eleifend.
					</CardText>
					<Button>Reviews</Button>
				</CardBody>
			</Card>
		</CardGroup>
	);
}
export default HomePage;
