$(window).load(function(){

	document.querySelector('#SDCslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#D').value = Math.floor(mins);
	  document.querySelector('#E').value = Math.floor(xtra);
	});

	document.querySelector('#RunTimeslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#G').value = Math.floor(mins);
	  document.querySelector('#H').value = Math.floor(xtra);
	});

  // SDC Run Time
	D.onkeyup = function() {
		if(parseInt(this.value) > 59) {
			this.value = 59;
		};
		if(E.value.length == "" | E.value.length == null) {
			SDCslider.value = (parseFloat(D.value) * parseFloat(60))
		};
		if(E.value != "") {
			SDCslider.value = (parseFloat(D.value) * parseFloat(60)) + parseFloat(E.value)
		};
		if(D.value == "" | D.value == null) {
			SDCslider.value = parseFloat(E.value)
		};
		if((D.value == "" | D.value == null) & (E.value =="" | E.value == null)) {
			SDCslider.value = 0
		};
	};
	E.onkeyup = function() {
		if(parseInt(this.value) > 59) {
			this.value = 59;
		};
		if(D.value.length == "" | D.value.length == null) {
			SDCslider.value = parseFloat(E.value)
		};
		if(D.value != "") {
			SDCslider.value = (parseFloat(D.value) * parseFloat(60)) + parseFloat(E.value)
		};
		if(E.value == "" | E.value == null) {
			SDCslider.value = parseFloat(D.value) * parseFloat(60)
		};
		if((D.value == "" | D.value == null) & (E.value =="" | E.value == null)) {
			SDCslider.value = 0
		};
	};

	// 2 Mile Run Time

});
