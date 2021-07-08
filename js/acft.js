$(window).load(function(){

	$('input').on('change keyup', function(){

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
			if (SDCtotal <= 93) {document.getElementById('SDCid').innerHTML = '100';}
			if (SDCtotal > 93 & SDCtotal <= 96) {document.getElementById('SDCid').innerHTML = '99';}
			if (SDCtotal > 96 & SDCtotal <= 99) {document.getElementById('SDCid').innerHTML = '98';}
			if (SDCtotal > 99 & SDCtotal <= 101) {document.getElementById('SDCid').innerHTML = '97';}
			if (SDCtotal > 101 & SDCtotal <= 103) {document.getElementById('SDCid').innerHTML = '96';}
			if (SDCtotal > 103 & SDCtotal <= 105) {document.getElementById('SDCid').innerHTML = '95';}
			if (SDCtotal > 105 & SDCtotal <= 106) {document.getElementById('SDCid').innerHTML = '94';}
			if (SDCtotal > 106 & SDCtotal <= 107) {document.getElementById('SDCid').innerHTML = '93';}
			if (SDCtotal > 107 & SDCtotal <= 108) {document.getElementById('SDCid').innerHTML = '92';}
			if (SDCtotal > 108 & SDCtotal <= 109) {document.getElementById('SDCid').innerHTML = '91';}
			if (SDCtotal > 109 & SDCtotal <= 110) {document.getElementById('SDCid').innerHTML = '90';}
			if (SDCtotal > 110 & SDCtotal <= 111) {document.getElementById('SDCid').innerHTML = '89';}
			if (SDCtotal > 111 & SDCtotal <= 112) {document.getElementById('SDCid').innerHTML = '88';}
			if (SDCtotal > 112 & SDCtotal <= 113) {document.getElementById('SDCid').innerHTML = '87';}
			if (SDCtotal > 113 & SDCtotal <= 114) {document.getElementById('SDCid').innerHTML = '86';}
			if (SDCtotal > 114 & SDCtotal <= 115) {document.getElementById('SDCid').innerHTML = '85';}
			if (SDCtotal > 115 & SDCtotal <= 116) {document.getElementById('SDCid').innerHTML = '84';}
			if (SDCtotal > 116 & SDCtotal <= 117) {document.getElementById('SDCid').innerHTML = '83';}
			if (SDCtotal > 117 & SDCtotal <= 118) {document.getElementById('SDCid').innerHTML = '82';}
			if (SDCtotal > 118 & SDCtotal <= 119) {document.getElementById('SDCid').innerHTML = '81';}
			if (SDCtotal > 119 & SDCtotal <= 120) {document.getElementById('SDCid').innerHTML = '80';}
			if (SDCtotal > 120 & SDCtotal <= 121) {document.getElementById('SDCid').innerHTML = '79';}
			if (SDCtotal > 121 & SDCtotal <= 122) {document.getElementById('SDCid').innerHTML = '78';}
			if (SDCtotal > 122 & SDCtotal <= 123) {document.getElementById('SDCid').innerHTML = '77';}
			if (SDCtotal > 123 & SDCtotal <= 124) {document.getElementById('SDCid').innerHTML = '76';}
			if (SDCtotal > 124 & SDCtotal <= 125) {document.getElementById('SDCid').innerHTML = '75';}
			if (SDCtotal > 125 & SDCtotal <= 126) {document.getElementById('SDCid').innerHTML = '74';}
			if (SDCtotal > 126 & SDCtotal <= 127) {document.getElementById('SDCid').innerHTML = '73';}
			if (SDCtotal > 127 & SDCtotal <= 128) {document.getElementById('SDCid').innerHTML = '72';}
			if (SDCtotal > 128 & SDCtotal <= 129) {document.getElementById('SDCid').innerHTML = '71';}
			if (SDCtotal > 129 & SDCtotal <= 130) {document.getElementById('SDCid').innerHTML = '70';}
			if (SDCtotal > 130 & SDCtotal <= 134) {document.getElementById('SDCid').innerHTML = '69';}
			if (SDCtotal > 134 & SDCtotal <= 138) {document.getElementById('SDCid').innerHTML = '68';}
			if (SDCtotal > 138 & SDCtotal <= 142) {document.getElementById('SDCid').innerHTML = '67';}
			if (SDCtotal > 142 & SDCtotal <= 146) {document.getElementById('SDCid').innerHTML = '66';}
			if (SDCtotal > 146 & SDCtotal <= 150) {document.getElementById('SDCid').innerHTML = '65';}
			if (SDCtotal > 150 & SDCtotal <= 155) {document.getElementById('SDCid').innerHTML = '64';}
			if (SDCtotal > 155 & SDCtotal <= 160) {document.getElementById('SDCid').innerHTML = '63';}
			if (SDCtotal > 160 & SDCtotal <= 165) {document.getElementById('SDCid').innerHTML = '62';}
			if (SDCtotal > 165 & SDCtotal <= 170) {document.getElementById('SDCid').innerHTML = '61';}
			if (SDCtotal > 170 & SDCtotal <= 180) {document.getElementById('SDCid').innerHTML = '60';}
			if (SDCtotal > 180 & SDCtotal <= 181) {document.getElementById('SDCid').innerHTML = '59';}
			if (SDCtotal > 181 & SDCtotal <= 182) {document.getElementById('SDCid').innerHTML = '58';}
			if (SDCtotal > 182 & SDCtotal <= 183) {document.getElementById('SDCid').innerHTML = '57';}
			if (SDCtotal > 183 & SDCtotal <= 184) {document.getElementById('SDCid').innerHTML = '56';}
			if (SDCtotal > 184 & SDCtotal <= 185) {document.getElementById('SDCid').innerHTML = '55';}
			if (SDCtotal > 185 & SDCtotal <= 186) {document.getElementById('SDCid').innerHTML = '54';}
			if (SDCtotal > 186 & SDCtotal <= 187) {document.getElementById('SDCid').innerHTML = '53';}
			if (SDCtotal > 187 & SDCtotal <= 188) {document.getElementById('SDCid').innerHTML = '52';}
			if (SDCtotal > 188 & SDCtotal <= 189) {document.getElementById('SDCid').innerHTML = '51';}
			if (SDCtotal > 189 & SDCtotal <= 190) {document.getElementById('SDCid').innerHTML = '50';}
			if (SDCtotal > 190 & SDCtotal <= 191) {document.getElementById('SDCid').innerHTML = '48';}
			if (SDCtotal > 191 & SDCtotal <= 192) {document.getElementById('SDCid').innerHTML = '46';}
			if (SDCtotal > 192 & SDCtotal <= 193) {document.getElementById('SDCid').innerHTML = '44';}
			if (SDCtotal > 193 & SDCtotal <= 194) {document.getElementById('SDCid').innerHTML = '42';}
			if (SDCtotal > 194 & SDCtotal <= 195) {document.getElementById('SDCid').innerHTML = '40';}
			if (SDCtotal > 195 & SDCtotal <= 196) {document.getElementById('SDCid').innerHTML = '38';}
			if (SDCtotal > 196 & SDCtotal <= 197) {document.getElementById('SDCid').innerHTML = '36';}
			if (SDCtotal > 197 & SDCtotal <= 198) {document.getElementById('SDCid').innerHTML = '34';}
			if (SDCtotal > 198 & SDCtotal <= 199) {document.getElementById('SDCid').innerHTML = '32';}
			if (SDCtotal > 199 & SDCtotal <= 200) {document.getElementById('SDCid').innerHTML = '30';}
			if (SDCtotal > 200 & SDCtotal <= 201) {document.getElementById('SDCid').innerHTML = '28';}
			if (SDCtotal > 201 & SDCtotal <= 202) {document.getElementById('SDCid').innerHTML = '26';}
			if (SDCtotal > 202 & SDCtotal <= 203) {document.getElementById('SDCid').innerHTML = '24';}
			if (SDCtotal > 203 & SDCtotal <= 204) {document.getElementById('SDCid').innerHTML = '22';}
			if (SDCtotal > 204 & SDCtotal <= 205) {document.getElementById('SDCid').innerHTML = '20';}
			if (SDCtotal > 205 & SDCtotal <= 206) {document.getElementById('SDCid').innerHTML = '18';}
			if (SDCtotal > 206 & SDCtotal <= 207) {document.getElementById('SDCid').innerHTML = '16';}
			if (SDCtotal > 207 & SDCtotal <= 208) {document.getElementById('SDCid').innerHTML = '14';}
			if (SDCtotal > 208 & SDCtotal <= 209) {document.getElementById('SDCid').innerHTML = '12';}
			if (SDCtotal > 209 & SDCtotal <= 210) {document.getElementById('SDCid').innerHTML = '10';}
			if (SDCtotal > 210 & SDCtotal <= 211) {document.getElementById('SDCid').innerHTML = '8';}
			if (SDCtotal > 211 & SDCtotal <= 212) {document.getElementById('SDCid').innerHTML = '6';}
			if (SDCtotal > 212 & SDCtotal <= 213) {document.getElementById('SDCid').innerHTML = '4';}
			if (SDCtotal > 213 & SDCtotal <= 214) {document.getElementById('SDCid').innerHTML = '2';}
			if (SDCtotal > 214) {document.getElementById('SDCid').innerHTML = '0';}
	    if (SDCmin === null || SDCmin === "") {document.getElementById("SDCid").innerHTML = "";}
	    if (SDCsec === null || SDCsec === "") {document.getElementById("SDCid").innerHTML = "";}

	    //LTK
	    const ltked = isNaN(ltk) ? '' : '';
	    document.getElementById("LTKid").innerHTML = ltked;
			if (ltk >= 20) {document.getElementById('LTKid').innerHTML = '100';}
			if (ltk < 20 & ltk >= 19) {document.getElementById('LTKid').innerHTML = '98';}
			if (ltk < 19 & ltk >= 18) {document.getElementById('LTKid').innerHTML = '96';}
			if (ltk < 18 & ltk >= 17) {document.getElementById('LTKid').innerHTML = '94';}
			if (ltk < 17 & ltk >= 16) {document.getElementById('LTKid').innerHTML = '92';}
			if (ltk < 16 & ltk >= 15) {document.getElementById('LTKid').innerHTML = '90';}
			if (ltk < 15 & ltk >= 14) {document.getElementById('LTKid').innerHTML = '88';}
			if (ltk < 14 & ltk >= 13) {document.getElementById('LTKid').innerHTML = '86';}
			if (ltk < 13 & ltk >= 12) {document.getElementById('LTKid').innerHTML = '84';}
			if (ltk < 12 & ltk >= 11) {document.getElementById('LTKid').innerHTML = '82';}
			if (ltk < 11 & ltk >= 10) {document.getElementById('LTKid').innerHTML = '80';}
			if (ltk < 10 & ltk >= 9) {document.getElementById('LTKid').innerHTML = '78';}
			if (ltk < 9 & ltk >= 8) {document.getElementById('LTKid').innerHTML = '76';}
			if (ltk < 8 & ltk >= 7) {document.getElementById('LTKid').innerHTML = '74';}
			if (ltk < 7 & ltk >= 6) {document.getElementById('LTKid').innerHTML = '72';}
			if (ltk < 6 & ltk >= 5) {document.getElementById('LTKid').innerHTML = '70';}
			if (ltk < 5 & ltk >= 4) {document.getElementById('LTKid').innerHTML = '68';}
			if (ltk < 4 & ltk >= 3) {document.getElementById('LTKid').innerHTML = '65';}
			if (ltk < 3 & ltk >= 2) {document.getElementById('LTKid').innerHTML = '62';}
			if (ltk < 2 & ltk >= 1) {document.getElementById('LTKid').innerHTML = '60';}
			if (ltk < 1) {document.getElementById('LTKid').innerHTML = 0;}
	    if (ltk === null || ltk === "") {document.getElementById("LTKid").innerHTML = "";}

			//PLK
      const PLKmin = 60 * Number($('#I').val() || NaN);
	    const PLKsec = Number($('#J').val() || NaN);
	    const PLKtotal = PLKmin + PLKsec;
	    const PLKspeed = isNaN(PLKtotal) ? '' : '';
	    document.getElementById("PLKid").innerHTML = PLKspeed;
			if (PLKtotal >= 260) {document.getElementById('PLKid').innerHTML = '100';}
			if (PLKtotal >= 257 & PLKtotal < 260) {document.getElementById('PLKid').innerHTML = '99';}
			if (PLKtotal >= 254 & PLKtotal < 257) {document.getElementById('PLKid').innerHTML = '98';}
			if (PLKtotal >= 251 & PLKtotal < 254) {document.getElementById('PLKid').innerHTML = '97';}
			if (PLKtotal >= 247 & PLKtotal < 251) {document.getElementById('PLKid').innerHTML = '96';}
			if (PLKtotal >= 244 & PLKtotal < 247) {document.getElementById('PLKid').innerHTML = '95';}
			if (PLKtotal >= 241 & PLKtotal < 244) {document.getElementById('PLKid').innerHTML = '94';}
			if (PLKtotal >= 238 & PLKtotal < 241) {document.getElementById('PLKid').innerHTML = '93';}
			if (PLKtotal >= 234 & PLKtotal < 238) {document.getElementById('PLKid').innerHTML = '92';}
			if (PLKtotal >= 231 & PLKtotal < 234) {document.getElementById('PLKid').innerHTML = '91';}
			if (PLKtotal >= 228 & PLKtotal < 231) {document.getElementById('PLKid').innerHTML = '90';}
			if (PLKtotal >= 224 & PLKtotal < 228) {document.getElementById('PLKid').innerHTML = '89';}
			if (PLKtotal >= 221 & PLKtotal < 224) {document.getElementById('PLKid').innerHTML = '88';}
			if (PLKtotal >= 218 & PLKtotal < 221) {document.getElementById('PLKid').innerHTML = '87';}
			if (PLKtotal >= 215 & PLKtotal < 218) {document.getElementById('PLKid').innerHTML = '86';}
			if (PLKtotal >= 211 & PLKtotal < 215) {document.getElementById('PLKid').innerHTML = '85';}
			if (PLKtotal >= 208 & PLKtotal < 211) {document.getElementById('PLKid').innerHTML = '84';}
			if (PLKtotal >= 205 & PLKtotal < 208) {document.getElementById('PLKid').innerHTML = '83';}
			if (PLKtotal >= 201 & PLKtotal < 205) {document.getElementById('PLKid').innerHTML = '82';}
			if (PLKtotal >= 198 & PLKtotal < 201) {document.getElementById('PLKid').innerHTML = '81';}
			if (PLKtotal >= 195 & PLKtotal < 198) {document.getElementById('PLKid').innerHTML = '80';}
			if (PLKtotal >= 192 & PLKtotal < 195) {document.getElementById('PLKid').innerHTML = '79';}
			if (PLKtotal >= 188 & PLKtotal < 192) {document.getElementById('PLKid').innerHTML = '78';}
			if (PLKtotal >= 185 & PLKtotal < 188) {document.getElementById('PLKid').innerHTML = '77';}
			if (PLKtotal >= 182 & PLKtotal < 185) {document.getElementById('PLKid').innerHTML = '76';}
			if (PLKtotal >= 178 & PLKtotal < 182) {document.getElementById('PLKid').innerHTML = '75';}
			if (PLKtotal >= 175 & PLKtotal < 178) {document.getElementById('PLKid').innerHTML = '74';}
			if (PLKtotal >= 172 & PLKtotal < 175) {document.getElementById('PLKid').innerHTML = '73';}
			if (PLKtotal >= 169 & PLKtotal < 172) {document.getElementById('PLKid').innerHTML = '72';}
			if (PLKtotal >= 165 & PLKtotal < 169) {document.getElementById('PLKid').innerHTML = '71';}
			if (PLKtotal >= 162 & PLKtotal < 165) {document.getElementById('PLKid').innerHTML = '70';}
			if (PLKtotal >= 159 & PLKtotal < 162) {document.getElementById('PLKid').innerHTML = '69';}
			if (PLKtotal >= 155 & PLKtotal < 159) {document.getElementById('PLKid').innerHTML = '68';}
			if (PLKtotal >= 152 & PLKtotal < 155) {document.getElementById('PLKid').innerHTML = '67';}
			if (PLKtotal >= 149 & PLKtotal < 152) {document.getElementById('PLKid').innerHTML = '66';}
			if (PLKtotal >= 146 & PLKtotal < 149) {document.getElementById('PLKid').innerHTML = '65';}
			if (PLKtotal >= 142 & PLKtotal < 146) {document.getElementById('PLKid').innerHTML = '64';}
			if (PLKtotal >= 139 & PLKtotal < 142) {document.getElementById('PLKid').innerHTML = '63';}
			if (PLKtotal >= 136 & PLKtotal < 139) {document.getElementById('PLKid').innerHTML = '62';}
			if (PLKtotal >= 132 & PLKtotal < 136) {document.getElementById('PLKid').innerHTML = '61';}
			if (PLKtotal >= 129 & PLKtotal < 132) {document.getElementById('PLKid').innerHTML = '60';}
			if (PLKtotal >= 126 & PLKtotal < 129) {document.getElementById('PLKid').innerHTML = '59';}
			if (PLKtotal >= 123 & PLKtotal < 126) {document.getElementById('PLKid').innerHTML = '58';}
			if (PLKtotal < 123) {document.getElementById('PLKid').innerHTML = '0';}
      if (PLKmin === null || PLKmin === "") {document.getElementById("PLKid").innerHTML = "";}
      if (PLKsec === null || PLKsec === "") {document.getElementById("PLKid").innerHTML = "";}

	    //Run Time
	    const TwoMRmin = 60 * Number($('#G').val() || NaN);
	    const TwoMRsec = Number($('#H').val() || NaN);
	    const TwoMRtotal = TwoMRmin + TwoMRsec;
	    const TwoMRspeed = isNaN(TwoMRtotal) ? '' : '';
	    document.getElementById("RunTime").innerHTML = TwoMRspeed;
			if (TwoMRtotal <= 810) {document.getElementById('RunTime').innerHTML = '100';}
			if (TwoMRtotal > 810 & TwoMRtotal <= 819) {document.getElementById('RunTime').innerHTML = '99';}
			if (TwoMRtotal > 819 & TwoMRtotal <= 828) {document.getElementById('RunTime').innerHTML = '98';}
			if (TwoMRtotal > 828 & TwoMRtotal <= 837) {document.getElementById('RunTime').innerHTML = '97';}
			if (TwoMRtotal > 837 & TwoMRtotal <= 846) {document.getElementById('RunTime').innerHTML = '96';}
			if (TwoMRtotal > 846 & TwoMRtotal <= 855) {document.getElementById('RunTime').innerHTML = '95';}
			if (TwoMRtotal > 855 & TwoMRtotal <= 864) {document.getElementById('RunTime').innerHTML = '94';}
			if (TwoMRtotal > 864 & TwoMRtotal <= 873) {document.getElementById('RunTime').innerHTML = '93';}
			if (TwoMRtotal > 873 & TwoMRtotal <= 882) {document.getElementById('RunTime').innerHTML = '92';}
			if (TwoMRtotal > 882 & TwoMRtotal <= 891) {document.getElementById('RunTime').innerHTML = '91';}
			if (TwoMRtotal > 891 & TwoMRtotal <= 900) {document.getElementById('RunTime').innerHTML = '90';}
			if (TwoMRtotal > 900 & TwoMRtotal <= 909) {document.getElementById('RunTime').innerHTML = '89';}
			if (TwoMRtotal > 909 & TwoMRtotal <= 918) {document.getElementById('RunTime').innerHTML = '88';}
			if (TwoMRtotal > 918 & TwoMRtotal <= 927) {document.getElementById('RunTime').innerHTML = '87';}
			if (TwoMRtotal > 927 & TwoMRtotal <= 936) {document.getElementById('RunTime').innerHTML = '86';}
			if (TwoMRtotal > 936 & TwoMRtotal <= 945) {document.getElementById('RunTime').innerHTML = '85';}
			if (TwoMRtotal > 945 & TwoMRtotal <= 954) {document.getElementById('RunTime').innerHTML = '84';}
			if (TwoMRtotal > 954 & TwoMRtotal <= 963) {document.getElementById('RunTime').innerHTML = '83';}
			if (TwoMRtotal > 963 & TwoMRtotal <= 972) {document.getElementById('RunTime').innerHTML = '82';}
			if (TwoMRtotal > 972 & TwoMRtotal <= 981) {document.getElementById('RunTime').innerHTML = '81';}
			if (TwoMRtotal > 981 & TwoMRtotal <= 990) {document.getElementById('RunTime').innerHTML = '80';}
			if (TwoMRtotal > 990 & TwoMRtotal <= 999) {document.getElementById('RunTime').innerHTML = '79';}
			if (TwoMRtotal > 999 & TwoMRtotal <= 1008) {document.getElementById('RunTime').innerHTML = '78';}
			if (TwoMRtotal > 1008 & TwoMRtotal <= 1017) {document.getElementById('RunTime').innerHTML = '77';}
			if (TwoMRtotal > 1017 & TwoMRtotal <= 1026) {document.getElementById('RunTime').innerHTML = '76';}
			if (TwoMRtotal > 1026 & TwoMRtotal <= 1035) {document.getElementById('RunTime').innerHTML = '75';}
			if (TwoMRtotal > 1035 & TwoMRtotal <= 1044) {document.getElementById('RunTime').innerHTML = '74';}
			if (TwoMRtotal > 1044 & TwoMRtotal <= 1053) {document.getElementById('RunTime').innerHTML = '73';}
			if (TwoMRtotal > 1053 & TwoMRtotal <= 1062) {document.getElementById('RunTime').innerHTML = '72';}
			if (TwoMRtotal > 1062 & TwoMRtotal <= 1071) {document.getElementById('RunTime').innerHTML = '71';}
			if (TwoMRtotal > 1071 & TwoMRtotal <= 1080) {document.getElementById('RunTime').innerHTML = '70';}
			if (TwoMRtotal > 1080 & TwoMRtotal <= 1092) {document.getElementById('RunTime').innerHTML = '69';}
			if (TwoMRtotal > 1092 & TwoMRtotal <= 1104) {document.getElementById('RunTime').innerHTML = '68';}
			if (TwoMRtotal > 1104 & TwoMRtotal <= 1116) {document.getElementById('RunTime').innerHTML = '67';}
			if (TwoMRtotal > 1116 & TwoMRtotal <= 1128) {document.getElementById('RunTime').innerHTML = '66';}
			if (TwoMRtotal > 1128 & TwoMRtotal <= 1140) {document.getElementById('RunTime').innerHTML = '65';}
			if (TwoMRtotal > 1140 & TwoMRtotal <= 1164) {document.getElementById('RunTime').innerHTML = '64';}
			if (TwoMRtotal > 1164 & TwoMRtotal <= 1188) {document.getElementById('RunTime').innerHTML = '63';}
			if (TwoMRtotal > 1188 & TwoMRtotal <= 1212) {document.getElementById('RunTime').innerHTML = '62';}
			if (TwoMRtotal > 1212 & TwoMRtotal <= 1236) {document.getElementById('RunTime').innerHTML = '61';}
			if (TwoMRtotal > 1236 & TwoMRtotal <= 1260) {document.getElementById('RunTime').innerHTML = '60';}
			if (TwoMRtotal > 1260 & TwoMRtotal <= 1261) {document.getElementById('RunTime').innerHTML = '59';}
			if (TwoMRtotal > 1261 & TwoMRtotal <= 1263) {document.getElementById('RunTime').innerHTML = '58';}
			if (TwoMRtotal > 1263 & TwoMRtotal <= 1265) {document.getElementById('RunTime').innerHTML = '57';}
			if (TwoMRtotal > 1265 & TwoMRtotal <= 1267) {document.getElementById('RunTime').innerHTML = '56';}
			if (TwoMRtotal > 1267 & TwoMRtotal <= 1269) {document.getElementById('RunTime').innerHTML = '55';}
			if (TwoMRtotal > 1269 & TwoMRtotal <= 1270) {document.getElementById('RunTime').innerHTML = '54';}
			if (TwoMRtotal > 1270 & TwoMRtotal <= 1272) {document.getElementById('RunTime').innerHTML = '53';}
			if (TwoMRtotal > 1272 & TwoMRtotal <= 1274) {document.getElementById('RunTime').innerHTML = '52';}
			if (TwoMRtotal > 1274 & TwoMRtotal <= 1276) {document.getElementById('RunTime').innerHTML = '51';}
			if (TwoMRtotal > 1276 & TwoMRtotal <= 1278) {document.getElementById('RunTime').innerHTML = '50';}
			if (TwoMRtotal > 1278 & TwoMRtotal <= 1279) {document.getElementById('RunTime').innerHTML = '49';}
			if (TwoMRtotal > 1279 & TwoMRtotal <= 1281) {document.getElementById('RunTime').innerHTML = '48';}
			if (TwoMRtotal > 1281 & TwoMRtotal <= 1283) {document.getElementById('RunTime').innerHTML = '47';}
			if (TwoMRtotal > 1283 & TwoMRtotal <= 1285) {document.getElementById('RunTime').innerHTML = '46';}
			if (TwoMRtotal > 1285 & TwoMRtotal <= 1287) {document.getElementById('RunTime').innerHTML = '45';}
			if (TwoMRtotal > 1287 & TwoMRtotal <= 1288) {document.getElementById('RunTime').innerHTML = '44';}
			if (TwoMRtotal > 1288 & TwoMRtotal <= 1290) {document.getElementById('RunTime').innerHTML = '43';}
			if (TwoMRtotal > 1290 & TwoMRtotal <= 1292) {document.getElementById('RunTime').innerHTML = '42';}
			if (TwoMRtotal > 1292 & TwoMRtotal <= 1294) {document.getElementById('RunTime').innerHTML = '41';}
			if (TwoMRtotal > 1294 & TwoMRtotal <= 1296) {document.getElementById('RunTime').innerHTML = '40';}
			if (TwoMRtotal > 1296 & TwoMRtotal <= 1297) {document.getElementById('RunTime').innerHTML = '39';}
			if (TwoMRtotal > 1297 & TwoMRtotal <= 1299) {document.getElementById('RunTime').innerHTML = '38';}
			if (TwoMRtotal > 1299 & TwoMRtotal <= 1301) {document.getElementById('RunTime').innerHTML = '37';}
			if (TwoMRtotal > 1301 & TwoMRtotal <= 1303) {document.getElementById('RunTime').innerHTML = '36';}
			if (TwoMRtotal > 1303 & TwoMRtotal <= 1305) {document.getElementById('RunTime').innerHTML = '35';}
			if (TwoMRtotal > 1305 & TwoMRtotal <= 1306) {document.getElementById('RunTime').innerHTML = '34';}
			if (TwoMRtotal > 1306 & TwoMRtotal <= 1308) {document.getElementById('RunTime').innerHTML = '33';}
			if (TwoMRtotal > 1308 & TwoMRtotal <= 1310) {document.getElementById('RunTime').innerHTML = '32';}
			if (TwoMRtotal > 1310 & TwoMRtotal <= 1312) {document.getElementById('RunTime').innerHTML = '31';}
			if (TwoMRtotal > 1312 & TwoMRtotal <= 1314) {document.getElementById('RunTime').innerHTML = '30';}
			if (TwoMRtotal > 1314 & TwoMRtotal <= 1315) {document.getElementById('RunTime').innerHTML = '29';}
			if (TwoMRtotal > 1315 & TwoMRtotal <= 1317) {document.getElementById('RunTime').innerHTML = '28';}
			if (TwoMRtotal > 1317 & TwoMRtotal <= 1319) {document.getElementById('RunTime').innerHTML = '27';}
			if (TwoMRtotal > 1319 & TwoMRtotal <= 1321) {document.getElementById('RunTime').innerHTML = '26';}
			if (TwoMRtotal > 1321 & TwoMRtotal <= 1323) {document.getElementById('RunTime').innerHTML = '25';}
			if (TwoMRtotal > 1323 & TwoMRtotal <= 1324) {document.getElementById('RunTime').innerHTML = '24';}
			if (TwoMRtotal > 1324 & TwoMRtotal <= 1326) {document.getElementById('RunTime').innerHTML = '23';}
			if (TwoMRtotal > 1326 & TwoMRtotal <= 1328) {document.getElementById('RunTime').innerHTML = '22';}
			if (TwoMRtotal > 1328 & TwoMRtotal <= 1330) {document.getElementById('RunTime').innerHTML = '21';}
			if (TwoMRtotal > 1330 & TwoMRtotal <= 1332) {document.getElementById('RunTime').innerHTML = '20';}
			if (TwoMRtotal > 1332 & TwoMRtotal <= 1333) {document.getElementById('RunTime').innerHTML = '19';}
			if (TwoMRtotal > 1333 & TwoMRtotal <= 1335) {document.getElementById('RunTime').innerHTML = '18';}
			if (TwoMRtotal > 1335 & TwoMRtotal <= 1337) {document.getElementById('RunTime').innerHTML = '17';}
			if (TwoMRtotal > 1337 & TwoMRtotal <= 1339) {document.getElementById('RunTime').innerHTML = '16';}
			if (TwoMRtotal > 1339 & TwoMRtotal <= 1341) {document.getElementById('RunTime').innerHTML = '15';}
			if (TwoMRtotal > 1341 & TwoMRtotal <= 1342) {document.getElementById('RunTime').innerHTML = '14';}
			if (TwoMRtotal > 1342 & TwoMRtotal <= 1344) {document.getElementById('RunTime').innerHTML = '13';}
			if (TwoMRtotal > 1344 & TwoMRtotal <= 1346) {document.getElementById('RunTime').innerHTML = '12';}
			if (TwoMRtotal > 1346 & TwoMRtotal <= 1348) {document.getElementById('RunTime').innerHTML = '11';}
			if (TwoMRtotal > 1348 & TwoMRtotal <= 1350) {document.getElementById('RunTime').innerHTML = '10';}
			if (TwoMRtotal > 1350 & TwoMRtotal <= 1351) {document.getElementById('RunTime').innerHTML = '9';}
			if (TwoMRtotal > 1351 & TwoMRtotal <= 1353) {document.getElementById('RunTime').innerHTML = '8';}
			if (TwoMRtotal > 1353 & TwoMRtotal <= 1355) {document.getElementById('RunTime').innerHTML = '7';}
			if (TwoMRtotal > 1355 & TwoMRtotal <= 1357) {document.getElementById('RunTime').innerHTML = '6';}
			if (TwoMRtotal > 1357 & TwoMRtotal <= 1359) {document.getElementById('RunTime').innerHTML = '5';}
			if (TwoMRtotal > 1359 & TwoMRtotal <= 1360) {document.getElementById('RunTime').innerHTML = '4';}
			if (TwoMRtotal > 1360 & TwoMRtotal <= 1362) {document.getElementById('RunTime').innerHTML = '3';}
			if (TwoMRtotal > 1362 & TwoMRtotal <= 1364) {document.getElementById('RunTime').innerHTML = '2';}
			if (TwoMRtotal > 1364 & TwoMRtotal <= 1366) {document.getElementById('RunTime').innerHTML = '1';}
			if (TwoMRtotal > 1366) {document.getElementById('RunTime').innerHTML = '0';}
	    if (TwoMRmin === null || TwoMRmin === "") {document.getElementById("RunTime").innerHTML = "";}
	    if (TwoMRsec === null || TwoMRsec === "") {document.getElementById("RunTime").innerHTML = "";}

	    //Total Score
	    var mdlpoint = Number(document.getElementById("MDLid").innerHTML);
	    var sptpoint = Number(document.getElementById("SPTid").innerHTML);
	    var hrppoint = Number(document.getElementById("HRPid").innerHTML);
	    var sdcpoint = Number(document.getElementById("SDCid").innerHTML);
	    var ltkpoint = Number(document.getElementById("LTKid").innerHTML);
	    var plkpoint = Number(document.getElementById("PLKid").innerHTML);
	    var runpoint = Number(document.getElementById("RunTime").innerHTML);

      var mdlinput = document.getElementById("MDLid").value;

      if (((ltkpoint >= plkpoint) || plkpoint == "" || plkpoint == null)
        & (isNaN(mdlinput) == true))
       {
        const LTKadd = Number(mdlpoint + sptpoint + hrppoint +
                            sdcpoint + ltkpoint + runpoint
                            );
        //const LTKadd_isNA = isNaN(LTKadd) ? '' : '';
        const LTKfinal = LTKadd
        //const LTKpercent = (LTKadd/6) * 100
        //document.getElementById("Score").innerHTML = percent;
        $('#LTKScore').html(LTKfinal);
      };

      if ((ltkpoint <= plkpoint) || ltkpoint == "" || ltkpoint == null) {
        const PLKadd = Number(mdlpoint + sptpoint + hrppoint +
                            sdcpoint + plkpoint + runpoint
                            );
        const PLKadd_isNA = isNaN(PLKadd) ? '' : '';
        const PLKfinal = PLKadd
        const PLKpercent = (PLKadd/6) * 100
        //document.getElementById("Score").innerHTML = percent;
        $('#PLKScore').html(PLKfinal);
      };

	});

});
