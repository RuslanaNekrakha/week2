const userNameInput = document.querySelector('#userNameField');
const userAgeInput = document.querySelector('#userAgeField');
const btn = document.querySelector('#submitBtn');

const greetingLine = document.querySelector('#greeting');
const feedbackLine = document.querySelector('#feedback');

btn.addEventListener('click', () => {  
    console.log('button clicked');

    let userName = userNameInput.value;
    let userAge = parseInt(userAgeInput.value); 

    console.log(userName);
    console.log(userAge);

    console.log(typeof(userName));
    console.log(typeof(userAge));

    greetingLine.innerHTML = `Hello, ${userName}!`;

    let feedbackMessage = ``; 

    if(userAge <13){
        feedbackMessage = `${userAge} : too young to sign up.`;
    } else {
        feedbackMessage = 'Welcome!'
    }

    feedbackLine.innerHTML = feedbackMessage;
});






