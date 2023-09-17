const loginFormHandler = async (event) => {
  event.preventDefault();

  console.log('hello')
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

  const firstname = document.querySelector('#firstname-signup').value.trim();
  const lastname = document.querySelector('#lastname-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const passwordConfirm = document.querySelector('#password-confirm').value.trim();

  if (firstname && lastname && username && email && password && password === passwordConfirm) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, username, email, password }),
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
  <div class="modal-content d-flex flex-column bg-custom container border rounded logcont container-fluid p-5 mt-5 stuff" id="content">
    <div class="align-items-end">  
      <button type="button" class="btn-close logbtn closebtn" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-header justify-content-center">
      <h5 class="modal-title my-0 fs-1" id="title">User Signup</h5>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="first_name-signup" class="col-form-label">First Name:</label>
          <input type="text" class="form-control" id="first_name-signup">
        </div>
        <div class="mb-3">
          <label for="last_name-signup" class="col-form-label">Last Name:</label>
          <input type="text" class="form-control" id="last_name-signup">
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
        <div class="mb-3">
          <label for="password-confirm" class="col-form-label">Confirm Password:</label>
          <input type="password" class="form-control" id="password-confirm">
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