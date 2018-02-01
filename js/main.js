$(window).load(function(){
     $('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "December 14, 2019 18:03:26",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});

function updateStatusCallback() {
	console.log('status callback ok');
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    var accessToken = response.authResponse.accessToken;
	$('#access_token').innerHTML(accessToken);
  });
}

$(document).ready(function() {
  $.ajaxSetup({ cache: true });

  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){

    FB.init({
      appId: '147462132637476',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     

    FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
	    var accessToken = response.authResponse.accessToken;
	    $('#access_token').innerHTML(accessToken);
	  } 
	} );
    
    /* make the API call */
	FB.api(
	    "/10155277882381167",
	    function (response) {
	      if (response && !response.error) {
	        /* handle the result */
	        $('#akimctr').innerHTML(response.summary.total_count);
	      }
	    }
	);

  });

});