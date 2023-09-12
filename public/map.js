async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    mapId: "481e26f102ca36c2",
    center: { lat: 39.97774274569622, lng: -75.15607170327148 },
    zoom: 12,
  });
}