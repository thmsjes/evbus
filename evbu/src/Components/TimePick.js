import React, { useState, useEffect } from 'react';

//import 'react-clock/dist/Clock.css';

function TimePick(props) {
	const { name } = props;

	const [time, setTime] = useState('00:00');
	function timeChange(data) {
		const value = data.target.value;
		setTime(value);
	}
	return (
		<div>
			<label>{name}</label>
			<input type="time" onChange={timeChange} value={time} name={name} />
		</div>
	);
}

export default TimePick;
