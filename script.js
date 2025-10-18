// Day 1: просто коментарі, що будемо робити завтра
// 1. Ініціалізувати карту на Connecticut
// 2. Додати тестові точки (recycling, parks, gardens)
// 3. Додати попапи з інформацією
// 4. Додати список Eco Tips

// Day 2: Map Base — GreenConnect

// Ініціалізуємо карту
var map = L.map('map').setView([41.6, -72.7], 9); // Connecticut center

// Додаємо OpenStreetMap плитку
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Тестові точки: [координати, назва, тип]
var locations = [
    [41.7637, -72.6851, "Hartford Recycling Center ♻️"],
    [41.8420, -72.4883, "East Granby Park 🌳"],
    [41.9272, -72.6032, "Windsor Locks Community Garden 🌻"],
    [41.6688, -72.7534, "Simsbury Recycling ♻️"],
    [41.7860, -72.8470, "Bloomfield Park 🌳"]
];

// Додаємо маркери та попапи
locations.forEach(function(loc) {
    L.marker([loc[0], loc[1]]).addTo(map)
     .bindPopup("<b>" + loc[2] + "</b>");
});
