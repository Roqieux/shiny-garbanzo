const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(username);
  console.log(password);

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

const signupSpawnpoint = async () => {
  const spawnpoint = await document.querySelector('.modal-spawnpoint');
  spawnpoint.innerHTML = `
  <div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="modal-title">User Registration</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="firstname-signup" class="col-form-label">First Name:</label>
          <input type="text" class="form-control" id="firstname-signup">
        </div>
        <div class="mb-3">
          <label for="lastname-signup" class="col-form-label">Last Name:</label>
          <input type="text" class="form-control" id="lastname-signup">
        </div>
        <div class="mb-3">
          <label for="email-signup" class="col-form-label">Email:</label>
          <input type="text" class="form-control" id="email-signup">
        </div>
        <div class="mb-3">
          <label for="username-signup" class="col-form-label">Username:</label>
          <input type="text" class="form-control" id="username-signup">
        </div>
        <div class="mb-3">
          <label for="password" class="col-form-label">Password:</label>
          <input type="password" class="form-control" id="password-signup">
        </div>
        <div>
          <input type="submit" class="btn btn-warning" id="signup-form" value="Submit">
        </div>
      </form>
    </div>
  </div>
</div>`;

  document.addEventListener('submit', signupFormHandler);
};

document
  .querySelector('#login-form')
  .addEventListener('click', loginFormHandler);

document.addEventListener('DOMContentLoaded', signupSpawnpoint);