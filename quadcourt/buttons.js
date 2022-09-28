//Setting up the script for toggling the Atrium Information panel
let quadInfo = document.getElementById("quadInfo")
quadInfo.addEventListener("click", function (evt) {
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