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
    
    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = choiceResults.result;
    questEl.append(resultsDiv);
    user.hp += choiceResults.hp;
    user.gold += choiceResults.gold;
    saveUser(user);

});