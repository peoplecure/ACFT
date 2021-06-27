$(window).load(function(){

	document.querySelector('#SDCslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#D').value = Math.floor(mins);
	  document.querySelector('#E').value = Math.floor(xtra);
	})

	document.querySelector('#RunTimeslider').addEventListener('input', function(e) {
	  let mins = e.target.value / 60;
	  let xtra = e.target.value % 60
	  document.querySelector('#G').value = Math.floor(mins);
	  document.querySelector('#H').value = Math.floor(xtra);
	})

});

$("#A").keyup(function() {
    $("#MDLslider").slider("value" , $(this).val())
});
