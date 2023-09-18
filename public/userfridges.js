// const { use } = require("../controllers/homeRoutes");

const fridgeContent = async (event) => {
  event.preventDefault();

  const fridgeitem = document.querySelector('.fridge-item').value.trim();

  const response = await fetch('/api/')
};

const newFridgeSpawnpoint = async (event) => {
  event.preventDefault();
  const spawnpoint = await document.querySelector('.modal-spawnpoint');
  spawnpoint.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">New Phridge</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="new-fridge_name" class="col-form-label">Fridge Name:</label>
              <input type="text" class="form-control" id="new-fridge_name">
            </div>
            <div class="mb-3">
              <label for="street_number" class="col-form-label">Street Number:</label>
              <input type="text" class="form-control" id="street_number">
            </div>
            <div class="mb-3">
              <label for="street_name" class="col-form-label">Street Name:</label>
              <input type="text" class="form-control" id="street_name">
            </div>
            <div>
              <button type="button" class="btn btn-warning" id="fridge-signup-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;

  document.querySelector('#fridge-signup-btn').addEventListener('click', newFridgeHandler);
}

const newFridgeHandler = async (event) => {
  event.preventDefault();

  const fridge_name = document.querySelector('#new-fridge_name').value.trim();
  const streetNumber = document.querySelector('#street_number').value.trim();
  const streetName = document.querySelector('#street_name').value.trim();
  const coords = `${streetNumber} ${streetName}`;
  const is_public = true;
  const owner_id = await fetch('/api/users/owner_id', {
    method: 'GET'
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });

  console.log(JSON.stringify({ fridge_name, owner_id, coords, is_public }));

  if (fridge_name && streetNumber && streetName && owner_id) {
    const response = await fetch('/api/fridges', {
      method: 'POST',
      body: JSON.stringify({ fridge_name, owner_id, coords, is_public }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('ok!')
      console.log(response)
      // document.location.replace('/userfridges');
    } else {
      alert('Failed to Register New Phridge.');
    }
  }
  // todo: make sure fridge-create works after fixing withAuth

};

document.querySelector('.fridge-add-btn').addEventListener('click', newFridgeSpawnpoint);