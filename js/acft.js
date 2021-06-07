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
	    document.getElementById('MDLid').innerHTML = mdled;
			if (mdl === 340) {document.getElementById('MDLid').innerHTML = '100';}
			if (mdl < 340 & mdl >= 330) {document.getElementById('MDLid').innerHTML = '97';}
			if (mdl < 330 & mdl >= 320) {document.getElementById('MDLid').innerHTML = '94';}
			if (mdl < 320 & mdl >= 310) {document.getElementById('MDLid').innerHTML = '92';}
			if (mdl < 310 & mdl >= 300) {document.getElementById('MDLid').innerHTML = '90';}
			if (mdl < 300 & mdl >= 290) {document.getElementById('MDLid').innerHTML = '88';}
			if (mdl < 290 & mdl >= 280) {document.getElementById('MDLid').innerHTML = '86';}
			if (mdl < 280 & mdl >= 270) {document.getElementById('MDLid').innerHTML = '84';}
			if (mdl < 270 & mdl >= 260) {document.getElementById('MDLid').innerHTML = '82';}
			if (mdl < 260 & mdl >= 250) {document.getElementById('MDLid').innerHTML = '80';}
			if (mdl < 250 & mdl >= 240) {document.getElementById('MDLid').innerHTML = '78';}
			if (mdl < 240 & mdl >= 230) {document.getElementById('MDLid').innerHTML = '76';}
			if (mdl < 230 & mdl >= 220) {document.getElementById('MDLid').innerHTML = '74';}
			if (mdl < 220 & mdl >= 210) {document.getElementById('MDLid').innerHTML = '72';}
			if (mdl < 210 & mdl >= 200) {document.getElementById('MDLid').innerHTML = '70';}
			if (mdl < 200 & mdl >= 190) {document.getElementById('MDLid').innerHTML = '68';}
			if (mdl < 190 & mdl >= 180) {document.getElementById('MDLid').innerHTML = '65';}
			if (mdl < 180 & mdl >= 170) {document.getElementById('MDLid').innerHTML = '64';}
			if (mdl < 170 & mdl >= 160) {document.getElementById('MDLid').innerHTML = '63';}
			if (mdl < 160 & mdl >= 150) {document.getElementById('MDLid').innerHTML = '62';}
			if (mdl < 150 & mdl >= 140) {document.getElementById('MDLid').innerHTML = '60';}
			if (mdl < 140 & mdl >= 130) {document.getElementById('MDLid').innerHTML = '50';}
			if (mdl < 130 & mdl >= 120) {document.getElementById('MDLid').innerHTML = '40';}
			if (mdl < 120 & mdl >= 110) {document.getElementById('MDLid').innerHTML = '30';}
			if (mdl < 110 & mdl >= 100) {document.getElementById('MDLid').innerHTML = '20';}
			if (mdl < 100 & mdl >= 90) {document.getElementById('MDLid').innerHTML = '10';}
			if (mdl < 90) {document.getElementById('MDLid').innerHTML = '0';}
			if (spt === null || mdl === "") {document.getElementById("MDLid").innerHTML = "";}

			//SPT
	    const spted = isNaN(spt) ? '' : '';
	    document.getElementById("SPTid").innerHTML = spted;
			if (spt === 12.5) {document.getElementById('SPTid').innerHTML = '100';}
			if (spt < 12.5 & spt >= 12.4) {document.getElementById('SPTid').innerHTML = '99';}
			if (spt < 12.4 & spt >= 12.2) {document.getElementById('SPTid').innerHTML = '98';}
			if (spt < 12.2 & spt >= 12.1) {document.getElementById('SPTid').innerHTML = '97';}
			if (spt < 12.1 & spt >= 11.9) {document.getElementById('SPTid').innerHTML = '96';}
			if (spt < 11.9 & spt >= 11.8) {document.getElementById('SPTid').innerHTML = '95';}
			if (spt < 11.8 & spt >= 11.6) {document.getElementById('SPTid').innerHTML = '94';}
			if (spt < 11.6 & spt >= 11.5) {document.getElementById('SPTid').innerHTML = '93';}
			if (spt < 11.5 & spt >= 11.3) {document.getElementById('SPTid').innerHTML = '92';}
			if (spt < 11.3 & spt >= 11.2) {document.getElementById('SPTid').innerHTML = '91';}
			if (spt < 11.2 & spt >= 11) {document.getElementById('SPTid').innerHTML = '90';}
			if (spt < 11 & spt >= 10.9) {document.getElementById('SPTid').innerHTML = '89';}
			if (spt < 10.9 & spt >= 10.7) {document.getElementById('SPTid').innerHTML = '88';}
			if (spt < 10.7 & spt >= 10.6) {document.getElementById('SPTid').innerHTML = '87';}
			if (spt < 10.6 & spt >= 10.4) {document.getElementById('SPTid').innerHTML = '86';}
			if (spt < 10.4 & spt >= 10.3) {document.getElementById('SPTid').innerHTML = '85';}
			if (spt < 10.3 & spt >= 10.1) {document.getElementById('SPTid').innerHTML = '84';}
			if (spt < 10.1 & spt >= 10) {document.getElementById('SPTid').innerHTML = '83';}
			if (spt < 10 & spt >= 9.8) {document.getElementById('SPTid').innerHTML = '82';}
			if (spt < 9.8 & spt >= 9.7) {document.getElementById('SPTid').innerHTML = '81';}
			if (spt < 9.7 & spt >= 9.5) {document.getElementById('SPTid').innerHTML = '80';}
			if (spt < 9.5 & spt >= 9.4) {document.getElementById('SPTid').innerHTML = '79';}
			if (spt < 9.4 & spt >= 9.2) {document.getElementById('SPTid').innerHTML = '78';}
			if (spt < 9.2 & spt >= 9.1) {document.getElementById('SPTid').innerHTML = '77';}
			if (spt < 9.1 & spt >= 8.9) {document.getElementById('SPTid').innerHTML = '76';}
			if (spt < 8.9 & spt >= 8.8) {document.getElementById('SPTid').innerHTML = '75';}
			if (spt < 8.8 & spt >= 8.6) {document.getElementById('SPTid').innerHTML = '74';}
			if (spt < 8.6 & spt >= 8.5) {document.getElementById('SPTid').innerHTML = '73';}
			if (spt < 8.5 & spt >= 8.3) {document.getElementById('SPTid').innerHTML = '72';}
			if (spt < 8.3 & spt >= 8.2) {document.getElementById('SPTid').innerHTML = '71';}
			if (spt < 8.2 & spt >= 8) {document.getElementById('SPTid').innerHTML = '70';}
			if (spt < 8 & spt >= 7.8) {document.getElementById('SPTid').innerHTML = '69';}
			if (spt < 7.8 & spt >= 7.5) {document.getElementById('SPTid').innerHTML = '68';}
			if (spt < 7.5 & spt >= 7.1) {document.getElementById('SPTid').innerHTML = '67';}
			if (spt < 7.1 & spt >= 6.8) {document.getElementById('SPTid').innerHTML = '66';}
			if (spt < 6.8 & spt >= 6.5) {document.getElementById('SPTid').innerHTML = '65';}
			if (spt < 6.5 & spt >= 6.2) {document.getElementById('SPTid').innerHTML = '64';}
			if (spt < 6.2 & spt >= 5.8) {document.getElementById('SPTid').innerHTML = '63';}
			if (spt < 5.8 & spt >= 5.4) {document.getElementById('SPTid').innerHTML = '62';}
			if (spt < 5.4 & spt >= 4.9) {document.getElementById('SPTid').innerHTML = '61';}
			if (spt < 4.9 & spt >= 4.5) {document.getElementById('SPTid').innerHTML = '60';}
			if (spt < 4.5 & spt >= 4.4) {document.getElementById('SPTid').innerHTML = '55';}
			if (spt < 4.4 & spt >= 4.3) {document.getElementById('SPTid').innerHTML = '50';}
			if (spt < 4.3 & spt >= 4.2) {document.getElementById('SPTid').innerHTML = '45';}
			if (spt < 4.2 & spt >= 4.1) {document.getElementById('SPTid').innerHTML = '40';}
			if (spt < 4.1 & spt >= 4) {document.getElementById('SPTid').innerHTML = '35';}
			if (spt < 4 & spt >= 3.9) {document.getElementById('SPTid').innerHTML = '30';}
			if (spt < 3.9 & spt >= 3.8) {document.getElementById('SPTid').innerHTML = '25';}
			if (spt < 3.8 & spt >= 3.7) {document.getElementById('SPTid').innerHTML = '20';}
			if (spt < 3.7 & spt >= 3.6) {document.getElementById('SPTid').innerHTML = '15';}
			if (spt < 3.6 & spt >= 3.5) {document.getElementById('SPTid').innerHTML = '10';}
			if (spt < 3.5 & spt >= 3.4) {document.getElementById('SPTid').innerHTML = '5';}
			if (spt < 3.4) {document.getElementById('SPTid').innerHTML = '0';}
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
