var db;
var request = window.indexedDB.open( "vimlog", 1 )

request.onerror = function( event ) {
	console.log( 'IndexedDB not supported.' )
}

request.onsuccess = function( event ) {
	db = event.target.result
	console.log( 'ok' )
	db.onerror = function(event) {
		console.log( 'Database error: ' + event.target.errorCode )
	}
}

request.onupgradeneeded = function( event ) {
	console.log('upgrading...')
	var db = event.target.result

	var subjObSt = db.createObjectStore( "subj", { keyPath: "id" } )
	var subjBMIObSt = db.createObjectStore( "subjBmi", { keyPath: "id" }, {autoIncrement: true} )
	var subjKgsObSt = db.createObjectStore( "subjKgs", { keyPath: "id" }, {autoIncrement: true} )
	var subjCmsObSt = db.createObjectStore( "subjCms", { keyPath: "id" }, {autoIncrement: true} )

	var dSubjObSt = db.createObjectStore( "dSubj", { keyPath: "id" } )
}
