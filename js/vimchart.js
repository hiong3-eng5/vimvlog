function testSubj() {
	var subj = {
		"sub":"jt",
		"bdy":"2011-08-31",
		"bsx":"m",
		"kg":{
			'2013-11-22':13.34,
			'2014-10-10':19.5,
			'2015-09-15':23.13,
			'2016-04-04':23.13,
			'2017-07-23':32.02,
			'2017-07-30':32.29,
			'2017-08-13':33.38,
			'2017-08-27':33.11,
			'2017-09-10':33.92,
			'2017-10-01':34.1,
			'2017-11-12':34.38,
			'2017-11-30':35.1,
			'2017-12-30':36.55,
			'2018-02-04':38,
			'2018-03-04':38.1,
			'2018-04-08':38.73,
			'2018-05-06':39.46,
			'2018-05-27':38.91,
			'2018-07-01':39.36,
			'2018-08-05':40.54,
			'2018-09-02':40.63,
			'2018-09-30':41.72,
			'2018-10-28':42.18,
			'2018-11-25':42.09,
			'2018-12-30':43.54,
			'2019-02-06':44.72,
			'2019-03-10':44.54,
			'2019-03-31':45.08,
			'2019-04-30':45.35,
			'2019-06-09':46.53,
			'2019-06-30':47.16,
			'2019-08-04':48.14,
			'2019-09-08':48.62,
			'2019-10-06':48.07,
			'2019-11-03':49.35,
			'2019-12-08':51.05,
			'2020-01-25':50.4,
			'2020-03-08':52.4,
			'2020-03-29':51.95,
			'2020-05-01':50.8,
			'2020-05-31':50.4,
			'2020-06-28':49.4,
			'2020-07-31':49.45,
			'2020-08-31':50.6,
			'2020-09-27':51.64,
			'2020-10-25':53.69,
			'2020-11-29':53.7,
			'2020-12-31':55.7,
			'2021-01-31':57.3,
			'2021-02-28':58.6,
			'2021-03-31':59.59
		},
		"cm":{
			'2013-11-22':91.44,
			'2014-10-10':104.14,
			'2015-09-15':109.22,
			'2016-04-04':111.76,
			'2017-07-23':121.15,
			'2017-07-30':122,
			'2017-08-13':122.75,
			'2017-08-27':123.25,
			'2017-09-10':123.25,
			'2017-10-01':124,
			'2017-11-12':124.1,
			'2017-11-30':124.1,
			'2017-12-30':124.5,
			'2018-02-04':126,
			'2018-03-04':126.5,
			'2018-04-08':127.25,
			'2018-05-06':128.25,
			'2018-05-27':128.5,
			'2018-07-01':129.25,
			'2018-08-05':130,
			'2018-09-02':130.5,
			'2018-09-30':131.5,
			'2018-10-28':131.5,
			'2018-11-25':131.5,
			'2018-12-30':132.25,
			'2019-02-06':133.75,
			'2019-03-10':134.5,
			'2019-03-31':135.25,
			'2019-04-30':135.25,
			'2019-06-09':136.25,
			'2019-06-30':136.5,
			'2019-08-04':138.25,
			'2019-09-08':139,
			'2019-10-06':139,
			'2019-11-03':140,
			'2019-12-08':140,
			'2020-01-25':140.5,
			'2020-03-08':141.75,
			'2020-03-29':141.75,
			'2020-05-01':142.25,
			'2020-05-31':143,
			'2020-06-28':143.25,
			'2020-07-31':143.35,
			'2020-08-31':144.2,
			'2020-09-27':144.2,
			'2020-10-25':144.5,
			'2020-11-29':146,
			'2020-12-31':146,
			'2021-01-31':146.5,
			'2021-02-28':147.52,
			'2021-03-31':147.52
		}
	}
	return subj
}

function getSubjBMIdata( kg, cm, bdy ) {
	var i = 0
	var data = []
	while( Object.keys(kg)[i] ) {
		if(cm.hasOwnProperty(Object.keys(kg)[i])){
			var mKey = Object.keys(kg)[i]
			data[i] = { x:moment(bdy).diff(mKey, 'year', true) * -1, y:getBMIm(kg[mKey],cm[mKey]) }
		}
		i++
	}
	return data
}

function getSubjValueData( value, bdy ) {
	var i = 0
	var data = []
	while( Object.keys(value)[i] ) {
		var mKey = Object.keys(value)[i]
		data[i] = { x:moment(bdy).diff(mKey, 'year', true) * -1, y:value[mKey] }
		i++
	}
	return data
}

function getBMIm( kg, cm ) {
	return ( kg / (cm * cm) ) * 10000
}

