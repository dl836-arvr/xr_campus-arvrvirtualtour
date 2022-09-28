let carrigleaInfo = document.getElementById("carrigleaInfo")
carrigleaInfo.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let info = document.getElementById("info");
  const visible = info.getAttribute("visible");
  info.setAttribute("visible", !visible);
});

let floorPlan = document.getElementById("floorPlan")
floorPlan.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let plan = document.getElementById("plan");
  const visible = plan.getAttribute("visible");
  plan.setAttribute("visible", !visible);
});