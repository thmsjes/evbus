import React, { useState } from 'react';
import('../css/calcPage.css');

function Calculate(data) {
	const errorCheck = checkCalculationData(data);
	if (errorCheck?.error) return { error: errorCheck.error };
	const buses = [
		{
			Name: 'Bus1',
			BatterySize: '210kw',
		},
		{
			Name: 'Bus2',
			BatterySize: '310kw',
		},
	];
	const chargers = [
		{ Name: 'Charger1', Type: 'AC', Level: '2', Rating: '19.2kw' },
		{ Name: 'Charger2', Type: 'DC', Level: '3', Rating: '30kw' },
	];
	const threshold1 = 168;
	const threshold2 = 248;

	const totalMilageDriven =
		parseInt(data.morningMileage) + parseInt(data.afternoonMileage);
	console.log(totalMilageDriven);

	let drivingFactor = 1.5;
	if (data.driverStyle === 'conservative')
		if (data.driverStyle === 'moderate') drivingFactor = 2.0;
	if (data.driverStyle === 'aggressive') drivingFactor = 2.5;
	const mileageCalc = totalMilageDriven * drivingFactor;

	if (mileageCalc < threshold1)
		return { Bus: buses[0], charger: chargers[0], totalMilage: mileageCalc };
	if (mileageCalc < threshold2)
		return { Bus: buses[1], charger: chargers[1], totalMilage: mileageCalc };
	if (mileageCalc > threshold2)
		return {
			Bus: 'Unalbe to match a bus as the battery will be exhaused before able to return to depot for charging',
			Message: `Battery consumption throughout the day is ${mileageCalc}kw`,
		};
}
function checkCalculationData(data) {
	if (data.morningStart === '')
		return { error: 'Missing Morning run start time ' };
	if (data.morningEnd === '') return { error: 'Morning run end time' };
	if (data.morningMileage === '') return { error: 'Missing Morning Mileage ' };
	if (data.afternoonStart === '')
		return { error: 'Missing Afternoon run start time ' };
	if (data.afternoonEnd === '')
		return { error: 'Missing Afternoon run end time ' };
	if (data.afternoonMileage === '')
		return { error: 'Missing Afternoon Mileage ' };
	return;
}
function CalcPage() {
	const [morningStart, setMorningStart] = useState('');
	const [morningEnd, setMorningEnd] = useState('');
	const [morningMileage, setmorningMileage] = useState('');
	const [afternoonStart, setAfternoonStart] = useState('');
	const [afternoonEnd, setAfternoonEnd] = useState('');
	const [afternoonMileage, setAfternoonMileage] = useState('');
	const [driverStyle, setDriverStyle] = useState('');

	const calcMap = {
		morningStart: setMorningStart,
		morningEnd: setMorningEnd,
		morningMileage: setmorningMileage,
		afternoonStart: setAfternoonStart,
		afternoonEnd: setAfternoonEnd,
		afternoonMileage: setAfternoonMileage,
		driverStyle: setDriverStyle,
	};

	function handleChange(input) {
		const inputClass = input.target.name;
		const value = input.target.value;
		return calcMap[inputClass](value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		const submitobject = {};
		if (event.target[0]) {
			submitobject[event.target[0].name] = event.target[0].value;
		}
		if (event.target[1]) {
			submitobject[event.target[1].name] = event.target[1].value;
		}
		if (event.target[2]) {
			submitobject[event.target[2].name] = event.target[2].value;
		}
		if (event.target[3]) {
			submitobject[event.target[3].name] = event.target[3].value;
		}
		if (event.target[4]) {
			submitobject[event.target[4].name] = event.target[4].value;
		}
		if (event.target[5]) {
			submitobject[event.target[5].name] = event.target[5].value;
		}
		if (event.target[6]) {
			submitobject[event.target[6].name] = event.target[6].value;
		}

		//console.log(submitobject);

		const calculation = Calculate(submitobject);
		if (calculation?.error) {
			alert(
				`Error: ${calculation.error}. Please make sure all fields are filled in.`,
			);
		} else alert(JSON.stringify(calculation));
	}

	return (
		<div className="calcContainer">
			<form className="calcForm" action="" onSubmit={handleSubmit}>
				<div className="header">Example Calculator</div>
				<input
					onChange={handleChange}
					name="morningStart"
					value={morningStart}
					type="text"
					placeholder="Morning run start time"
					className="morningStart"
				/>
				<input
					onChange={handleChange}
					name="morningEnd"
					value={morningEnd}
					type="text"
					placeholder="Morning run end time"
					className="morningEnd"
				/>
				<input
					onChange={handleChange}
					name="morningMileage"
					value={morningMileage}
					type="text"
					placeholder="Morning run mileage"
					className="morningMileage"
				/>
				<input
					onChange={handleChange}
					name="afternoonStart"
					value={afternoonStart}
					type="text"
					placeholder="Afternoon run start time"
					className="afternoonStart"
				/>
				<input
					onChange={handleChange}
					name="afternoonEnd"
					value={afternoonEnd}
					type="text"
					placeholder="Afternoon run end time"
					className="afternoonEnd"
				/>
				<input
					onChange={handleChange}
					name="afternoonMileage"
					value={afternoonMileage}
					type="text"
					placeholder="Afternoon run mileage"
					className="afternoonMileage"
				/>
				<label className="dropDownLabel">Driving Style: </label>
				<select
					name="driverStyle"
					className="driverDropDown"
					onChange={handleChange}
					value={driverStyle}>
					<option value="conservative">Conservative</option>
					<option value="moderate">Moderate</option>
					<option value="aggressive">Aggressive</option>
				</select>
				<input className="calcButton" type="submit" value="Submit" />
			</form>
		</div>
	);
}
export default CalcPage;