function getCdcPlotData( data ) {
	var i = 2
	var ii = 0
	var nData = []
	while( i < 21 ) {
		nData[ii] = data[i]
		i++
		ii++
	}
	return nData
}

function CdcCm() {
	var cm=cmData()
	var dSubj = testSubj()
	var subjData = getSubjValueData(dSubj.cm, dSubj.bdy)
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				{
					label: dSubj['sub'],
					data: subjData,
					backgroundColor:'rgba(2,4,2,0.1)',
					borderColor:'rgba(20,20,20,0.85)',
					borderWidth: 0.5,
					showLine:true,
					pointRadius: 1.75,
					type: 'scatter'
				}, {
					label: '5 pct',
					data: getCdcPlotData( cm[sx]['g05'] ),
					backgroundColor:'rgba(255,255,200,0.75)',
					borderColor:'rgba(205,205,150,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '10 pct',
					data: getCdcPlotData( cm[sx]['g10'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '25 pct',
					data: getCdcPlotData( cm[sx]['g25'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '50 pct',
					data: getCdcPlotData( cm[sx]['g50'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '75 pct',
					data: getCdcPlotData( cm[sx]['g75'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '90 pct',
					data: getCdcPlotData( cm[sx]['g90'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '95 pct',
					data: getCdcPlotData( cm[sx]['g95'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}
			],
			options: {
				plugins: {
					title: {
						display: 1,
						position: 'top',
						text: dSubj['sub'] + "'s Height"
					}
				}
			}
		}
	}
	var ctx = document.getElementById('cmChart');
	var myChart = new Chart( ctx, data );
}

function CdcKg() {
	var kg=kgData()
	var dSubj = testSubj()
	var subjData = getSubjValueData(dSubj.kg, dSubj.bdy)
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				{
					label: dSubj['sub'],
					data: subjData,
					backgroundColor:'rgba(2,4,2,0.1)',
					borderColor:'rgba(20,20,20,0.85)',
					borderWidth: 0.5,
					showLine:true,
					pointRadius: 1.75,
					type: 'scatter'
				}, {
					label: '5 pct',
					data: getCdcPlotData( kg[sx]['g05'] ),
					backgroundColor:'rgba(255,255,200,0.75)',
					borderColor:'rgba(205,205,150,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '10 pct',
					data: getCdcPlotData( kg[sx]['g10'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '25 pct',
					data: getCdcPlotData( kg[sx]['g25'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '50 pct',
					data: getCdcPlotData( kg[sx]['g50'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '75 pct',
					data: getCdcPlotData( kg[sx]['g75'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '90 pct',
					data: getCdcPlotData( kg[sx]['g90'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '95 pct',
					data: getCdcPlotData( kg[sx]['g95'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}
			],
			options: {
				plugins: {
					title: {
						display: 1,
						position: 'top',
						text: dSubj['sub'] + "'s Weight"
					}
				}
			}
		}
	}
	var ctx = document.getElementById('kgChart');
	var myChart = new Chart( ctx, data );
}

function CdcBmi() {
	var bmi=BMIdata()
	var dSubj = testSubj()
	var subjData = getSubjBMIdata(dSubj.kg, dSubj.cm, dSubj.bdy)
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				{
					label: dSubj['sub'],
					data: subjData,
					backgroundColor:'rgba(2,4,2,0.1)',
					borderColor:'rgba(20,20,20,0.85)',
					borderWidth: 0.5,
					showLine:true,
					pointRadius: 1.75,
					type: 'scatter'
				}, {
					label: '5 pct',
					data: getCdcPlotData( bmi[sx]['g05'] ),
					backgroundColor:'rgba(255,255,200,0.75)',
					borderColor:'rgba(205,205,150,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '10 pct',
					data: getCdcPlotData( bmi[sx]['g10'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '25 pct',
					data: getCdcPlotData( bmi[sx]['g25'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '50 pct',
					data: getCdcPlotData( bmi[sx]['g50'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '75 pct',
					data: getCdcPlotData( bmi[sx]['g75'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '85 pct',
					data: getCdcPlotData( bmi[sx]['g85'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '90 pct (overweight)',
					data: getCdcPlotData( bmi[sx]['g90'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}, {
					label: '95 pct',
					data: getCdcPlotData( bmi[sx]['g95'] ),
					backgroundColor:'rgba(255,200,255,0.75)',
					borderColor:'rgba(205,150,205,1)',
					borderWidth: 2,
					pointRadius: 1.5,
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
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				}
			],
			options: {
				plugins: {
					title: {
						display: 1,
						position: 'top',
						text: dSubj['sub'] + "'s BMI"
					}
				}
			}
		}
	}
	var ctx = document.getElementById('bmiChart');
	var myChart = new Chart( ctx, data );
}
