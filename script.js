// prompt, alert, confirm

// prompt - returnerar alltid en sträng
let username = prompt('Please enter your username');
console.log(username);

// parseInt kan användas för att omvandla en string till ett number
let age = parseInt(prompt('Please enter your age'));
console.log(typeof age);

// alert - används för att göra användaren uppmärksam på något
alert(`Ditt användarnam är ${username} och du är ${age} år ung!`);

// confirm - används för att få användaren att bekräfta något 
let dec = confirm('Radera ditt konto. Är du säker???');
if(dec) {
    console.log('Konto raderat..');
} else {
    console.log('Konto inte raderat...');
}
