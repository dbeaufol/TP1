var searchStr = '';
var inputLabel = document.querySelector('#searchLabel');
inputLabel.addEventListener('keyup', function(e){
	searchStr = inputLabel.value;
	console.log('Current research : ' + searchStr);
});
