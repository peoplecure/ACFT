$(window).load(function(){

	$('#TesterGroup').html("Enter ALL fields");

	$('input').keyup(function(){

	    //Scores
	    const mdl = Number($('#A').val() || NaN);
	    const spt = Number($('#B').val() || NaN);
	    const hrp = Number($('#C').val() || NaN);
	    const sdc = Number($('#D').val() || NaN);
	    const ltk = Number($('#F').val() || NaN);
	    const run = Number($('#G').val() || NaN);

	    //MDL
	    const mdled = isNaN(mdl) ? '' : '';
	    document.getElementById("MDLid").innerHTML = mdled;
	    if (mdl === 340) {document.getElementById('MDLid').innerHTML = "100";}
			if (mdl >= 330) {document.getElementById('MDLid').innerHTML = '97';}
	    if (mdl >= 320) {document.getElementById('MDLid').innerHTML = '94';}
	    if (mdl === 310) {document.getElementById('MDLid').innerHTML = '92';}
	    if (mdl === 300) {document.getElementById('MDLid').innerHTML = '90';}
	    if (mdl === 290) {document.getElementById('MDLid').innerHTML = '88';}
	    if (mdl === 280) {document.getElementById('MDLid').innerHTML = '86';}
	    if (mdl === 270) {document.getElementById('MDLid').innerHTML = '84';}
	    if (mdl === 260) {document.getElementById('MDLid').innerHTML = '82';}
	    if (mdl === 250) {document.getElementById('MDLid').innerHTML = '80';}
	    if (mdl === 240) {document.getElementById('MDLid').innerHTML = '78';}
	    if (mdl === 230) {document.getElementById('MDLid').innerHTML = '76';}
	    if (mdl === 220) {document.getElementById('MDLid').innerHTML = '74';}
	    if (mdl === 210) {document.getElementById('MDLid').innerHTML = '72';}
	    if (mdl === 200) {document.getElementById('MDLid').innerHTML = '70';}
	    if (mdl === 190) {document.getElementById('MDLid').innerHTML = '68';}
	    if (mdl === 180) {document.getElementById('MDLid').innerHTML = '65';}
	    if (mdl === 170) {document.getElementById('MDLid').innerHTML = '64';}
	    if (mdl === 160) {document.getElementById('MDLid').innerHTML = '63';}
	    if (mdl === 150) {document.getElementById('MDLid').innerHTML = '62';}
	    if (mdl === 140) {document.getElementById('MDLid').innerHTML = '60';}
	    if (mdl === 130) {document.getElementById('MDLid').innerHTML = '50';}
	    if (mdl === 120) {document.getElementById('MDLid').innerHTML = '40';}
	    if (mdl === 110) {document.getElementById('MDLid').innerHTML = '30';}
	    if (mdl === 100) {document.getElementById('MDLid').innerHTML = '20';}
	    if (mdl ===  90) {document.getElementById('MDLid').innerHTML = '10';}
	    if (mdl <=   80) {document.getElementById('MDLid').innerHTML = '0';}
	    //SPT
	    const spted = isNaN(spt) ? '' : '';
	    document.getElementById("SPTid").innerHTML = spted;
	    if (spt >= 44) {document.getElementById("SPTid").innerHTML = "1";}
	    if (spt <= 43 & spt >= 38) {document.getElementById("SPTid").innerHTML = "1";}
	    if (spt <= 37 & spt >= 32) {document.getElementById("SPTid").innerHTML = "1";}
	    if (spt <= 31 & spt >= 27) {document.getElementById("SPTid").innerHTML = "1";}
	    if (spt <= 26) {document.getElementById("SPTid").innerHTML = "1";}
	    if (spt === null || spt === "") {document.getElementById("SPTid").innerHTML = "";}

	    //HRP
	    const hrped = isNaN(hrp) ? '' : '';
	    document.getElementById("HRPid").innerHTML = hrped;
	    if (hrp >= 4) {document.getElementById("HRPid").innerHTML = "1";}
	    if (hrp === 3) {document.getElementById("HRPid").innerHTML = "1";}
	    if (hrp === 2) {document.getElementById("HRPid").innerHTML = "1";}
	    if (hrp === 1) {document.getElementById("HRPid").innerHTML = "1";}
	    if (hrp === 0) {document.getElementById("HRPid").innerHTML = "1";}
	    if (hrp === null || hrp === "") {document.getElementById("HRPid").innerHTML = "";}

	    //SDC
			const SDCmin = 60 * Number($('#D').val() || NaN);
	    const SDCsec = Number($('#E').val() || NaN);
	    const SDCtotal = SDCmin + SDCsec;
	    const SDCspeed = isNaN(SDCtotal) ? '' : '';
	    document.getElementById("SDCid").innerHTML = SDCspeed;
	    if (SDCtotal <= 770) {document.getElementById("SDCid").innerHTML = "1";}
	    if (SDCtotal <= 864 & SDCtotal >= 771) {document.getElementById("SDCid").innerHTML = "1";}
	    if (SDCtotal <= 926 & SDCtotal >= 865) {document.getElementById("SDCid").innerHTML = "1";}
	    if (SDCtotal <= 993 & SDCtotal >= 927) {document.getElementById("SDCid").innerHTML = "1";}
	    if (SDCtotal >= 994) {document.getElementById("SDCid").innerHTML = "1";}
	    if (SDCmin === null || SDCmin === "") {document.getElementById("SDCid").innerHTML = "";}
	    if (SDCsec === null || SDCsec === "") {document.getElementById("SDCid").innerHTML = "";}

	    //LTK
	    const ltked = isNaN(ltk) ? '' : '';
	    document.getElementById("LTKid").innerHTML = ltked;
	    if (ltk >= 4) {document.getElementById("LTKid").innerHTML = "1";}
	    if (ltk === 3) {document.getElementById("LTKid").innerHTML = "1";}
	    if (ltk === 2) {document.getElementById("LTKid").innerHTML = "1";}
	    if (ltk === 1) {document.getElementById("LTKid").innerHTML = "1";}
	    if (ltk === 0) {document.getElementById("LTKid").innerHTML = "1";}
	    if (ltk === null || ltk === "") {document.getElementById("LTKid").innerHTML = "";}

	    //Run Time
	    const min = 60 * Number($('#G').val() || NaN);
	    const sec = Number($('#H').val() || NaN);
	    const total = min + sec;
	    const speed = isNaN(total) ? '' : '';
	    document.getElementById("RunTime").innerHTML = speed;
	    if (total <= 770) {document.getElementById("RunTime").innerHTML = "1";}
	    if (total <= 864 & total >= 771) {document.getElementById("RunTime").innerHTML = "1";}
	    if (total <= 926 & total >= 865) {document.getElementById("RunTime").innerHTML = "1";}
	    if (total <= 993 & total >= 927) {document.getElementById("RunTime").innerHTML = "1";}
	    if (total >= 994) {document.getElementById("RunTime").innerHTML = "1";}
	    if (min === null || min === "") {document.getElementById("RunTime").innerHTML = "";}
	    if (sec === null || sec === "") {document.getElementById("RunTime").innerHTML = "";}

	    //Total Score
	    var mdlpoint = Number(document.getElementById("MDLid").innerHTML);
	    var sptpoint = Number(document.getElementById("SPTid").innerHTML);
	    var hrppoint = Number(document.getElementById("HRPid").innerHTML);
	    var sdcpoint = Number(document.getElementById("SDCid").innerHTML);
	    var ltkpoint = Number(document.getElementById("LTKid").innerHTML);
	    var runpoint = Number(document.getElementById("RunTime").innerHTML);

	    const add = Number((mdlpoint + sptpoint + hrppoint +
													sdcpoint + ltkpoint + runpoint
													));
	    const add_isNA = isNaN(add) ? '' : '';
			const final = add
			const percent = (add/6) * 100
      //document.getElementById("Score").innerHTML = percent;
			$('#Score').html(final);

	});
});
