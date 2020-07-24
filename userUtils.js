export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 30,
        gold: 0,
        completed: {}
    };
}

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

export function loadUser(){
    const rawUser = localStorage.getItem('USER');
    return JSON.parse(rawUser);
    
}