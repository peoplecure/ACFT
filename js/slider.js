$(window).load(function() {

	// Maximum Dead Lift /////////////////////////////////////////////////////////
	A.onkeyup = function() {
		if(parseInt(this.value) > 340){
			MDLslider.value = 340 ;
			this.value = 340 ;
		};
		MDLslider.value = A.value ;
		if(A.value == "" | A.value == null) {
			MDLslider.value = 0
		};
	};
	// Standing Power Throw //////////////////////////////////////////////////////
	B.onkeyup = function() {
		if(parseInt(this.value) > 12.5){
			SPTslider.value = 12.5 ;
		} ;
		SPTslider.value = B.value ;
		if(B.value == "" | B.value == null) {
			SPTslider.value = 0
		};
	};
	// Hand Release Push Up //////////////////////////////////////////////////////
	C.onkeyup = function() {
		if(parseInt(this.value) > 60){
			HRPslider.value = 60 ;
		} ;
		HRPslider.value = C.value ;
		if(C.value == "" | C.value == null) {
			HRPslider.value = 0
		};
	};
  // SDC Run Time //////////////////////////////////////////////////////////////
	document.querySelector('#SDCslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#D').value = Math.floor(mins);
	  document.querySelector('#E').value = Math.floor(xtra);
	});

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
	// Leg Tuck //////////////////////////////////////////////////////////////////
	F.onkeyup = function() {
		if(parseInt(this.value) > 20){
			LTKslider.value = 20 ;
		}
		LTKslider.value = F.value
		if(F.value == "" | F.value == null) {
			LTKslider.value = 0
		};
	};
	// 2 Mile Run Time ///////////////////////////////////////////////////////////
	document.querySelector('#RunTimeslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#G').value = Math.floor(mins);
	  document.querySelector('#H').value = Math.floor(xtra);
	});

	G.onkeyup = function() {
		if(parseInt(this.value) > 59) {
			this.value = 59;
		};
		if(H.value.length == "" | H.value.length == null) {
			RunTimeslider.value = (parseFloat(G.value) * parseFloat(60))
		};
		if(H.value != "") {
			RunTimeslider.value = (parseFloat(G.value) * parseFloat(60)) + parseFloat(H.value)
		};
		if(G.value == "" | G.value == null) {
			RunTimeslider.value = parseFloat(H.value)
		};
		if((G.value == "" | G.value == null) & (H.value =="" | H.value == null)) {
			RunTimeslider.value = 0
		};
	};

	H.onkeyup = function() {
		if(parseInt(this.value) > 59) {
			this.value = 59;
		};
		if(G.value.length == "" | G.value.length == null) {
			RunTimeslider.value = parseFloat(H.value)
		};
		if(G.value != "") {
			RunTimeslider.value = (parseFloat(G.value) * parseFloat(60)) + parseFloat(H.value)
		};
		if(H.value == "" | H.value == null) {
			RunTimeslider.value = parseFloat(G.value) * parseFloat(60)
		};
		if((G.value == "" | G.value == null) & (H.value =="" | H.value == null)) {
			RunTimeslider.value = 0
		};
	};
  //////////////////////////////////////////////////////////////////////////////

});
