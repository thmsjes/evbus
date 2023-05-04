import reviewsImage from '../images/schoolBus3.jpg';

function ReviewsPage() {
	return (
		<div className="reviewsContainer">
			<div className="reviewsTitleBar">What Our Clients Have To Say</div>
			<div className="reviewsContent">
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
			<div className="reviewsImage">
				<img src={reviewsImage} alt="" />
			</div>
		</div>
	);
}
export default ReviewsPage;
