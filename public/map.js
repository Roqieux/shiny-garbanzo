async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    mapId: "481e26f102ca36c2",
    center: { lat: 39.97774274569622, lng: -75.15607170327148 },
    zoom: 12,
  });

  // Todo: get fridges array from db table
  {
    const location = {
      id: 1,
      fridge_name: "700 N 3rd St",
      OwnerId: 1,
      coords: "700 N 3rd St",
      isPublic: true
    };
    const addressString = location.coords.replaceAll(' ', '+');

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString},+Philadelphia,+PA&key=AIzaSyD6L6whRm8FlsozW7lN8bUic-Jh8uClIyU`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const locLatLng = data.results[0].geometry.location;
        console.log(locLatLng)

        const marker = new AdvancedMarkerElement({
          map,
          position: locLatLng,
        })
        console.log(marker.position);
      })
  };
};