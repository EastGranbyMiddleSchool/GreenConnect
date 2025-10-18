document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([41.6, -72.7], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var locations = [
        {name: "East Granby Recycling ♻️", coords: [41.8792, -72.7382], info: "East Granby recycling center info"},
        {name: "Hartford Park 🌳", coords: [41.7658, -72.6734], info: "Hartford Park details"},
        {name: "Windsor Locks Community Garden 🌻", coords: [41.9223, -72.6270], info: "Windsor Locks Garden info"}
    ];

    locations.forEach(function(loc){
        var marker = L.marker(loc.coords).addTo(map).bindPopup(loc.name);
        marker.on('click', function() {
            document.getElementById('info-panel').innerText = loc.info;
        });
    });
});
