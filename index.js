var map = L.map("map").fitWorld();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

map.locate({ setView: true, maxZoom: 16 });

function turganJoyim(e) {
  console.log(e);
  let radius = e.accuracy;
  L.marker(e.latlng).addTo(map);
  L.circle(e.latlng, radius).addTo(map);
}
map.on("locationfound", turganJoyim);

function lokatsyaTop() {
  alert("Internet is bad");
}
map.on("locationerror", lokatsyaTop);

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng);

  L.circle(e.latlng, radius)
    .addTo(map)
    .addTo(map)
    .bindPopup("Man primerno shu yerdaman");
}

map.on("locationfound", onLocationFound);
