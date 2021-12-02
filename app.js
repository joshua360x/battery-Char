// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const chatchphrasesEl = document.getElementById('chatchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const headCountEL = document.getElementById('headCount');

let sloganArray = []
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    let headChoosen = headDropdown.value
    // increment the head change count state
    headCount++
    // update the dom for the head
    headEl.style.backgroundImage = `url(./assets/${headChoosen}.png)`;
    // let sourceCHild = document.createElement('img');
    // sourceCHild.src = `./assets/${headChoosen}.png`;
    // console.log(sourceCHild.src, 'photo produced');
    // headEl.append(sourceCHild);
    // update the stats to show the new count
    // headCountEL.textContent = `You have changed the head ${headCount} times`;
    // console.log(makeStatsString(headCount, 0, 0)); 
    // reportEl.textContent = makeStatsString(headCount, 0, 0);
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    let middleChoosen = middleDropdown.value
    // increment the middle change count state
    middleCount++
    // update the dom for the middle
    middleEl.style.backgroundImage = `url(./assets/${middleChoosen}.png)`;
    // let sourceCHild = document.createElement('img');
    // sourceCHild.src = `./assets/${middleChoosen}.png`;
    // console.log(sourceCHild.src, 'photo produced');
    // middleEl.append(sourceCHild);
    // update the stats to show the new count
    displayStats();

});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const bottomChoosen = bottomDropdown.value
    // increment the bottom change count state
    bottomCount++
    // update the dom for the bottom
    bottomEl.style.backgroundImage = `url(./assets/${bottomChoosen}1.png)`;
    // let sourceCHild = document.createElement('img');
    // sourceCHild.src = `./assets/${bottomChoosen}1.png`;
    // console.log(sourceCHild.src, 'photo produced');
    // bottomEl.append(sourceCHild);
    // update the stats to show the new count
    displayStats();

});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    let catchphrase = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    sloganArray.push(catchphrase);
    // update the dom for the bottom

    // clear out the form input's value so it's empty to the user
    catchphraseInput.textContent = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    // reportEl.textContent = `You have changed the Head State: ${headCount} times 
    // Middle State: ${middleCount} times 
    // Bottom State: ${bottomCount} times`
    const statsString = makeStatsString(headCount, middleCount, bottomCount); // call this function with the correct arguments
    reportEl.textContent = statsString;
}


function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphraseInput.value = '';
    clearingCatchPhrase()
    // loop through each catchphrase in state
    // and for each catchphrase
    for (let slogan of sloganArray) {
        // create an HTML element with the catchphrase as its text content
        const p = document.createElement('p');
        p.textContent = '';
        p.textContent = slogan;

        // and append that HTML element to the cleared-out DOM
        chatchphrasesEl.append(p)
        // console.log(typeof chatchphrasesEl)
        console.log(sloganArray);
       
        // sloganArray = []
    }
}

function clearingCatchPhrase(){ 
    while (chatchphrasesEl.firstChild) {
        chatchphrasesEl.removeChild(chatchphrasesEl.firstChild)
    }
}
