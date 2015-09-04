var map = L.map('map').setView([20, 0], 2);
        L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'examples.map-i875mjb7'
        }).addTo(map);

var info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'info');
			this._div.innerHTML = '<h4>Summary Stats</h4>';
			return this._div;
		};

		info.addTo(map);

        var bbox = null;
        L.geoJson(bbox).addTo(map);
        var bounds = L.geoJson(bbox).getBounds();
        map.fitBounds(bounds);
var geojsonLayer;
