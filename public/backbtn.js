const backBtnEventHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/')
  } else {
    alert('something went wrong')
  }


};

document.querySelector('#back-button').addEventListener('click', backBtnEventHandler);
