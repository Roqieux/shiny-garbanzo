const fridgeContent = async (event) => {
    event.preventDefault();

    const fridgeitem = document.querySelector('.fridge-item').value.trim();

    const response = await fetch('/api/')
}