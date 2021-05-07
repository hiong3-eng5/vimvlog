function getvStatus() {
	var dSubj = getvSubjData()
	var below20 = checkIfHasBelow20Data(dSubj.bdy,dSubj.datemin);
	if (below20) {
		// todo: provide a way to check if there are data for kg, cm and bmi
		CdcKg(dSubj)
		CdcCm(dSubj)
		CdcBmi(dSubj)
	}
}

function getvHeight() {
	var dSubj = getvSubjData()
	var below20 = checkIfHasBelow20Data(dSubj.bdy,dSubj.datemin);
	if (below20) {
		// todo: provide a way to check if there are data for cm
		CdcCm(dSubj)
	}
}

function getvWeight() {
	var dSubj = getvSubjData()
	var below20 = checkIfHasBelow20Data(dSubj.bdy,dSubj.datemin);
	if (below20) {
		// todo: provide a way to check if there are data for kg
		CdcCm(dSubj)
	}
}

function getvBmi() {
	var dSubj = getvSubjData()
	var below20 = checkIfHasBelow20Data(dSubj.bdy,dSubj.datemin);
	if (below20) {
		// todo: provide a way to check if there are data for bmi
		CdcCm(dSubj)
	}
}

function checkIfHasBelow20Data(bday,minDate) {
	var min = moment(minDate).diff(bday, 'year', true)
//	console.log( 'min year:' + min )
	if (min < 20.001) {return true
	} else {return false}
}

function getvSubjData() {
	// todo: provide a way to check the default subj else get testSubj
	var dSubj = testSubj()
	return dSubj
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

function getSubjValueData( value, bdy, eng, dType ) { eng=eng||false; dType=dType||null
	var i = 0
	var data = []
	var typeVal = 1
	while( Object.keys(value)[i] ) {
		var mKey = Object.keys(value)[i]
		var mKeyVal = value[mKey]
		if(eng==true && dType != null) {
			switch(dType) {
				case 'inch':mKeyVal= cm2in(value[mKey]);break
				case 'lb':mKeyVal= kg2lb(value[mKey]);break
			}
		}
		data[i] = { x:moment(bdy).diff(mKey, 'year', true) * -1, y:mKeyVal }
		i++
	}
	return data
}

function getBMIm( kg, cm ) {
	return ( kg / (cm * cm) ) * 10000
}

function cm2in( cm ) {
	return cm/2.54
}

function kg2lb( kg ) {
	return kg / 0.453592737
}
