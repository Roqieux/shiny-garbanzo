async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    mapId: "481e26f102ca36c2",
    center: { lat: 39.97774274569622, lng: -75.15607170327148 },
    zoom: 12,
  });

  const infoWindow = new InfoWindow();

  // Todo: get fridges array from db table
  const location = {
    id: 1,
    fridge_name: "700 N 3rd St",
    OwnerId: 1,
    coords: "700 N 3rd St",
    isPublic: true
  };
  // Todo: insert for-loop here at next curly bracket
  {
    const addressString = location.coords.replaceAll(' ', '+');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString},+Philadelphia,+PA&key=AIzaSyD6L6whRm8FlsozW7lN8bUic-Jh8uClIyU`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const locLatLng = data.results[0].geometry.location;
        console.log(locLatLng)

        const glyphImg = document.createElement('div');
        glyphImg.innerHTML = '<i class="material-icons" style="font-size:20px">kitchen</i>';
        const pin = new PinElement({
          glyph: glyphImg,
          background: '#ffff00',
          borderColor: '#ffff00',
        });

        const marker = new AdvancedMarkerElement({
          map,
          // content: buildContent(location),
          content: pin.element,
          position: locLatLng,
          // remove title when fridge card is complete?
          title: location.fridge_name
        })
        console.log(marker.position);

        marker.addListener('click', ({ domEvent, locLatLng }) => {
          console.log('Toot-Toot!')
          const { target } = domEvent;

          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
        })
        // marker.addListener('mouseover', () => {
        //   console.log('Tickle-Tickle!')
        // })
      })
  };
};

// Todo: function buildContent(data)
// Todo: (maybe?) function toggleHilight()

function buildContent(data) {

}