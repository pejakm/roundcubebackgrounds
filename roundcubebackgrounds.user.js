// ==UserScript==
// @name           RoundCube Backgrounds
// @namespace      https://github.com/pejakm/roundcubebackgrounds
// @description    Apply GMail backgrounds to RoundCube webmail
// @version        0.1.0
// @author         pejakm
// @license        GPLv3+
// @include        http://demo.roundcube.net/mail/*
// ==/UserScript==

// ### User settings start ###
// Available themes:
//	ocean (changes during day)
//	mountains, beach, planets (changes every day in a week)
//	wood, desk, pebbles, graffiti, turf, treetops (static, does not change)
theme = "ocean";
// Available resolutions:
//	1050x600
//	1280x800
//	1440x900
//	1680x1050
//	1920x1200
res = "1920x1200";
// ### User settings end ###

// Core
var version = '0.1.0';
var datum = new Date();

function makeEvent(func) {
func();
}

// Themes
// Ocean theme
function ocean() {

  var morning_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_morning_'+res+'.jpg';
  var noon_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_noon_'+res+'.jpg';
  var noon2_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_noon2_'+res+'.jpg';
  var afternoon_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_afternoon_'+res+'.jpg';
  var evening_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_evening_'+res+'.jpg';
  var night_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_night_'+res+'.jpg';
  var night2_img = 'https://www.gstatic.com/ui/v1/icons/mail/themes/phantasea/bg_night2_'+res+'.jpg';

  var image;
  var sat = datum.getHours();

  if (sat >= 5 && sat < 8 ) {
    image = morning_img;
  }
  else if (sat >= 8 && sat < 11) {
    image = noon_img;
  }
  else if (sat >= 11 && sat < 13) {
    image = noon2_img;
  } 
  else if (sat >= 13 && sat < 19) {
    image = afternoon_img;
  }
  else if (sat >= 19 && sat < 22 ) {
    image = evening_img;
  }
  else if (sat >= 22 && sat < 2 ) {
    image = night_img;
  }
  else { 
    image = night2_img;
  }
  return image;
}

// Mountains theme
function mountains() {
  var mday = new Array(7);
  mday[0] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_sun_'+res+'.jpg';
  mday[1] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_mon_'+res+'.jpg';
  mday[2] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_tue_'+res+'.jpg';
  mday[3] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_wed_'+res+'.jpg';
  mday[4] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_thu_'+res+'.jpg';
  mday[5] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_fri_'+res+'.jpg';
  mday[6] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/mountains/bg_sat_'+res+'.jpg';
  return mday[datum.getDay()];
}

// Beach theme
function beach() {
  var mday = new Array(7);
  mday[0] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_sun_'+res+'.jpg';
  mday[1] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_mon_'+res+'.jpg';
  mday[2] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_tue_'+res+'.jpg';
  mday[3] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_wed_'+res+'.jpg';
  mday[4] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_thu_'+res+'.jpg';
  mday[5] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_fri_'+res+'.jpg';
  mday[6] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/beach2/bg_sat_'+res+'.jpg';
  return mday[datum.getDay()];
}

// Planets theme
function planets() {
  var mday = new Array(7);
  mday[0] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_sun_'+res+'.jpg';
  mday[1] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_moon_'+res+'.jpg';
  mday[2] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_mars_'+res+'.jpg';
  mday[3] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_mercury_'+res+'.jpg';
  mday[4] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_jupiter_'+res+'.jpg';
  mday[5] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_venus_'+res+'.jpg';
  mday[6] = 'http://www.gstatic.com/ui/v1/icons/mail/themes/planets/bg_saturn_'+res+'.jpg';
  return mday[datum.getDay()];
}

// Static themes
function statictheme(tema) {
  var wood = 'http://www.gstatic.com/ui/v1/icons/mail/themes/wood/bg_'+res+'.jpg';
  var desk = 'http://www.gstatic.com/ui/v1/icons/mail/themes/desk/bg2_'+res+'.jpg';
  var pebbles = 'http://www.gstatic.com/ui/v1/icons/mail/themes/pebbles/bg4_'+res+'.jpg';
  var graffiti = 'http://www.gstatic.com/ui/v1/icons/mail/themes/graffiti/bg_'+res+'.jpg';
  var turf = 'http://www.gstatic.com/ui/v1/icons/mail/themes/turf/bg3_'+res+'.jpg';
  var treetops = 'http://www.gstatic.com/ui/v1/icons/mail/themes/treetops/bg4_'+res+'.jpg';
  return(eval(tema));
}

function image() {
  if (theme == 'ocean' || theme == 'mountains' || theme == 'beach' || theme == 'planets') {
    return eval(theme + '()');
  }
  else {
    return statictheme(theme);
  }
}

function themerc() {
  var bdys;

  // Thanks, nowrep! :)
  if (!window.frameElement) {
    bdys = 'url("'+image()+'") no-repeat center top transparent';
  }
  else {
    bdys = 'transparent';
  }

  var stil = document.createElement('style');
  stil.innerHTML = '\nbody { background: '+bdys+' }\nbody.minimal, .messagelist tbody td a { color: black; }\n';
  stil.innerHTML += '#topnav, #mailview-top, #mailview-bottom, #messagelistfooter, #taskbar a.button-selected, .uibox, .listbox, .listbox .boxfooter, .boxfooter .listbutton, .records-table tbody td { background: transparent; }\n';
//   stil.innerHTML += '#mailboxlist li.mailbox, ul.listing li, .listbox table.listing { background-color: transparent; }\n';
  stil.type = 'text/css'
  document.head.appendChild(stil);
}

makeEvent(themerc);
