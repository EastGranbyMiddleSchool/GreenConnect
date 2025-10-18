document.addEventListener('DOMContentLoaded', function() {

    // Ініціалізація карти
    var map = L.map('map').setView([41.6, -72.7], 10);

    // Базовий шар OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Тестові точки
    var locations = [
        {name: "East Granby Recycling ♻️", coords: [41.8792, -72.7382], type: "Recycling"},
        {name: "Hartford Park 🌳", coords: [41.7658, -72.6734], type: "Park"},
        {name: "Windsor Locks Community Garden 🌻", coords: [41.9223, -72.6270], type: "Garden"},
        {name: "West Hartford Recycling ♻️", coords: [41.7663, -72.7421], type: "Recycling"},
        {name: "Simsbury Park 🌳", coords: [41.8430, -72.8418], type: "Park"}
    ];

    // Додаємо точки на карту
    locations.forEach(function(loc){
        L.marker(loc.coords).addTo(map)
         .bindPopup("<b>" + loc.name + "</b><br>Type: " + loc.type);
    });

});
