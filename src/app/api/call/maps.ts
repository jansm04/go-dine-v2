const locations = new Map();
const provinces = new Map();

locations.set("Toronto", { latitude: 43.6532, longitude: -79.3832 });
locations.set("Vancouver", { latitude: 49.2827, longitude: -123.1207 });
locations.set("Montreal", { latitude: 45.5019, longitude: -73.5674 });
locations.set("Calgary", { latitude: 51.0447, longitude: -114.0719 });
locations.set("Winnipeg", { latitude: 49.8954, longitude: -97.1385 });
locations.set("Ottawa", { latitude: 45.4215, longitude: -75.6972 });
locations.set("Edmonton", { latitude: 53.5461, longitude: -113.4937 });

provinces.set("Toronto", "ON");
provinces.set("Vancouver", "BC");
provinces.set("Montreal", "QC");
provinces.set("Calgary", "AB");
provinces.set("Winnipeg", "MB");
provinces.set("Ottawa", "ON");
provinces.set("Edmonton", "AB");

module.exports = { locations, provinces };