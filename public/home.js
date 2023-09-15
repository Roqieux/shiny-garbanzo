const viewMyFoodEventHandler = async (event) => {
    event.preventDefault();


    const response = await fetch(`/useritems`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/useritems')
    } else {
        alert('something went wrong')
    }


};

const viewMyFridgesEventhandler = async (event) => {


    //Insert Code Here
};

const loginBtnEventHandler = async (event) => {
    event.preventDefault();

    //Insert Code Here
};

const mapIconClickEventHandler = async (event) => {
    event.preventDefault();

    //Insert Code Here
}

// Called on page render, initializes map
async function initMap() {
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        mapId: "481e26f102ca36c2",
        center: { lat: 39.97774274569622, lng: -75.15607170327148 },
        zoom: 12,
    });

    // const infoWindow = new InfoWindow();

    // Retrieves fridges from database
    const fridges = await fetch('/api/fridges', {
        method: 'GET'
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            return data;
        });

    // For-loop to create marker for each fridge
    for (const fridge of fridges) {
        const addressString = fridge.coords.replaceAll(' ', '+');

        // Geocoder api call, convert address into coordinates
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString},+Philadelphia,+PA&key=AIzaSyD6L6whRm8FlsozW7lN8bUic-Jh8uClIyU`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const locLatLng = data.results[0].geometry.location;
                console.log(locLatLng)

                // Glyph image element for markers
                const glyphImg = document.createElement('div');
                glyphImg.innerHTML = '<i class="material-icons" style="font-size:20px">kitchen</i>';
                const pin = new PinElement({
                    glyph: glyphImg,
                    glyphColor: '#00d9ff',
                    background: '#ffff00',
                    borderColor: '#00d9ff',
                });

                // // Map card builder function
                // function buildContent(fridge) {
                //   console.log(pin.element)
                //   const content = document.createElement("div");

                //   content.classList.add("fridge-card");
                //   content.innerHTML = `
                //     <div class="details container-fluid">
                //         <div class="name">${fridge.fridge_name}</div>
                //         <div class="address">${fridge.coords}</div>
                //         <div class="features">
                //           <a class="btn btn-primary btn-sm mt-4" href="./testy.html" role="button">Get Started</a>
                //         </div>
                //     </div>
                //     `;
                //   return content;
                // }

                const marker = new AdvancedMarkerElement({
                    map,
                    // content: buildContent(fridge),
                    content: pin.element,
                    position: locLatLng,
                    // remove title when fridge card is complete?
                    title: fridge.fridge_name
                })
                console.log(marker.position);

                // marker.addListener('click', ({ domEvent, locLatLng }) => {
                //   console.log('Toot-Toot!');
                //   console.log(pin.element);
                //   console.log(buildContent(location));
                //   const { target } = domEvent;

                //   // infoWindow.close();
                //   // infoWindow.setContent(marker.title);
                //   // infoWindow.open(marker.map, marker);
                // })
                marker.addListener('click', () => {
                    console.log('Tickle-Tickle!');
                    window.location.href = `/fridgefood/:${fridge.id}`;
                })
            })
    };
};





document.querySelector('#userfoods-button').addEventListener('click', viewMyFoodEventHandler);