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
    localStorage.setItem('USER', JSON.stringify(user));
}

export function loadUser(){
    return JSON.parse(localStorage.getItem('USER'));
    
}