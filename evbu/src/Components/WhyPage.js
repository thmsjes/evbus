import whyImage from '../images/schoolBus2.jpg';

function WhyPage() {
	return (
		<div className="whyContainer">
			<div className="whyTitleBar">Why Cornice Technologies</div>
			<div className="whyContent">
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
			<div className="whyImage">
				<img src={whyImage} alt="" />
			</div>
		</div>
	);
}
export default WhyPage;
