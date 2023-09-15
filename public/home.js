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



document.querySelector('#userfoods-button').addEventListener('click', viewMyFoodEventHandler);