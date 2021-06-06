$(window).load(function(){

	function myFunction() {
		alert("Hello! I am an alert box!");
	}

	$('#TesterGroup').html("(Moderate)");

	$('input').keyup(function(){

	    //Scores
	    const mdl  = Number($('#A').val() || NaN);
	    const spt  = Number($('#B').val() || NaN);
	    const hrp  = Number($('#C').val() || NaN);
	    const sdc  = Number($('#D').val() || NaN);
	    const ltk  = Number($('#E').val() || NaN);
	    const run  = Number($('#G').val() || NaN);

	    //MDL
	    const pushed = isNaN(mdl) ? '' : '';
	    document.getElementById("MDL").innerHTML = pushed;
	    if (mdl = 340) {document.getElementById("MDL").innerHTML = "100";}
	    if (mdl = 330) {document.getElementById('MDL').innerHTML = '97';}
	    if (mdl = 320) {document.getElementById('MDL').innerHTML = '94';}
	    if (mdl = 310) {document.getElementById('MDL').innerHTML = '92';}
	    if (mdl = 300) {document.getElementById('MDL').innerHTML = '90';}
	    if (mdl = 290) {document.getElementById('MDL').innerHTML = '88';}
	    if (mdl = 280) {document.getElementById('MDL').innerHTML = '86';}
	    if (mdl = 270) {document.getElementById('MDL').innerHTML = '84';}
	    if (mdl = 260) {document.getElementById('MDL').innerHTML = '82';}
	    if (mdl = 250) {document.getElementById('MDL').innerHTML = '80';}
	    if (mdl = 240) {document.getElementById('MDL').innerHTML = '78';}
	    if (mdl = 230) {document.getElementById('MDL').innerHTML = '76';}
	    if (mdl = 220) {document.getElementById('MDL').innerHTML = '74';}
	    if (mdl = 210) {document.getElementById('MDL').innerHTML = '72';}
	    if (mdl = 200) {document.getElementById('MDL').innerHTML = '70';}
	    if (mdl = 190) {document.getElementById('MDL').innerHTML = '68';}
	    if (mdl = 180) {document.getElementById('MDL').innerHTML = '65';}
	    if (mdl = 170) {document.getElementById('MDL').innerHTML = '64';}
	    if (mdl = 160) {document.getElementById('MDL').innerHTML = '63';}
	    if (mdl = 150) {document.getElementById('MDL').innerHTML = '62';}
	    if (mdl = 140) {document.getElementById('MDL').innerHTML = '60';}
	    if (mdl = 130) {document.getElementById('MDL').innerHTML = '50';}
	    if (mdl = 120) {document.getElementById('MDL').innerHTML = '40';}
	    if (mdl = 110) {document.getElementById('MDL').innerHTML = '30';}
	    if (mdl = 100) {document.getElementById('MDL').innerHTML = '20';}
	    if (mdl =  90) {document.getElementById('MDL').innerHTML = '10';}
	    if (mdl =  80) {document.getElementById('MDL').innerHTML = '0';}

	    //SPT
	    const sat = isNaN(sit) ? '' : '';
	    document.getElementById("SitUp").innerHTML = sat;
	    if (sit >= 44) {document.getElementById("SitUp").innerHTML = "Excellent";}
	    if (sit <= 43 & sit >= 38) {document.getElementById("SitUp").innerHTML = "Good";}
	    if (sit <= 37 & sit >= 32) {document.getElementById("SitUp").innerHTML = "Fair";}
	    if (sit <= 31 & sit >= 27) {document.getElementById("SitUp").innerHTML = "Poor";}
	    if (sit <= 26) {document.getElementById("SitUp").innerHTML = "Very Poor";}
	    if (sit === null || sit === "") {document.getElementById("SitUp").innerHTML = "";}

	    //HRP
	    const chinned = isNaN(chin) ? '' : '';
	    document.getElementById("ChinUp").innerHTML = chinned;
	    if (chin >= 4) {document.getElementById("ChinUp").innerHTML = "Excellent";}
	    if (chin === 3) {document.getElementById("ChinUp").innerHTML = "Good";}
	    if (chin === 2) {document.getElementById("ChinUp").innerHTML = "Fair";}
	    if (chin === 1) {document.getElementById("ChinUp").innerHTML = "Poor";}
	    if (chin === 0) {document.getElementById("ChinUp").innerHTML = "Very Poor";}
	    if (chin === null || chin === "") {document.getElementById("ChinUp").innerHTML = "";}

	    //SDC
			const SDCmin = 60 * Number($('#D').val() || NaN);
	    const SDCsec = Number($('#E').val() || NaN);
	    const total = min + sec;
	    const speed = isNaN(total) ? '' : '';
	    document.getElementById("SDC").innerHTML = speed;
	    if (total <= 770) {document.getElementById("SDC").innerHTML = "Excellent";}
	    if (total <= 864 & total >= 771) {document.getElementById("SDC").innerHTML = "Good";}
	    if (total <= 926 & total >= 865) {document.getElementById("SDC").innerHTML = "Fair";}
	    if (total <= 993 & total >= 927) {document.getElementById("SDC").innerHTML = "Poor";}
	    if (total >= 994) {document.getElementById("SDC").innerHTML = "Very Poor";}
	    if (SDCmin === null || min === "") {document.getElementById("SDC").innerHTML = "";}
	    if (SDCsec === null || sec === "") {document.getElementById("SDC").innerHTML = "";}

	    //LTK
	    const chinned = isNaN(chin) ? '' : '';
	    document.getElementById("ChinUp").innerHTML = chinned;
	    if (chin >= 4) {document.getElementById("ChinUp").innerHTML = "Excellent";}
	    if (chin === 3) {document.getElementById("ChinUp").innerHTML = "Good";}
	    if (chin === 2) {document.getElementById("ChinUp").innerHTML = "Fair";}
	    if (chin === 1) {document.getElementById("ChinUp").innerHTML = "Poor";}
	    if (chin === 0) {document.getElementById("ChinUp").innerHTML = "Very Poor";}
	    if (chin === null || chin === "") {document.getElementById("ChinUp").innerHTML = "";}

	    //Run Time
	    const min = 60 * Number($('#G').val() || NaN);
	    const sec = Number($('#H').val() || NaN);
	    const total = min + sec;
	    const speed = isNaN(total) ? '' : '';
	    document.getElementById("RunTime").innerHTML = speed;
	    if (total <= 770) {document.getElementById("RunTime").innerHTML = "Excellent";}
	    if (total <= 864 & total >= 771) {document.getElementById("RunTime").innerHTML = "Good";}
	    if (total <= 926 & total >= 865) {document.getElementById("RunTime").innerHTML = "Fair";}
	    if (total <= 993 & total >= 927) {document.getElementById("RunTime").innerHTML = "Poor";}
	    if (total >= 994) {document.getElementById("RunTime").innerHTML = "Very Poor";}
	    if (min === null || min === "") {document.getElementById("RunTime").innerHTML = "";}
	    if (sec === null || sec === "") {document.getElementById("RunTime").innerHTML = "";}

	    //Total Score
	    var MDLpoint = document.getElementById("MDL").innerHTML;
	    var SPTpoint = document.getElementById("SPT").innerHTML;
	    var HRPpoint = document.getElementById("HRP").innerHTML;
	    var SDCpoint = document.getElementById("SDC").innerHTML;
	    var LTKpoint = document.getElementById("LTK").innerHTML;
	    var runpoint = document.getElementById("RunTime").innerHTML;

	    var p;
	    var s;
	    var c;
	    var r;
	    const add = Number((p +s +c +r) || NaN);
	    const final = isNaN(add) ? '' : '';
      document.getElementById("Score").innerHTML = final;

	    if (pushpoint == "Excellent") {p = 4};
	    if (pushpoint == "Good") {p = 3};
	    if (pushpoint == "Fair") {p = 2};
	    if (pushpoint == "Poor") {p = 1};
	    if (pushpoint == "Very Poor") {p = 0};

	    if (sitpoint == "Excellent") {s = 4};
	    if (sitpoint == "Good") {s = 3};
	    if (sitpoint == "Fair") {s = 2};
	    if (sitpoint == "Poor") {s = 1};
	    if (sitpoint == "Very Poor") {s = 0};

	    if (chinpoint == "Excellent") {c = 4};
	    if (chinpoint == "Good") {c = 3};
	    if (chinpoint == "Fair") {c = 2};
	    if (chinpoint == "Poor") {c = 1};
	    if (chinpoint == "Very Poor") {c = 0};

	    if (runpoint == "Excellent") {r = 4};
	    if (runpoint == "Good") {r = 3};
	    if (runpoint == "Fair") {r = 2};
	    if (runpoint == "Poor") {r = 1};
	    if (runpoint == "Very Poor") {r = 0};

	//document.getElementById("Score").innerHTML = final;
	$('#Score').html(Number(p + s + c + r));

	});
});
