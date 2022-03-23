var objRaw;
getJson()

async function getJson() {
    const response = await fetch("jsonData.json");
    const json = await response.json();
    objRaw = json;

    objRaw.issues.forEach(element => {
        if(element.fields.hasOwnProperty('parent'))
            console.log(element.fields)
    });
}
