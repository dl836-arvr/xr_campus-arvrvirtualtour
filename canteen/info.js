let info_btn = document.getElementById("info_btn")
info_btn.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let canteen_info = document.getElementById("canteen_info");
  const visible = canteen_info.getAttribute("visible");
  canteen_info.setAttribute("visible", !visible);
});