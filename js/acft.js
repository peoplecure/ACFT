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
			if (mdl >= 340) {document.getElementById('MDLid').innerHTML = '100';}
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
			if (spt >= 12.5) {document.getElementById('SPTid').innerHTML = '100';}
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
			if (hrp >= 60) {document.getElementById('HRPid').innerHTML = '100';}
			if (hrp < 60 & hrp >= 59) {document.getElementById('HRPid').innerHTML = '99';}
			if (hrp < 59 & hrp >= 58) {document.getElementById('HRPid').innerHTML = '98';}
			if (hrp < 58 & hrp >= 57) {document.getElementById('HRPid').innerHTML = '97';}
			if (hrp < 57 & hrp >= 56) {document.getElementById('HRPid').innerHTML = '96';}
			if (hrp < 56 & hrp >= 55) {document.getElementById('HRPid').innerHTML = '95';}
			if (hrp < 55 & hrp >= 54) {document.getElementById('HRPid').innerHTML = '94';}
			if (hrp < 54 & hrp >= 53) {document.getElementById('HRPid').innerHTML = '93';}
			if (hrp < 53 & hrp >= 52) {document.getElementById('HRPid').innerHTML = '92';}
			if (hrp < 52 & hrp >= 51) {document.getElementById('HRPid').innerHTML = '91';}
			if (hrp < 51 & hrp >= 50) {document.getElementById('HRPid').innerHTML = '90';}
			if (hrp < 50 & hrp >= 49) {document.getElementById('HRPid').innerHTML = '89';}
			if (hrp < 49 & hrp >= 48) {document.getElementById('HRPid').innerHTML = '88';}
			if (hrp < 48 & hrp >= 47) {document.getElementById('HRPid').innerHTML = '87';}
			if (hrp < 47 & hrp >= 46) {document.getElementById('HRPid').innerHTML = '86';}
			if (hrp < 46 & hrp >= 45) {document.getElementById('HRPid').innerHTML = '85';}
			if (hrp < 45 & hrp >= 44) {document.getElementById('HRPid').innerHTML = '84';}
			if (hrp < 44 & hrp >= 43) {document.getElementById('HRPid').innerHTML = '83';}
			if (hrp < 43 & hrp >= 42) {document.getElementById('HRPid').innerHTML = '82';}
			if (hrp < 42 & hrp >= 41) {document.getElementById('HRPid').innerHTML = '81';}
			if (hrp < 41 & hrp >= 40) {document.getElementById('HRPid').innerHTML = '80';}
			if (hrp < 40 & hrp >= 39) {document.getElementById('HRPid').innerHTML = '79';}
			if (hrp < 39 & hrp >= 38) {document.getElementById('HRPid').innerHTML = '78';}
			if (hrp < 38 & hrp >= 37) {document.getElementById('HRPid').innerHTML = '77';}
			if (hrp < 37 & hrp >= 36) {document.getElementById('HRPid').innerHTML = '76';}
			if (hrp < 36 & hrp >= 35) {document.getElementById('HRPid').innerHTML = '75';}
			if (hrp < 35 & hrp >= 34) {document.getElementById('HRPid').innerHTML = '74';}
			if (hrp < 34 & hrp >= 33) {document.getElementById('HRPid').innerHTML = '73';}
			if (hrp < 33 & hrp >= 32) {document.getElementById('HRPid').innerHTML = '72';}
			if (hrp < 32 & hrp >= 31) {document.getElementById('HRPid').innerHTML = '71';}
			if (hrp < 31 & hrp >= 30) {document.getElementById('HRPid').innerHTML = '70';}
			if (hrp < 30 & hrp >= 28) {document.getElementById('HRPid').innerHTML = '69';}
			if (hrp < 28 & hrp >= 26) {document.getElementById('HRPid').innerHTML = '68';}
			if (hrp < 26 & hrp >= 24) {document.getElementById('HRPid').innerHTML = '67';}
			if (hrp < 24 & hrp >= 22) {document.getElementById('HRPid').innerHTML = '66';}
			if (hrp < 22 & hrp >= 20) {document.getElementById('HRPid').innerHTML = '65';}
			if (hrp < 20 & hrp >= 18) {document.getElementById('HRPid').innerHTML = '64';}
			if (hrp < 18 & hrp >= 16) {document.getElementById('HRPid').innerHTML = '63';}
			if (hrp < 16 & hrp >= 14) {document.getElementById('HRPid').innerHTML = '62';}
			if (hrp < 14 & hrp >= 12) {document.getElementById('HRPid').innerHTML = '61';}
			if (hrp < 12 & hrp >= 10) {document.getElementById('HRPid').innerHTML = '60';}
			if (hrp < 10 & hrp >= 9) {document.getElementById('HRPid').innerHTML = '55';}
			if (hrp < 9 & hrp >= 8) {document.getElementById('HRPid').innerHTML = '50';}
			if (hrp < 8 & hrp >= 7) {document.getElementById('HRPid').innerHTML = '45';}
			if (hrp < 7 & hrp >= 6) {document.getElementById('HRPid').innerHTML = '40';}
			if (hrp < 6 & hrp >= 5) {document.getElementById('HRPid').innerHTML = '35';}
			if (hrp < 5 & hrp >= 4) {document.getElementById('HRPid').innerHTML = '30';}
			if (hrp < 4 & hrp >= 3) {document.getElementById('HRPid').innerHTML = '25';}
			if (hrp < 3 & hrp >= 2) {document.getElementById('HRPid').innerHTML = '20';}
			if (hrp < 2 & hrp >= 1) {document.getElementById('HRPid').innerHTML = '15';}
			if (hrp < 1) {document.getElementById('HRPid').innerHTML = '0';}
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
