function linkedinButton() {
   window.open("https://www.linkedin.com/in/muzaffer-ozen/", "_blank").focus();
}

function towButton() {
  window.open("https://weather.fandom.com/wiki/Types_of_Weather", "_blank").focus();
}

function wcButton() {
  window.open("https://weather.com/","_blank").focus();
}

function ufButton() {
  window.open("https://www.weather.gov/forecastmaps", "_blank").focus();
}

function sButton() {
  window.open("https://www.weather.gov/lmk/weathersafetyrules", "_blank").focus();
}

//Make it so if its night time the linear gradient for background is darker, and lighter for day time.
function descriptionWeather(backgroundName, value) {
  let code = Math.round(value / 100);
  if (code === 2 || code === 3 || code === 5 || value === 801 || value ===  802 || value === 803 || value === 804) {
    document.getElementById(backgroundName).style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.imgur.com/IvyWDeU_d.webp?maxwidth=760&fidelity=grand)";
  } else if (code === 6) {
    document.getElementById(backgroundName).style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(https://i.imgur.com/TAScAvF_d.webp?maxwidth=760&fidelity=grand)"
  } else if (code === 7) {
    document.getElementById(backgroundName).style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(https://i.imgur.com/rjCaCTm_d.webp?maxwidth=760&fidelity=grand)"
  } else {
    document.getElementById(backgroundName).style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0,0.15)), url(https://i.imgur.com/qpWlAPX_d.webp?maxwidth=760&fidelity=grand)";
  }
}

function updateInfo() {
  let name1 = document.getElementById("name1").innerHTML;
  let tempTest1 = document.getElementById("temp1");
  let descriton1 = document.getElementById("desc1");
  let hAndL1 = document.getElementById("HighLow1");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name1 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest1.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxOne",descValue)
    descriton1.innerHTML = descName;
    hAndL1.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })

  let name2 = document.getElementById("name2").innerHTML;
  let tempTest2 = document.getElementById("temp2");
  let descriton2 = document.getElementById("desc2");
  let hAndL2 = document.getElementById("HighLow2");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name2 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest2.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxTwo",descValue)
    descriton2.innerHTML = descName;
    hAndL2.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })
  
  let name3 = document.getElementById("name3").innerHTML;
  let tempTest3 = document.getElementById("temp3");
  let descriton3 = document.getElementById("desc3");
  let hAndL3 = document.getElementById("HighLow3");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name3 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest3.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxThree",descValue)
    descriton3.innerHTML = descName;
    hAndL3.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })
  
  let name4 = document.getElementById("name4").innerHTML;
  let tempTest4 = document.getElementById("temp4");
  let descriton4 = document.getElementById("desc4");
  let hAndL4 = document.getElementById("HighLow4");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name4 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest4.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxFour",descValue)
    descriton4.innerHTML = descName;
    hAndL4.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })

  let name5 = document.getElementById("name5").innerHTML;
  let tempTest5 = document.getElementById("temp5");
  let descriton5 = document.getElementById("desc5");
  let hAndL5 = document.getElementById("HighLow5");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name5 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest5.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxFive",descValue)
    descriton5.innerHTML = descName;
    hAndL5.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })

  let name6 = document.getElementById("name6").innerHTML;
  let tempTest6 = document.getElementById("temp6");
  let descriton6 = document.getElementById("desc6");
  let hAndL6 = document.getElementById("HighLow6");

  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + name6 + "&units=imperial&appid=3a501e6885616ae5a4ffdefeb17a61af")
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['id'];
    var descName = data['weather'][0]['description']
    var tempMax = data['main']['temp_max'];
    var tempMin = data['main']['temp_min'];
    tempTest6.innerHTML = "<b>" + Math.round(tempValue) + "°</b>";
    descriptionWeather("boxSix",descValue)
    descriton6.innerHTML = descName;
    hAndL6.innerHTML = "<b>H: " + Math.round(tempMax) + "°  L: " + Math.round(tempMin) + "°</b>"
  })
}

window.onload = updateInfo();
