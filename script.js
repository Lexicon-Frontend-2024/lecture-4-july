// // prompt, alert, confirm

// // prompt - returnerar alltid en sträng
// let username = prompt('Please enter your username');
// console.log(username);

// // parseInt kan användas för att omvandla en string till ett number
// let age = parseInt(prompt('Please enter your age'));
// console.log(typeof age);

// // alert - används för att göra användaren uppmärksam på något
// alert(`Ditt användarnam är ${username} och du är ${age} år ung!`);

// // confirm - används för att få användaren att bekräfta något 
// let dec = confirm('Radera ditt konto. Är du säker???');
// if(dec) {
//     console.log('Konto raderat..');
// } else {
//     console.log('Konto inte raderat...');
// }


// Selektioner - if-satser, if-else-satser, switch-satser

// if-sats
// let age = 85;
// if(age > 15) {
//     console.log('Du är inte yngre än eller lika med 15 år');
// }

// if-else-sats
// age = 11;
// if(age > 15) {
//     console.log('Du är inte yngre än eller lika med 15 år');
// } else {
//     console.log('Du är yngre än 15 år');
// }

// Kontroll för att få åka karuseller

// let height = parseInt(prompt('Vänligen ange höjd'));
// let age = parseInt(prompt('Vänligen ange ålder'));
// if(height < 120) {
//     console.log('tyvärr, du är för kort...');
// } else if (age < 8) {
//     console.log('tyvärr, du är för ung...');
// } else {
//     console.log('Woop woop!!');
// }

// switch-sats
// let weekday = parseInt(prompt('Vänligen ange en siffa(1-7)'));

// switch(weekday) {
//     case 1:
//         console.log('Mondays suck...');
//         break;
//     case 2: 
//         console.log('Thuesdays are not much better...');
//         break;
//     case 3:
//         console.log('Wednesdays are the worst...');
//         break;
//     case 4:
//         console.log('Thursdays are ok...');
//         break;
//     case 5:
//         console.log('Fridays are the best...');
//         break;
//     case 6:
//         console.log('Saturdays are awesome...');
//         break;
//     case 7:
//         console.log('Sundays are relaxing...');
//         break;
//     default:
//         console.log('You need to learn how to read!');
//         break;
// }

// for-loopen, while-loop

// for-loopen skriva ut siffror
// for(let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// for-loopen för sträng
// let myName = 'Jesper';
// for(let i = 0; i < myName.length; i++) {
//     console.log(myName[i]);
// }

// while-loop skriva ut siffror
// let i = 1;
// while(i <= 100) {
//     console.log(i);
//     i++;
// }

// while-loop
// let sum = 0;
// let tal;

// while(tal !== 0) {
//     tal = parseInt(prompt('Vänligen ange ett tal(0 för att avsluta)'));
//     sum += tal;
// }
// console.log(`Summan blev så mycket som ${sum}`);

// while-loop för spel
// let play = true;
// while(play) {
//     console.log('Åh vilket roligt spel, hurra!');
//     play = confirm('Fortsätt spela?');
// }
// console.log('Å nu tröttnade jag...');

// Stegen - Computational Thinking Games
// let play = true;

// while(play) {
//     console.clear();
//     let goal = 1;
//     let nmbrOfThrows = 0;

//     while(goal < 7) {
//         let dice = Math.floor(Math.random() * 6 + 1);
//         nmbrOfThrows++;
//         console.log(dice);
//         if(dice === goal) {
//             goal++;
//             console.log('Snyggt!');
//         }
//     }
//     console.log(`Grattis! Du fick stege på ${nmbrOfThrows} kast!`);
//     play = confirm('Spela igen?');
// }

let lowScore = 50;

for(let i = 0; i < 100; i++) {
    let goal = 1;
    let nmbrOfThrows = 0;

    while(goal < 7) {
        let dice = Math.floor(Math.random() * 6 + 1);
        nmbrOfThrows++;
        if(dice === goal) {
            goal++;
        }
    }
    console.log(nmbrOfThrows);
    if(nmbrOfThrows < lowScore) {
        lowScore = nmbrOfThrows;
    }
}
console.log(`Ditt lägsta resultat var ${lowScore} kast`);