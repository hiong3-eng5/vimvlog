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
	var objectStore = db.createObjectStore( "currentsubj", {keyPath: "name"} )
	var subjectObSt = db.createObjectStore( "subj", {keyPath: "name"} )
}
