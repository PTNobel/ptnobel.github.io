function setCookie(cname, cvalue, exdays) {
  var expires;
  if (exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    expires = "expires="+ d.toUTCString();
  } else {
    expires = "";
  }
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

var travelTeamAd = document.getElementById('travel-team-ad');
if (travelTeamAd != null) {
  function closeTravelTeamAd() {
    setCookie("travel-team-ad", "closed", 100);
    $("#travel-team-ad").alert('close');
  }

  if (getCookie("travel-team-ad") === "closed") {
    travelTeamAd.style.display = 'none';
  } else {
    travelTeamAd.style.display = 'inherit';
  }

  document.getElementById("close-travel-team-ad").onclick = closeTravelTeamAd;
}
