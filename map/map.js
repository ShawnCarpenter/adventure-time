import quests from '../data.js';
import { renderQuestLink, renderStats } from './mapUtils.js';
import { loadUser } from '../userUtils.js';

const userStats = document.querySelector('.user-stats');
const map = document.querySelector('.map');

const user = loadUser();

if (user.hp <= 0 || Object.keys(user.completed).length === quests.length) {
    window.location = '../results';
}
userStats.append(renderStats(user));

quests.forEach(quest => {
    const link = renderQuestLink(quest, user);
    map.append(link);
});





