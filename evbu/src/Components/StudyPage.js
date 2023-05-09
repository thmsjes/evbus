import '../css/studyPage.css';

function StudyPage() {
	return (
		<div className="studyContainer">
			<div className="studyTitleBar">Ready to dig in?</div>
			<div className="studyContent">
				<h1>Study</h1>
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
			<a href="/contactUs" rel="noopener noreferrer">
				<button className="contactUsButton">Request a Quote</button>
			</a>
		</div>
	);
}
export default StudyPage;
