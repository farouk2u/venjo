		
jQuery(function($){

	/*  FullScreen slider
 	================================================*/ 

 	if($("#fullscreen-slider").length > 0 ){

		$("#fullscreen-slider").maximage({
			cycleOptions: {
				fx: 'fade',
				// Speed has to match the speed for CSS transitions
				speed: 1000, 
				timeout: 0,
				prev: '#arrow_left',
				next: '#arrow_right',
				pause: 1,
			  	before: function(last,current){
			  		
	                // $(".animate").remove("animated") ;
	            },

	            after: function(last,current){

	            	$(".animate").addClass("animated") ;
	                
	            }
			},

			onFirstImageLoaded: function(){

	             setTimeout(function(){

			       $(".animate").addClass("animated") ;  

			  	 }, 1500);  
	        }

		});
 	}

 	/*  bxslider slider
 	================================================*/ 

 	if( $('.bxslider').length>0 ) {


	 	$('.bxslider').bxSlider({
	 		// hideControlOnEnd: true,
	        minSlides: 1,
	        maxSlides: 1,
	        adaptiveHeight: true,
	        pager: false,
	        nextSelector: '#arrow_right',
	        prevSelector: '#arrow_left',
	        nextText: '',
	        prevText: '',
	 	});
 		
 	}


	/*  Owl carousel
 	================================================*/ 

 	if( $(".owl-team-carousel").length > 0 ) {

		$(".owl-team-carousel").owlCarousel({

		    slideSpeed : 300,
		    paginationSpeed : 400,
		    margin:25,
		    autoWidth:true,
			navigation : true, // Show next and prev buttons
			navigationText: [
		      "<i class='icons-arrow-left-gray arrow-left'></i>",
		      "<i class='icons-arrow-right-gray arrow-right'></i>"
		    ],

		      items : 3, //10 items above 1000px browser width
		      itemsDesktop : [1000,3], //5 items between 1000px and 901px
		      itemsDesktopSmall : [900,3], // betweem 900px and 601px
		      itemsTablet: [720,2], //2 items between 720 and 360
		      itemsTablet: [360,1], //2 items between 600 and 0
		      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		 
		});
	}

	if( $(".owl-single-caroussel ").length > 0 ) {

		$(".owl-single-caroussel ").owlCarousel({
			
		    slideSpeed : 300,
		    paginationSpeed : 400,
		    singleItem:true,
		    navigation : false, // Show next and prev buttons
		    pagination:true,
		    navigation : true, // Show next and prev buttons
			navigationText: [
		      "<i class='icons-arrow-left-blue'></i>",
		      "<i class='icons-arrow-right-blue'></i>"
		    ],
		 
		});
	}


	 /* Sticky Header
    ================================================*/
	$("#menu-stick").sticky({topSpacing:0});



	/* ScrollSpy
    ================================================*/
	if($("#scrollSpy").length > 0) {
    	

		$('#scrollSpy').onePageNav({
		   currentClass: 'is-active',
		   changeHash: false,
		 });

	}


	/* Scroll to specific target
	=================================================*/ 
	$("a.scroll").on("click", function(){

		var target = $(this).attr("href");
		$.scrollTo(target , 800);
		return false;
		
	});
	

	/* Count To
    ================================================*/

      $("#statistics").fappear(function() {

      		$(".timer").countTo();

      }); 



	/* Loader
    ================================================*/
     $(window).load(function(){

          $("#page-loader-holder").fadeOut();
    });


	 /* Images LigthBox
    ================================================*/
	 $('.lightbox').magnificPopup({

	 	type:'image',
	 	gallery:{enabled:true}

	});
 


	 /* Contact form ajax Handler
    ================================================*/

    $(".ajax-form").on('submit', function() {
    	var form = $(this);
        var formURL = $(this).attr("action");
        var postData = $(this).serializeArray();

        $.ajax({
            url: formURL,
            type: 'POST',
            data: postData,
            dataType: 'json',

            success:function(data, textStatus, jqXHR){

                if(data.success==1){

                    form.find(".alert").fadeOut();
                    form.find(".alert-success").html(data.message);
                    form.find(".alert-success").fadeIn(600);
                    

                }else{

                	form.find(".alert").fadeOut();
                    form.find(".alert-danger").html(data.message);
                    form.find(".alert-danger").fadeIn(600);

                }
            },

            error: function(jqXHR, textStatus, errorThrown)  { 
                
                console.log(errorThrown);
            }

        });
            

        return false;
     })



    /*
	On scroll animations
	================================================
	*/
    var $elems = $('.animate-onscroll');

    // loop through each item to check when it animates
	$elems.each(function(){

		$(this).fappear(function() {

    		$(this).addClass('animated');
    	});
	    	
	});


 	/*  Google map Script
 	====================================================*/ 

	function initMap() {

  		
  		var mapLatitude = 31.423308 ; // Google map latitude 
  		var mapLongitude = -8.075145 ; // Google map Longitude  

	    var myLatlng = new google.maps.LatLng( mapLatitude, mapLongitude );

	    var mapOptions = {

	            center: myLatlng,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            zoom: 10,
	            scrollwheel: false
	          };   

	    var map = new google.maps.Map(document.getElementById("map-holder"), mapOptions);
	    var image = 'assets/images/map-marker.png';

	    var marker = new google.maps.Marker({
	    	
	      position: myLatlng,
	      map : map,
	      icon : image,
	      
	    });

	    // To add the marker to the map, call setMap();
	    marker.setMap(map);

	    // Map Custom style
	    var styles = [
		  {
		    stylers: [
		      { hue: "#00aaff" },
		      { saturation: -100 }
		    ]
		  },{
		    featureType: "road",
		    elementType: "geometry",
		    stylers: [
		      { lightness: 80 },
		      { visibility: "simplified" }
		    ]
		  },{
		    featureType: "road",
		    elementType: "labels",
		    stylers: [
		      { visibility: "off" }
		    ]
		  }
		];

		map.setOptions({styles: styles});

	};

	if( $("#map-holder").length > 0 ) {

		initMap();
		
	}

});



		
