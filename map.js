let box1 = document.getElementById("box1")
box1.addEventListener("click", function (evt) {
  console.log("Clicked!");
  let map = document.getElementById("map");
  const visible = map.getAttribute("visible");
  map.setAttribute("visible", !visible);
});



let key_locations = document.getElementsByName('key_locations')
console.log(key_locations)

key_locations.forEach(key_location => {
  key_location.addEventListener('click', e => {
    console.log(key_location.id)
    let location = key_location.id
    window.location.replace(`${location}.html`)
    
  })
})