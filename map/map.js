import quests from '../data.js';
import { loadUser } from '../userUtils.js';

const userStats = document.querySelector('.user-stats');
const map = document.querySelector('.map');

const user = loadUser();

quests.forEach(quest => {
    const link = createQuestLink(quest);
    
    map.append(link);
});
function createQuestLink(quest) {
    const link = document.createElement('a');
    link.textContent = quest.title;
    if (user.completed[quest.id]) {
        link.style.textDecoration = 'line-through';
        link.style.cursor = 'not-allowed';
    }
    else {
        link.href = `/quest/?id=${quest.id}`;
    }
    return link;
}

