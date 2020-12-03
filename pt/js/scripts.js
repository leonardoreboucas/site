

function loadPlaces(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'http://leonardoreboucas.com/pt/js/places.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

function initMap() {//#endregion

  loadPlaces(function(response) {
    // Parse JSON string into object
      var places = JSON.parse(response);
  // const places = [
  //   { name: 'Brasília', lat: -15.7934036, lng: -47.8823172,  visits: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020] },
  //   { name: 'Nova Iorque', lat: 40.7127281, lng: -74.0060152,  visits: [2017] },
  //   { name: 'Miami (apenas aeroporto)', lat: 25.7742658 , lng:  -80.1936589 ,  visits: [2017] },
  //   { name: 'Havana', lat: 23.135305, lng: -82.3589631,  visits: [2019] },
  //   { name: 'Varadero', lat: 23.149578, lng: -81.260025,  visits: [2019] },
  //   { name: 'Trinidad', lat: 21.843874749999998 , lng: -79.87629216881564 ,  visits: [2019] },
    
  //   { name: 'Cidade do Panamá', lat: 9.0036659, lng: -79.4938486999933  ,  visits: ["2017 (apenas aeroporto)" , 2018, 2019] },

  //   { name: 'San Blas', lat:   9.5859171 , lng: -78.87882882917526 ,  visits: [2019] },
  //   { name: 'Santiago', lat: -33.4377968, lng: -70.6504451  ,  visits: [2020] },
  //   { name: 'Valparaíso', lat: -33.0458456, lng: -71.6196749 ,  visits: [2020] },
  //   { name: 'Viña del Mar', lat: -33.0244535, lng: -71.5517636 ,  visits: [2020] },
  //   { name: 'San Pedro de Atacama', lat:-22.910832,lng: -68.2001376 ,  visits: [2020] },

  //   { name: 'Buenos Aires', lat:-36.3789925, lng: -60.3855889 ,  visits: [2013] },
  //   { name: 'Punta del Este', lat:-34.9632342, lng: -54.9439981 ,  visits: [2013] },
  //   { name: 'Montevidéu', lat:-34.9059039, lng: -56.1913569 ,  visits: [2013] },
  //   { name: 'Colônia del Sacramento', lat:-34.4698592, lng: -57.8433679 ,  visits: [2013] },
  //   { name: 'Puerto Iguazú', lat:-25.6107508, lng: -54.5764199,  visits: [2012] },
  //   { name: 'Ciudad del Este', lat:-25.5169015, lng: -54.6168645 ,  visits: [2012] },
  //   { name: 'Foz do Iguaçu', lat:-25.5401479, lng: -54.5858139 ,  visits: [2012] }
  // ];
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: places[0],
    });

    for (var i in places.features){
      let place = places[i]
      new google.maps.Marker({
        position: {lat:place.geometry.coordinates[1],lng:place.geometry.coordinates[0]},
        map,
        //title: `${place.name} - visita em: `+place.visits.join(', '),
        title: place.properties.Title,
      });
    }
  });
}

/*!
    * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  

  //Magnific popup calls
  $('#portfolio .detailed-node2faas').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

   //Magnific popup calls
   $('#portfolio .detailed-sagsat').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-get').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-sibe').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-sala').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-supervisao').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-prosesmt').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-revirim').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-prevex').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

   //Magnific popup calls
   $('#portfolio .detailed-pcf').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-treinamento').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-regimove').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-ppp').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-bolao').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  //Magnific popup calls
  $('#portfolio .detailed-gerlot').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
