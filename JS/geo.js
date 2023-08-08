var data = [
  { name: 'Location A', lat: 40.7128, lon: -74.0060 },
  { name: 'Location B', lat: 34.0522, lon: -118.2437 },
  { name: 'Location C', lat: 41.8781, lon: -87.6298 },
  // Add more data points as needed
];

function initMap() {
  var map = L.map('map').setView([39.8283, -98.5795], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  data.forEach(function(item) {
    L.marker([item.lat, item.lon]).addTo(map).bindPopup(item.name);
  });
}

// Function to update the map container height in mobile view
function updateMapHeight() {
  var mapContainer = document.getElementById('map');
  var windowHeight = window.innerHeight;
  mapContainer.style.height = (windowHeight * 0.4) + 'px'; // Adjust the percentage as needed
}

// Call the function to initialize the map and update the height
initMap();
updateMapHeight();

// Call the function to update the map container height when the window is resized
window.addEventListener('resize', updateMapHeight);
