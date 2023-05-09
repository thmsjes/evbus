import programImage from '../images/program.jpg';
import '../css/programPage.css';

function ProgramPage() {
	return (
		<div className="programContainer">
			<div className="programColumns">
				<div className="card">
					<h5>How is your programs customizable to meet our needs?</h5>
					<h6>One size does not fit all!</h6>
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
					<h5>What kind or programs does Cornice Technology offer?</h5>
					<h6>WE do that.........</h6>
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
					<h5>How are your programs different from others out there?</h5>
					<h6>Imitated, but never duplicated.</h6>
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
			<img className="programImage" src={programImage} alt="" />
		</div>
	);
}
export default ProgramPage;
