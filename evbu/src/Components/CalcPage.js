import React, { useState } from 'react';

import TimePick from './TimePick';

import('../css/calcPage.css');

function Calculate(data) {
	const timeToCharge = handleTime(data);
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
		{
			Name: 'Charger1',
			Type: 'AC',
			Level: '2',
			Rating: '19.2kw',
			actual: 16.2,
		},
		{ Name: 'Charger2', Type: 'DC', Level: '3', Rating: '30kw', actual: 30 },
	];
	const threshold1 = 168;
	const threshold2 = 248;
	let drivingFactor = 1.5;
	if (data.driverStyle === 'conservative')
		if (data.driverStyle === 'moderate') drivingFactor = 2.0;
	if (data.driverStyle === 'aggressive') drivingFactor = 2.5;

	const kwUsedMorning = parseInt(data.morningMileage) * drivingFactor;

	const charger1AddedKw = chargers[0].actual * timeToCharge;
	const charger2AddedKw = chargers[1].actual * timeToCharge;

	const batteryUsedMorningCharger1 = batteryUsed(
		kwUsedMorning,
		charger1AddedKw,
	);
	const batteryUsedMorningCharger2 = batteryUsed(
		kwUsedMorning,
		charger2AddedKw,
	);

	const totalMilageDriven =
		parseInt(data.morningMileage) + parseInt(data.afternoonMileage);

	const mileageCalc = totalMilageDriven * drivingFactor;

	const kwUsedevening = parseInt(data.afternoonMileage) * drivingFactor;

	const totalKwUsedCharge1 = batteryUsedMorningCharger1 + kwUsedevening;
	const totalKwUsedCharge2 = batteryUsedMorningCharger2 + kwUsedevening;

	if (totalKwUsedCharge1 < threshold1) {
		return {
			Bus: buses[0],
			charger: chargers[0],
			totalMilage: totalMilageDriven,
			totalKwConsumption: parseFloat(mileageCalc).toFixed(2),
			totalChargeTime: parseFloat(timeToCharge).toFixed(2),
			totalChargeKw: parseFloat(charger1AddedKw).toFixed(2),
		};
	}
	if (totalKwUsedCharge2 < threshold1) {
		return {
			Bus: buses[0],
			charger: chargers[1],
			totalMilage: totalMilageDriven,
			totalKwConsumption: parseFloat(mileageCalc).toFixed(2),
			totalChargeTime: parseFloat(timeToCharge).toFixed(2),
			totalChargeKw: parseFloat(charger1AddedKw).toFixed(2),
		};
	}
	if (totalKwUsedCharge1 < threshold2) {
		return {
			Bus: buses[1],
			charger: chargers[0],
			totalMilage: totalMilageDriven,
			totalKwConsumption: parseFloat(mileageCalc).toFixed(2),
			totalChargeTime: parseFloat(timeToCharge).toFixed(2),
			totalChargeKw: parseFloat(charger1AddedKw).toFixed(2),
		};
	}
	if (totalKwUsedCharge2 < threshold2) {
		return {
			Bus: buses[1],
			charger: chargers[1],
			totalMilage: totalMilageDriven,
			totalKwConsumption: parseFloat(mileageCalc).toFixed(2),
			totalChargeTime: parseFloat(timeToCharge).toFixed(2),
			totalChargeKw: parseFloat(charger1AddedKw).toFixed(2),
		};
	} else
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
function handleTime(data) {
	const morningEndTime = data['Morning Run End Time: '];
	const afternoonStartTime = data['Afternoon Run Start Time: '];
	return setTimes(morningEndTime, afternoonStartTime);
}
function batteryUsed(used, added) {
	if (added > used) return 0;
	if (added < used) return used - added;
}

function setTimes(startTime, endTime) {
	const s = startTime.split(':');
	const e = endTime.split(':');
	const end = new Date(0, 0, 0, parseInt(e[0], 10), parseInt(e[1], 10), 0);
	const start = new Date(0, 0, 0, parseInt(s[0], 10), parseInt(s[1], 10), 0);
	const elapsedMs = end - start;

	const elapsedMinutes = elapsedMs / 1000 / 60 / 60;
	const chargeHours = elapsedMinutes * 0.85;

	return parseFloat(chargeHours);
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
		'Morning Run Start Time: ': setMorningStart,
		'Morning Run End Time: ': setMorningEnd,
		morningMileage: setmorningMileage,
		'Afternoon Run Start Time: ': setAfternoonStart,
		'Afternoon Run End Time: ': setAfternoonEnd,
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

		const calculation = Calculate(submitobject);
		if (calculation?.error) {
			alert(
				`Error: ${calculation.error}. Please make sure all fields are filled in.`,
			);
			console.log(JSON.stringify(calculation));
		} else alert(JSON.stringify(calculation));
	}
	return (
		<div className="calcContainer">
			<form className="calcForm" action="" onSubmit={handleSubmit}>
				<div className="header">Example Calculator</div>
				<div>
					<TimePick
						name="Morning Run Start Time: "
						type="time"
						value={morningStart}
						onChange={handleChange}
					/>
					<TimePick name="Morning Run End Time: " value={morningEnd} />
					<input
						onChange={handleChange}
						name="morningMileage"
						value={morningMileage}
						type="text"
						placeholder="Morning run mileage"
						className="morningMileage"
					/>
					<TimePick
						name="Afternoon Run Start Time: "
						onChange={handleChange}
						value={afternoonStart}
					/>
					<TimePick
						name="Afternoon Run End Time: "
						onChange={handleChange}
						value={afternoonEnd}
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
				</div>
			</form>
		</div>
	);
}

export default CalcPage;
