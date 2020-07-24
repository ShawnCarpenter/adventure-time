import quests from '../data.js';
import { renderQuest, findById } from './questUtils.js';
import { loadUser, saveUser } from '../userUtils.js';
const mainEl = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');


const quest = findById(quests, questId);
const section = renderQuest(quest);
mainEl.append(section);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const choice = formData.get('choices');
    const choiceResults = findById(quest.choices, choice);
    const user = loadUser();
    const questEl = document.getElementById('quest');
    const resultsEl = document.createElement('div');
    const returnButtonEl = document.createElement('button');

    resultsEl.textContent = choiceResults.result;
    returnButtonEl.addEventListener('click', () => {window.location = '/map';});
    returnButtonEl.textContent = 'Return to map';
    resultsEl.append(returnButtonEl);
    questEl.append(resultsEl);

    user.hp += choiceResults.hp;
    user.gold += choiceResults.gold;
    saveUser(user);
    
});