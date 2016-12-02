/*------------------------------------------------------------------
Project:        Wolfram
Author:         Yevgeny Simzikov
URL:            http://simpleqode.com/
                https://twitter.com/YevSim
                https://www.facebook.com/simpleqode
Version:        2.2.2
Created:        18/08/2014
Last change:    07/07/2016
-------------------------------------------------------------------*/

/* -------------------- *\
    #GOOGLE MAP
\* -------------------- */

/* Requires Google Maps API */

function initialize() {
  var myLatlng = new google.maps.LatLng(40.5865,122.3917); // Change your location
  var mapOptions = {
    zoom: 5, // Change zoom value
    scrollwheel: false, // Change to "true" to enable users scale map on scroll
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Glasner Law Firm' // Change the pinpoint popup text
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
