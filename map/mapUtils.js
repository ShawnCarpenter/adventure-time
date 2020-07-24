export function renderStats(user){
    const statsEl = document.createElement('section');
    statsEl.className = 'user-stats';
    
    const nameEl = document.createElement('div');
    nameEl.id = 'name';
    nameEl.textContent = `Name: ${user.name}`;

    const classEl = document.createElement('div');
    classEl.id = 'class';
    classEl.textContent = `Class: ${user.class}`;

    const hpEl = document.createElement('div');
    hpEl.id = 'hp';
    hpEl.textContent = `HP: ${user.hp}`;

    const goldEl = document.createElement('div');
    goldEl.id = 'gold';
    goldEl.textContent = `Gold: ${user.gold}`;

    const completedEl = document.createElement('div');
    completedEl.id = 'completed';
    const numberCompleted = Object.keys(user.completed).length;
    completedEl.textContent = `${user.name} has completed ${numberCompleted} quest${numberCompleted === 1 ? '' : 's' }`;

    statsEl.append(nameEl, classEl, hpEl, goldEl, completedEl);
    return statsEl;
} 
export function renderQuestLink(quest, user) {
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