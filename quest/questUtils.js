export function renderQuest(quest) {
    const sectionEl = document.createElement('section');
    sectionEl.id = 'quest';

    const titleDivEl = document.createElement('div');
    titleDivEl.textContent = quest.title;
    
    const descriptionEl = document.createElement('div');
    descriptionEl.textContent = quest.description;
    const imgEl = document.createElement('img');
    imgEl.src = quest.image;

    const formEl = document.createElement('form');
    
    quest.choices.forEach(choice => {
        const labelEl = document.createElement('label');

        const spanEl = document.createElement('span');
        spanEl.textContent = choice.description;

        const inputEl = document.createElement('input');
        inputEl.type = 'radio';
        inputEl.name = 'choices';
        inputEl.value = choice.id;
        labelEl.append(spanEl, inputEl);
        formEl.append(labelEl);
    });
    const buttonEl = document.createElement('button');
    buttonEl.type = 'submit';
    buttonEl.textContent = 'Choose Wisely';
    formEl.append(buttonEl);
    sectionEl.append(titleDivEl, descriptionEl, imgEl, formEl);
    return sectionEl;
}

export function findById(array, id) {
    let foundItem = null;
    array.forEach(item => {
        if (item.id === id) {
            foundItem = item;
        }
    });
    return foundItem;
}


