import quests from '../data.js';

const section = document.querySelector('section');

quests.forEach(quest => {
    const link = document.createElement('a');
    link.textContent = quest.title;
    link.href = `/quest/?id=${quest.id}`;
    section.append(link);
});
