$(window).load(function(){

	$('#TesterGroup').html("(Moderate)");

	$('input').keyup(function(){

	    //Scores
	    const mdl = Number($('#A').val() || NaN);
	    const spt = Number($('#Q').val() || NaN);
			const sit = Number($('#B').val() || NaN);
	    const hrp = Number($('#C').val() || NaN);
	    const sdc = Number($('#D').val() || NaN);
	    const ltk = Number($('#F').val() || NaN);
	    const run = Number($('#G').val() || NaN);
/*
	    //MDL
	    const mdled = isNaN(mdl) ? '' : '';
	    document.getElementById("MDLid").innerHTML = mdled;
	    if (mdl = 340) {document.getElementById("MDLid").innerHTML = "www";}
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
*/
	    //SPT
	    const spted = isNaN(spt) ? '' : '';
	    document.getElementById("SPTid").innerHTML = spted;
	    if (spt >= 44) {document.getElementById("SPTid").innerHTML = "Excellent";}
	    if (spt <= 43 & spt >= 38) {document.getElementById("SPTid").innerHTML = "Good";}
	    if (spt <= 37 & spt >= 32) {document.getElementById("SPTid").innerHTML = "Fair";}
	    if (spt <= 31 & spt >= 27) {document.getElementById("SPTid").innerHTML = "Poor";}
	    if (spt <= 26) {document.getElementById("SPTid").innerHTML = "Very Poor";}
	    if (spt === null || spt === "") {document.getElementById("SPTid").innerHTML = "";}


			const sat = isNaN(sit) ? '' : '';
			document.getElementById("SitUp").innerHTML = sat;
			if (sit >= 44) {document.getElementById("SitUp").innerHTML = "Excellent";}
			if (sit <= 43 & sit >= 38) {document.getElementById("SitUp").innerHTML = "Good";}
			if (sit <= 37 & sit >= 32) {document.getElementById("SitUp").innerHTML = "Fair";}
			if (sit <= 31 & sit >= 27) {document.getElementById("SitUp").innerHTML = "Poor";}
			if (sit <= 26) {document.getElementById("SitUp").innerHTML = "0";}
			if (sit === null || sit === "") {document.getElementById("SitUp").innerHTML = "";}

	    //HRP
	    const hrped = isNaN(hrp) ? '' : '';
	    document.getElementById("HRP").innerHTML = hrped;
	    if (hrp >= 4) {document.getElementById("HRP").innerHTML = "Excellent";}
	    if (hrp === 3) {document.getElementById("HRP").innerHTML = "Good";}
	    if (hrp === 2) {document.getElementById("HRP").innerHTML = "Fair";}
	    if (hrp === 1) {document.getElementById("HRP").innerHTML = "Poor";}
	    if (hrp === 0) {document.getElementById("HRP").innerHTML = "Very Poor";}
	    if (hrp === null || hrp === "") {document.getElementById("HRP").innerHTML = "";}

	    //SDC
			const SDCmin = 60 * Number($('#D').val() || NaN);
	    const SDCsec = Number($('#E').val() || NaN);
	    const SDCtotal = SDCmin + SDCsec;
	    const SDCspeed = isNaN(SDCtotal) ? '' : '';
	    document.getElementById("SDC").innerHTML = SDCspeed;
	    if (SDCtotal <= 770) {document.getElementById("SDC").innerHTML = "Excellent";}
	    if (SDCtotal <= 864 & SDCtotal >= 771) {document.getElementById("SDC").innerHTML = "Good";}
	    if (SDCtotal <= 926 & SDCtotal >= 865) {document.getElementById("SDC").innerHTML = "Fair";}
	    if (SDCtotal <= 993 & SDCtotal >= 927) {document.getElementById("SDC").innerHTML = "Poor";}
	    if (SDCtotal >= 994) {document.getElementById("SDC").innerHTML = "Very Poor";}
	    if (SDCmin === null || SDCmin === "") {document.getElementById("SDC").innerHTML = "";}
	    if (SDCsec === null || SDCsec === "") {document.getElementById("SDC").innerHTML = "";}

	    //LTK
	    const ltked = isNaN(ltk) ? '' : '';
	    document.getElementById("HRP").innerHTML = ltked;
	    if (ltk >= 4) {document.getElementById("HRP").innerHTML = "Excellent";}
	    if (ltk === 3) {document.getElementById("HRP").innerHTML = "Good";}
	    if (ltk === 2) {document.getElementById("HRP").innerHTML = "Fair";}
	    if (ltk === 1) {document.getElementById("HRP").innerHTML = "Poor";}
	    if (ltk === 0) {document.getElementById("HRP").innerHTML = "Very Poor";}
	    if (ltk === null || ltk === "") {document.getElementById("HRP").innerHTML = "";}

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
	    var mdlpoint = document.getElementById("MDL").innerHTML;
	    var sptpoint = document.getElementById("SPT").innerHTML;
	    var hrppoint = document.getElementById("HRP").innerHTML;
	    var sdcpoint = document.getElementById("SDC").innerHTML;
	    var ltkpoint = document.getElementById("LTK").innerHTML;
	    var runpoint = document.getElementById("RunTime").innerHTML;

	    var p;
	    var s;
	    var c;
	    var r;
	    const add = Number((p +s +c +r) || NaN);
	    const final = isNaN(add) ? '' : '';
      document.getElementById("Score").innerHTML = final;

	    if (mdlpoint == "Excellent") {p = 4};
	    if (mdlpoint == "Good") {p = 3};
	    if (mdlpoint == "Fair") {p = 2};
	    if (mdlpoint == "Poor") {p = 1};
	    if (mdlpoint == "Very Poor") {p = 0};

	    if (sptpoint == "Excellent") {s = 4};
	    if (sptpoint == "Good") {s = 3};
	    if (sptpoint == "Fair") {s = 2};
	    if (sptpoint == "Poor") {s = 1};
	    if (sptpoint == "Very Poor") {s = 0};

	    if (hrppoint == "Excellent") {c = 4};
	    if (hrppoint == "Good") {c = 3};
	    if (hrppoint == "Fair") {c = 2};
	    if (hrppoint == "Poor") {c = 1};
	    if (hrppoint == "Very Poor") {c = 0};

	    if (runpoint == "Excellent") {r = 4};
	    if (runpoint == "Good") {r = 3};
	    if (runpoint == "Fair") {r = 2};
	    if (runpoint == "Poor") {r = 1};
	    if (runpoint == "Very Poor") {r = 0};

	//document.getElementById("Score").innerHTML = final;
	$('#Score').html(Number(p + s + c + r));

	});
});
