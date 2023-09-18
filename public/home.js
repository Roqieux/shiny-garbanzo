const viewMyFoodEventHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/useritems`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    if (response.ok) {
        document.location.replace('/useritems')
    } else {
        alert('something went wrong')
    }


};

const viewMyFridgesEventHandler = async (event) => {
    event.preventDefault();
    console.log('testy!');

    const response = await fetch(`/userfridges`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    // console.log(response);
    if (response.ok) {
        document.location.replace('/userfridges')
    } else {
        alert('something went wrong')
    }


};

const loginBtnEventHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/login`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login')
    } else {
        alert('something went wrong')
    }


};

const logout = async () => {
    console.log('logout called!')
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert(response.statusText);
    }
};


let viewedFridge;
const mapIconClickEventHandler = async (event) => {
    event.preventDefault();
    console.log(viewedFridge);

    const response = await fetch(`/fridgefood/${viewedFridge}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(response);
    if (response.ok) {
        document.location.replace(`/fridgefood/${viewedFridge}`)
    } else {
        alert('something went wrong')
    }

};
// todo: restore map once key works again
// Called on page render, initializes map
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        mapId: "481e26f102ca36c2",
        center: { lat: 39.98774274569622, lng: -75.16607170327148 },
        zoom: 12,
    });

    const spawnpoint = await document.querySelector('.modal-spawnpoint');
    spawnpoint.innerHTML = `
<div class="modal-dialog modal-fullscreen-md-down">
    <div class="modal-content rounded-6 shadow">
      <div class="modal-body p-5">
        <div class="d-flex">
          <h2 class="fw-bold mb-0 modal-title">Fridge</h2>
          <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <ul class="d-grid gap-4 my-5 list-unstyled">
          <li class="d-flex gap-4">
            <i class="material-icons" style="font-size:48px">kitchen</i>
            <div>
              <h5 class="mb-0 modal-address">Location:</h5>
            </div>
          </li>
        </ul>
        <button type="button" class="btn btn-lg btn-primary fridge-btn mt-5 w-100" data-bs-dismiss="modal">Open
          Fridge</button>
      </div>
    </div>
  </div>`

    document.querySelector('.fridge-btn').addEventListener('click', mapIconClickEventHandler);

    // Retrieves fridges from database
    const fridges = await fetch('/api/fridges', {
        method: 'GET'
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        });

    // For-loop to create marker for each fridge
    for (const fridge of fridges) {
        const addressString = fridge.coords.replaceAll(' ', '+');

        // Geocoder api call, convert address into coordinates
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressString},+Philadelphia,+PA&key=AIzaSyD6L6whRm8FlsozW7lN8bUic-Jh8uClIyU`)
            .then((response) => response.json())
            .then((data) => {
                const locLatLng = data.results[0].geometry.location;

                // Glyph image element for markers
                const glyphImg = document.createElement('div');
                glyphImg.innerHTML = '<i class="material-icons" style="font-size:20px">kitchen</i>';
                const pin = new PinElement({
                    glyph: glyphImg,
                    glyphColor: '#00d9ff',
                    background: '#ffff00',
                    borderColor: '#00d9ff',
                });
                pin.element.setAttribute('type', 'button');
                pin.element.setAttribute('data-bs-toggle', 'modal');
                pin.element.setAttribute('data-bs-target', '#modal');

                const marker = new AdvancedMarkerElement({
                    map,
                    content: pin.element,
                    position: locLatLng,
                    // todo: remove title when fridge card is complete
                    title: fridge.fridge_name
                })

                marker.addListener('click', () => {
                    console.log('Tickle-Tickle!');

                    viewedFridge = fridge.id;

                    document.querySelector('.modal-title').textContent = fridge.fridge_name;
                    document.querySelector('.modal-address').textContent = 'Location: ' + fridge.coords;
                })
            })
    };
};




const loginBtn = document.querySelector('#login-button');
if (loginBtn) { loginBtn.addEventListener('click', loginBtnEventHandler) };
const logoutBtn = document.querySelector('#logout');
if (logoutBtn) { logoutBtn.addEventListener('click', logout) };

document.querySelector('#useritems-button').addEventListener('click', viewMyFoodEventHandler);
document.querySelector('#userfridges-button').addEventListener('click', viewMyFridgesEventHandler);
