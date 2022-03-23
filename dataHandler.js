let obj;
getData();


function getData(){
    fetch("https://smartlifeapp.atlassian.net/rest/api/3/search?jql=ORDER%20BY%20Created")
    .then((response) => {
        obj = response.json();
        console.log(obj)
    })
}