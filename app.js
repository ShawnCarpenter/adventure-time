// import functions and grab DOM elements
import { makeUser, saveUser } from './userUtils.js';
const form = document.querySelector('form');
// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = makeUser(formData);

    saveUser(user);
    
    window.location = '/map';

});




