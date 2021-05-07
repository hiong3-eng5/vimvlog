function getCdcPlotData( data, eng, dType ) { eng=eng||false; dType=dType||null
	var i = 2
	var ii = 0
	var nData = []
	while( i < 21 ) {
		dData = data[i]
		if(eng==true && dType != null) {
			switch(dType) {
				case 'inch':var dData= cm2in(dData);break
				case 'lb':var dData= kg2lb(dData);break
			}
		}
		nData[ii] = dData
	//	console.log(dData)
		i++
		ii++
	}
	return nData
}

function getSubjDataSet( dLabel, dData ) {
	return {
		label: dLabel,
		data: dData,
		backgroundColor:'rgba(2,4,2,0.1)',
		borderColor:'rgba(20,20,20,0.85)',
		borderWidth: 0.5,
		showLine:true,
		pointRadius: 1.75,
		type: 'scatter'
	}
}
function getCdcDataSet( percentile, dlabel, data, eng, dType ) { eng=eng||false; dType=dType||null
	switch(percentile){
		case 'g05':bg='rgba(255,255,200,0.75)';bdr='rgba(205,205,150,1)';break
		case 'g10':bg='rgba(175,255,175,0.75)';bdr='rgba(125,205,125,1)';break
		case 'g25':bg='rgba(175,255,175,0.75)';bdr='rgba(125,205,125,1)';break
		case 'g50':bg='rgba(175,255,175,0.75)';bdr='rgba(125,205,125,1)';break
		case 'g75':bg='rgba(255,200,255,0.75)';bdr='rgba(205,150,205,1)';break
		case 'g90':bg='rgba(255,200,255,0.75)';bdr='rgba(205,150,205,1)';break
		case 'g95':bg='rgba(255,200,255,0.75)';bdr='rgba(205,150,205,1)';break
		case 'g85':bg='rgba(175,255,175,0.75)';bdr='rgba(125,205,125,1)';break
		default:break
	}
	return {
		label: dlabel,
		data: getCdcPlotData( data, eng, dType ),
		backgroundColor:bg,
		borderColor:bdr,
		borderWidth: 2,
		pointRadius: 1.5,
		fill: true,
		type: 'line'
	}
}

function CdcCm(dSubj) {
	var cm=cmData()
	var subjData = getSubjValueData(dSubj.cm, dSubj.bdy, dSubj.eng, 'inch')
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				getSubjDataSet( dSubj['sub'] + "'s height", subjData ),
				getCdcDataSet( 'g05', '5 pct', cm[sx]['g05'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g10', '10 pct', cm[sx]['g10'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g25', '25 pct', cm[sx]['g25'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g50', '50 pct', cm[sx]['g50'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g75', '75 pct', cm[sx]['g75'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g90', '90 pct', cm[sx]['g90'], dSubj.eng, 'inch' ),
				getCdcDataSet( 'g95', '95 pct', cm[sx]['g95'], dSubj.eng, 'inch' ),
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

function CdcKg(dSubj) {
	var kg=kgData()
	var subjData = getSubjValueData(dSubj.kg, dSubj.bdy, dSubj.eng, 'lb')
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				getSubjDataSet( dSubj['sub'] + "'s weight", subjData ),
				getCdcDataSet( 'g05', '5 pct', kg[sx]['g05'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g10', '10 pct', kg[sx]['g10'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g25', '25 pct', kg[sx]['g25'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g50', '50 pct', kg[sx]['g50'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g75', '75 pct', kg[sx]['g75'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g90', '90 pct', kg[sx]['g90'], dSubj.eng, 'lb' ),
				getCdcDataSet( 'g95', '95 pct', kg[sx]['g95'], dSubj.eng, 'lb' ),
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

function CdcBmi(dSubj) {
	var bmi=BMIdata()
	var subjData = getSubjBMIdata(dSubj.kg, dSubj.cm, dSubj.bdy)
	var sx = dSubj.bsx
	var data = {
		data: {
			labels: [
				'2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
				'12', '13', '14', '15', '16', '17', '18', '19', '20'
			],
			datasets: [
				getSubjDataSet( dSubj['sub'] + "'s BMI", subjData ),
				getCdcDataSet( 'g05', '5 pct', bmi[sx]['g05'] ),
				getCdcDataSet( 'g10', '10 pct', bmi[sx]['g10'] ),
				getCdcDataSet( 'g25', '25 pct', bmi[sx]['g25'] ),
				getCdcDataSet( 'g50', '50 pct', bmi[sx]['g50'] ),
				{
					label: '75 pct',
					data: getCdcPlotData( bmi[sx]['g75'] ),
					backgroundColor:'rgba(175,255,175,0.75)',
					borderColor:'rgba(125,205,125,1)',
					borderWidth: 2,
					pointRadius: 1.5,
					fill: true,
					type: 'line'
				},
				getCdcDataSet( 'g85', '85 pct', bmi[sx]['g85'] ),
				getCdcDataSet( 'g90', '90 pct (overweight)', bmi[sx]['g90'] ),
				getCdcDataSet( 'g95', '95 pct', bmi[sx]['g95'] ),
				{
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
