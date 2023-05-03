import aboutImage from '../images/schoolBus1.jpg';

function AboutPage() {
	return (
		<div className="aboutContainer">
			<div className="aboutTitleBar">What is Cornice Technologies</div>
			<div className="aboutContent">
				<h1>LORUM IPSUM</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
					exercitationem repudiandae odio reiciendis ullam dolorum autem tempore
					maxime inventore! Ea consectetur tempore obcaecati magni optio, nam
					quo ipsum nihil exercitationem.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
					praesentium, dignissimos quia libero aspernatur itaque debitis illum
					nobis quidem facere nostrum voluptatem perspiciatis rerum consequuntur
					obcaecati ut. Quas, praesentium temporibus!
				</p>
			</div>
			<div className="aboutImage">
				<img src={aboutImage} alt="" />
			</div>
		</div>
	);
}
export default AboutPage;
