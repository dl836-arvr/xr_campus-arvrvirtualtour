let crossingInfo = document.getElementById("crossingInfo")
crossingInfo.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let info = document.getElementById("info");
  const visible = info.getAttribute("visible");
  info.setAttribute("visible", !visible);
});
let buttonInfo = document.getElementById("buttonInfo")
buttonInfo.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let info = document.getElementById("info");
  const visible = info.getAttribute("visible");
  info.setAttribute("visible", !visible);
});