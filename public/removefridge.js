document.querySelectorAll(".remove-button").forEach((button)=>{
button.addEventListener("click", ()=>{
    const id= button.dataset.id
    console.log(id)
    fetch("/api/fridges/"+id, {method: "DELETE"}).then(response=>response.json())
    .then((data)=>{
        location.reload()
    })
})
})
