var lang = 'pt_br'

//https://myaccount.google.com/yourdata/maps?hl=pt-BR&pli=1
function initMap() {
  var places = placesData;
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {lat: 21.00789 , lng: -10.940835},
    });
    for (var i in places.features){
      let place = places.features[i]
      let date = new Date(place.properties.date)
      let title = place.properties.location && place.properties.location.name ? place.properties.location.name : "Desconhecido"
      let address = place.properties.location && place.properties.location.address ? place.properties.location.address : "Desconhecido"
      
      console.log(place.properties.location && place.properties.location.name ? place.properties.location.name : "Desconhecido")
      

      const marker = new google.maps.Marker({
        position: {lat:place.geometry.coordinates[1],lng:place.geometry.coordinates[0]},
        map,
        title: title+" - "+date.getFullYear()
      });
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red.png')

      let placeDetail = getPlaceDetail(title)
      if (placeDetail){
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/purple.png')
        //marker.setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png')
        
        let picturesString = ''
        if (placeDetail.Pictures.length){
          for (var x in placeDetail.Pictures){
            picturesString += '<hr/><img width="100%" src="assets/img/travel/'+placeDetail.Pictures[x].path + '" title="'+placeDetail.Pictures[x].description[lang]+'" />'
          }
        }
        let visitsString = ''
        if (placeDetail.Visits.length){
          visitsString += "<hr><h4>"+placeDetail.Visits.join(',')+"</h4>"
        }
        const contentString =
          '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h3 id="firstHeading" class="firstHeading">'+placeDetail.Title+'</h3>' +
            '<div id="bodyContent">' + 
              placeDetail.Description[lang] +
            "</div>" +
            '<div id="picturesContent">' + 
              picturesString +
            "</div>" +

            '<div id="visitsContent">' + 
              visitsString +
            "</div>" +

          "</div>";

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      } else {
        const contentString = `
          <div>
            <h6>${title}</h6>
            <p>${date.getUTCMonth()+1}/${date.getFullYear()}</p>
            <p>${address}</p>
            <p>${place.geometry.coordinates[1]}, ${place.geometry.coordinates[0]}</p>
          </div>
        `;

        const infoWindow = new google.maps.InfoWindow({
          content: contentString
        });

        // adiciona clique no marcador
        marker.addListener("mouseover", () => {
          infoWindow.open({
            anchor: marker,
            map,
            shouldFocus: false
          });
        });

        // fechar ao tirar o mouse
        marker.addListener("mouseout", () => {
          infoWindow.close();
        });

      }

    }
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

  applyInternationalization()

})(jQuery); // End of use strict


function setLang(newlang){
  lang = newlang
  applyInternationalization()
  initMap()
}

function applyInternationalization(){
  for (var i in internationalData){
    var termObj = internationalData[i]
    var obj = $('#' + termObj.id)
    obj.html($($.parseHTML(termObj.label[lang])))
    console.log(termObj.id)
    console.log(obj.id)
  }
}

function getPlaceDetail(Title){
  for (var i in placesDetailsData){
    if (placesDetailsData[i].Title == Title){
      return placesDetailsData[i]
    }
  }
  return null
}

