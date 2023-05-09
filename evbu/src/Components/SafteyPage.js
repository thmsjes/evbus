import safteyImage from '../images/saftey.jpg';
import '../css/safteyPage.css';

function SafteyPage() {
	return (
		<div className="safteyContainer">
			<div className="safteyColumns">
				<div className="card">
					<h5>Why must our thought on Saftey change?</h5>
					<h6>Battery</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						deleniti possimus accusamus maiores error vero et, iste amet illo.
						Nulla nobis repellendus illo voluptatibus neque repudiandae quisquam
						accusantium provident consequatur! Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Quos quod pariatur obcaecati quaerat
						officia vero beatae, et quibusdam sed dolore asperiores facere a
						nesciunt magni mollitia qui nihil dolorum ad. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Beatae repellendus blanditiis
						minus? Quaerat, incidunt cum a ab quo commodi vero culpa, ea dolorem
						laudantium aliquam et sequi eaque voluptatem officiis!
					</p>
				</div>
				<div className="card">
					<h5>What kind of training is required to service these buses?</h5>
					<h6>Danger Will Robinson!!!!</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						deleniti possimus accusamus maiores error vero et, iste amet illo.
						Nulla nobis repellendus illo voluptatibus neque repudiandae quisquam
						accusantium provident consequatur! Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Quos quod pariatur obcaecati quaerat
						officia vero beatae, et quibusdam sed dolore asperiores facere a
						nesciunt magni mollitia qui nihil dolorum ad. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Beatae repellendus blanditiis
						minus? Quaerat, incidunt cum a ab quo commodi vero culpa, ea dolorem
						laudantium aliquam et sequi eaque voluptatem officiis!
					</p>
				</div>
				<div className="card">
					<h5>How can Cornice Technology help us with a Saftey Program?</h5>
					<h6>Complete, Central, Available</h6>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
						deleniti possimus accusamus maiores error vero et, iste amet illo.
						Nulla nobis repellendus illo voluptatibus neque repudiandae quisquam
						accusantium provident consequatur! Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Quos quod pariatur obcaecati quaerat
						officia vero beatae, et quibusdam sed dolore asperiores facere a
						nesciunt magni mollitia qui nihil dolorum ad. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Beatae repellendus blanditiis
						minus? Quaerat, incidunt cum a ab quo commodi vero culpa, ea dolorem
						laudantium aliquam et sequi eaque voluptatem officiis!
					</p>
				</div>
			</div>
			<div>
				<a href="/contactUs" rel="noopener noreferrer">
					<button className="contactUsButton">Request a Quote</button>
				</a>
			</div>
			<img className="safteyImage" src={safteyImage} alt="" />
		</div>
	);
}
export default SafteyPage;
