var objRaw;
var issues = [];
let cardContainer;

getJson()

async function getJson() {
    const response = await fetch("jsonData.json");
    const json = await response.json();
    objRaw = json;

    objRaw.issues.forEach(element => {
        if(element.fields.hasOwnProperty('parent')){
            var elementFields = element.fields
            var issue = new Issue(elementFields.summary, elementFields.description.content[0].content[0].text, elementFields.parent.fields.summary) 
            issues.push(issue)
        }
            
    });

    initListOfTasks();
}

let createTaskCard = (issue) => {
    let card = document.createElement('div');
    card.className = 'issue card shadow cursor-pointer';
    card.id = 'cardsStories'

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = issue.title;
    title.className = 'card-title';

    let parent = document.createElement('div');
    parent.innerText = issue.parent;
    title.className = 'card-text';

    let description = document.createElement('div');
    description.innerText = issue.description;
    description.className = 'card-text';

    cardBody.appendChild(title);
    cardBody.appendChild(parent);
    cardBody.appendChild(description);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
}

let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    issues.forEach((issue) => {
        createTaskCard(issue);
    });
};   


