// import quests from '../data';
import { renderStats } from '../map/mapUtils.js';
import { loadUser } from '../userUtils.js';
const resultsEl = document.querySelector('main');

const user = loadUser();

const statsEl = renderStats(user);
resultsEl.append(statsEl);
if (user.hp <= 0) {
    const deadEl = document.createElement('h1');
    deadEl.textContent = `You died but you had $${user.gold} too bad you can't take it with you.`;
    resultsEl.append(deadEl);
}

