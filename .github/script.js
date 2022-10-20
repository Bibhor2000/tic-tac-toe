//Assigning Variables
let turn = 0;

//functions
function ticTac(event) {
    
    if (event.target.className.includes('square') && turn % 2 === 0) {
        event.target.style.backgroundColor = 'red';
        alert('First Player')
    } else if (event.target.className.includes('square') && turn % 2 !== 0) {
        event.target.style.backgroundColor = 'yellow';
        alert('Second Player')
    }
    turn += 1
}

//event listener
document.addEventListener('click', ticTac)
