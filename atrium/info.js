//This section was Written by Ryan Golden, N00150620, using modified code from Mary's JS

console.log("Loaded!");

//Setting up the script for toggling the Atrium Information panel
let atriumInfo = document.getElementById("atriumInfo")
atriumInfo.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let info = document.getElementById("info");
  const visible = info.getAttribute("visible");
  info.setAttribute("visible", !visible);
});


//Setting up the script for toggling the Map
let displayMap = document.getElementById("displayMap")
displayMap.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let info = document.getElementById("map");
  const visible = info.getAttribute("visible");
  info.setAttribute("visible", !visible);
});

//Making the buttons displayed on the Map load the different locations when selected
// let courtyard = document.getElementById("courtyard")
// let canteen = document.getElementById("canteen")
// let atrium = document.getElementById("atrium")
// let carriglea = document.getElementById("carriglea")
// let quad = document.getElementById("quad")
// let quad_court = document.getElementById("quad_court")
// let crossing = document.getElementById("crossing")


// if(window.location.pathname !== '/courtyard.html'){
//   courtyard.addEventListener("click", function (evt) {
//     window.location.replace("/courtyard/courtyard.html");
//   })
// ;}

// if(window.location.pathname !== 'atrium/atrium.html'){
//   atrium.addEventListener("click", function (evt) {
//     window.location.replace("/atrium/atrium.html");
//   })
// ;}

// if(window.location.pathname !== '/canteen.html'){
//   canteen.addEventListener("click", function (evt) {
//     window.location.replace("/canteen/canteen.html");
//   });
// ;}

// if(window.location.pathname !== '/carriglea.html'){
//   carriglea.addEventListener("click", function (evt) {
//     window.location.replace("/carriglea/carriglea.html");
//   });
// ;}

// if(window.location.pathname !== '/crossing.html'){
//   crossing.addEventListener("click", function (evt) {
//     window.location.replace("/crossing/crossing.html");
//   });
// ;}

// if(window.location.pathname !== '/quad.html'){
//   quad.addEventListener("click", function (evt) {
//     window.location.replace("/quad/quad.html");
//   });
// ;}

// if(window.location.pathname !== '/quadcourt.html'){
//   quad_court.addEventListener("click", function (evt) {
//     window.location.replace("/quadcourt/quadcourt.html");
//   });
// ;}

//Making the buttons displayed on the Map load the different locations when selected (New Code thanks Mary :])
let key_locations = document.getElementsByName('key_locations')
console.log(key_locations)

key_locations.forEach(key_location => {
  key_location.addEventListener('click', e => {
    console.log(key_location.id)
    let location = key_location.id
    window.location.replace(`/${location}/${location}.html`)
  })
})