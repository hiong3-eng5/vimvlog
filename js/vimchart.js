function testMoment() {
	console.log( moment('2011-08-31').diff('2013-11-22', 'year', true) )
}

function testSubj() {
	var subj = {
		"sub":"jt",
		"bdy":"2011-08-31",
		"bsx":"m",
		"kg":{
			'2013-11-22':13.34,
			'2014-10-10':19.5,
			'2021-03-31':59.59
		},
		"cm":{
			'2013-11-22':91.44,
			'2014-10-10':104.14,
			'2021-03-31':147.52
		}
	}
	return subj
}

function getSubjBMIdata( kg, cm, bdy ) {
	var i = 0
	var data = []
	while( Object.keys(kg)[i] ) {
	//	console.log( moment(bdy).diff(Object.keys(kg)[i], 'year', true) * -1 )
	//	console.log( Object.keys(kg)[i] )
	//	console.log( bdy )
		if( Object.keys(kg)[i] == Object.keys(cm)[i] ) {
			data[i] = { x:moment(bdy).diff(Object.keys(kg)[i], 'year', true) * -1, y:getBMIm(kg[Object.keys(kg)[i]],cm[Object.keys(cm)[i]]) }
		}
		i++
	}
	console.log(data)
	return data
}

function getBMIm( kg, cm ) {
	return ( kg / (cm * cm) ) * 10000
}

