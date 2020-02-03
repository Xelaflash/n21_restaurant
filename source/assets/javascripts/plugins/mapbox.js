import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const shop = [5.033759, 43.539678];

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [5.033759, 43.54], // starting position
      zoom: 14, // starting zoom
    });

    // create the popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h5>Emilie Ogier <br> Sophrologie</h5><br><p>2 impasse de l'étang - 13250 Saint Chamas</p>`
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new mapboxgl.Marker()
      .setLngLat(shop)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
  }
};

export { initMapbox };
