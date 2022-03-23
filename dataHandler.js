let objRaw;

fetch("./jsonData.json")
    .then(response => {
        objRaw = response.json()
        console.log(objRaw)
    })




getData();