function CdcBmi() {
	var bmi=BMIdata()
	var dSubj = testSubj()
	var subjData = getSubjBMIdata(dSubj.kg, dSubj.cm, dSubj.bdy)
//	console.log(bmi[sx].g05)
	console.log(bmi)
	var sx = 'm';
	var data = {
		
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				{
					label: 'progress',
				//	data: [{x:2.5, y:13.5}, {x:2.75, y:15.5}, {x:3.1, y:16.75}, {x:4.1, y:17.85}],
					data: subjData,
					backgroundColor:'rgba(2,4,2,0.1)',
					borderColor:'rgba(20,20,20,1)',
					borderWidth: 1,
					fill:true,
					type: 'scatter'
				}, {
		//			label: '',
		//			data: [{x:2.5, y:13.5}, {x:2.75, y:15.5}, {x:3.1, y:16.75}, {x:4.1, y:17.85}],
		//		//	backgroundColor:'rgba(20,40,20,0.5)',
		//		//	borderColor:'rgba(20,20,20,0.3)',
		//			borderWidth: 2,
		//			type: 'line'
		//		}, {
			//		label: 'critically low',
			//		data: [
			//			bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2],
			//			bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2],
			//			bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2],
			//			bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[2], bmi[sx].critLow[20]
			//		],
			//		backgroundColor:'rgba(255,255,200,0.5)',
			//		borderColor:'rgba(205,205,150,1)',
			//		borderWidth: 2,
			//		pointWidth: 0.5,
			//		fill: true,
			//		type: 'line'
			//	}, {
					label: '5 pct',
					data: [
						bmi[sx].g05[2], bmi[sx].g05[3], bmi[sx].g05[4], bmi[sx].g05[5], bmi[sx].g05[6],
						bmi[sx].g05[7], bmi[sx].g05[8], bmi[sx].g05[9], bmi[sx].g05[10], bmi[sx].g05[11],
						bmi[sx].g05[12], bmi[sx].g05[13], bmi[sx].g05[14], bmi[sx].g05[15], bmi[sx].g05[16],
						bmi[sx].g05[17], bmi[sx].g05[18], bmi[sx].g05[19], bmi[sx].g05[20]
					],
					backgroundColor:'rgba(255,255,200,0.75)',
					borderColor:'rgba(205,205,150,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '10 pct',
					data: [
						bmi[sx].g10[2], bmi[sx].g10[3], bmi[sx].g10[4], bmi[sx].g10[5], bmi[sx].g10[6],
						bmi[sx].g10[7], bmi[sx].g10[8], bmi[sx].g10[9], bmi[sx].g10[10], bmi[sx].g10[11],
						bmi[sx].g10[12], bmi[sx].g10[13], bmi[sx].g10[14], bmi[sx].g10[15], bmi[sx].g10[16],
						bmi[sx].g10[17], bmi[sx].g10[18], bmi[sx].g10[19], bmi[sx].g10[20]
					],
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '25 pct',
					data: [
						bmi[sx].g25[2], bmi[sx].g25[3], bmi[sx].g25[4], bmi[sx].g25[5], bmi[sx].g25[6],
						bmi[sx].g25[7], bmi[sx].g25[8], bmi[sx].g25[9], bmi[sx].g25[10], bmi[sx].g25[11],
						bmi[sx].g25[12], bmi[sx].g25[13], bmi[sx].g25[14], bmi[sx].g25[15], bmi[sx].g25[16],
						bmi[sx].g25[17], bmi[sx].g25[18], bmi[sx].g25[19], bmi[sx].g25[20]
					],
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '50 pct',
					data: [
						bmi[sx].g50[2], bmi[sx].g50[3], bmi[sx].g50[4], bmi[sx].g50[5], bmi[sx].g50[6],
						bmi[sx].g50[7], bmi[sx].g50[8], bmi[sx].g50[9], bmi[sx].g50[10], bmi[sx].g50[11],
						bmi[sx].g50[12], bmi[sx].g50[13], bmi[sx].g50[14], bmi[sx].g50[15], bmi[sx].g50[16],
						bmi[sx].g50[17], bmi[sx].g50[18], bmi[sx].g50[19], bmi[sx].g50[20]
					],
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '75 pct',
					data: [
						bmi[sx].g75[2], bmi[sx].g75[3], bmi[sx].g75[4], bmi[sx].g75[5], bmi[sx].g75[6],
						bmi[sx].g75[7], bmi[sx].g75[8], bmi[sx].g75[9], bmi[sx].g75[10], bmi[sx].g75[11],
						bmi[sx].g75[12], bmi[sx].g75[13], bmi[sx].g75[14], bmi[sx].g75[15], bmi[sx].g75[16],
						bmi[sx].g75[17], bmi[sx].g75[18], bmi[sx].g75[19], bmi[sx].g75[20]
					],
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '85 pct',
					data: [
						bmi[sx].g85[2], bmi[sx].g85[3], bmi[sx].g85[4], bmi[sx].g85[5], bmi[sx].g85[6],
						bmi[sx].g85[7], bmi[sx].g85[8], bmi[sx].g85[9], bmi[sx].g85[10], bmi[sx].g85[11],
						bmi[sx].g85[12], bmi[sx].g85[13], bmi[sx].g85[14], bmi[sx].g85[15], bmi[sx].g85[16],
						bmi[sx].g85[17], bmi[sx].g85[18], bmi[sx].g85[19], bmi[sx].g85[20]
					],
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '90 pct (overweight)',
					data: [
						bmi[sx].g90[2], bmi[sx].g90[3], bmi[sx].g90[4], bmi[sx].g90[5], bmi[sx].g90[6],
						bmi[sx].g90[7], bmi[sx].g90[8], bmi[sx].g90[9], bmi[sx].g90[10], bmi[sx].g90[11],
						bmi[sx].g90[12], bmi[sx].g90[13], bmi[sx].g90[14], bmi[sx].g90[15], bmi[sx].g90[16],
						bmi[sx].g90[17], bmi[sx].g90[18], bmi[sx].g90[19], bmi[sx].g90[20]
					],
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: '95 pct',
					data: [
						bmi[sx].g95[2], bmi[sx].g95[3], bmi[sx].g95[4], bmi[sx].g95[5], bmi[sx].g95[6],
						bmi[sx].g95[7], bmi[sx].g95[8], bmi[sx].g95[9], bmi[sx].g95[10], bmi[sx].g95[11],
						bmi[sx].g95[12], bmi[sx].g95[13], bmi[sx].g95[14], bmi[sx].g95[15], bmi[sx].g95[16],
						bmi[sx].g95[17], bmi[sx].g95[18], bmi[sx].g95[19], bmi[sx].g95[20]
					],
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}, {
					label: 'obese',
					data: [
						bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2],
						bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2],
						bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2],
						bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[2], bmi[sx].critHigh[20]
					],
					backgroundColor:'rgba(255,175,175,0.75)',
					borderColor:'rgba(205,125,125,1)',
					borderWidth: 2,
					pointWidth: 0.5,
					fill: true,
					type: 'line'
				}
			]
		}
	}
	console.log( data )
	var ctx = document.getElementById('bmiChart');
	var myChart = new Chart( ctx, data );
}
