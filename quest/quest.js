import quests from '../data.js';
import { renderQuest, findById } from './questUtils.js';
const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);
console.log(params);
const questId = params.get('id');
console.log(questId);

const quest = findById(quests, questId);
console.log(quest)
const section = renderQuest(quest);
main.append(section);
