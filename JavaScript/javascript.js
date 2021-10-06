/* Selected Elements */

    // Git Player Info Button.
const startGamebButton = document.querySelector(".player-info button");

    // Git Input Value From Player Info.
const inputValue = document.querySelector('.player-info form input');

    // Get Head Blocks Game.
const headBlocks = document.querySelector('.head-memory');



/* Add Event Listener */

    // Creat Event Listener Has Function add and remov Style from Start Game Button.
inputValue.addEventListener('keyup' , () => { 
    if (inputValue.value === null || inputValue.value === ""){
        startGamebButton.style.opacity = ".8";
    }else{
        startGamebButton.style.opacity = "1";
    }
});

    // Creat Event Listener For Plyer Info button.
startGamebButton.addEventListener('click', startButton);








/* Function */

// Creat Function For Add Player Name And Remov If Finished.
function startButton() {
    const playerName = document.querySelector('.player-name #name');
    if (inputValue.value === null || inputValue.value === ""){
        playerName.textContent = "unKnow";
    } else {
        playerName.textContent = inputValue.value;
    }
    document.querySelector('.player-info').remove();

    // get show blocks function.
    showBlocks();
}


// Creat Function For Random Blocks.

    // Creat Timeng For Flep Cards.
let timeng = 1000;

    // Get Head Blocks Game.
const headBlocksGame = document.querySelector('.memory-blocks-game');
let blocks = Array.from(headBlocksGame.children);
let orderRang = [...Array(blocks.length).keys()];
shuftt(orderRang);

    // Creat ForEach For Add Index Number In Order Style For All Block
blocks.forEach((block, index) => {
    block.style.order = orderRang[index];

        
        // add Event Listener For Click Blocks For Flep Blocks.
    block.addEventListener('click', () =>{
        flepBlocks(block);
    });
});


    // Function For Random Number.
function shuftt(Array){

    // setting Variables.
    let current = Array.length,
    temp,
    random;

    while (current > 0) {
        // creat Random Number
        random = Math.floor(Math.random() * current);

        current--
        
        // save current element in stash.
        temp = Array[current];

        // current element = random element.
        Array[current] = Array[random];

        // random element = get element from stash.
        Array[random] = temp
    }
    return Array;
}



    // Creat Click For Flep Blocks Function.
function flepBlocks(selected) {

    // add class is-flep for blocks
    selected.classList.add('is-flep');

    // Filter for blocks has class is-flep.
    let filterClassIsFlep = blocks.filter(flepBlocks => flepBlocks.classList.contains('is-flep'));

    // stop if bloks has 2 classes is-flep.
    if (filterClassIsFlep.length === 2){

        // git Function stop clickeng.
        stopClickeng();

        // git Function matshes.
        matched(filterClassIsFlep[0], filterClassIsFlep[1]);
    }
}


    // creat function for stop clicken
function stopClickeng() {
    // add class no click
    headBlocksGame.classList.add('no-click');

        // waiteng timeng.
        setTimeout(() =>{
            
            // remove stop clickeng after 1s.
            headBlocksGame.classList.remove('no-click');

        },timeng)
}


    // creat Matched function.
function matched(firstCard, secondCard) {

    // Get player points
    let playerPoint = document.querySelector('.player-points #points'),
        playerFailure = document.querySelector('.player-points #failure');

    if (firstCard.dataset.blocks === secondCard.dataset.blocks){

        // add number for player points.
        playerPoint.innerHTML = parseInt(playerPoint.innerHTML) + 1;
        
        // remove class is-flep.
        firstCard.classList.remove('is-flep');
        secondCard.classList.remove('is-flep');
        // add class active.
        firstCard.classList.add('active');
        secondCard.classList.add('active');

        // add sound effect for over.
        document.getElementById('bones').play();
        
    } else {
        
        // add number for player failure.
        playerFailure.innerHTML = parseInt(playerFailure.innerHTML) + 1;

        // waiteng time
        setTimeout(() => {
            // remove class is-flep.
            firstCard.classList.remove('is-flep');
            secondCard.classList.remove('is-flep');
            
        }, timeng)

        // add sound effect for over.
        document.getElementById('over').play();
    
    }

}



// creat function for show all blocks after start game.

function  showBlocks() {


    headBlocksGame.classList.add('no-click');

    // creat forEach for add class in all bloks
    blocks.forEach(block => {
        
        // add class active.
        block.classList.add('active');
    });
        
    // waiteng timeng.
    setTimeout(() =>{
            
        // remove stop clickeng after 1s.
        headBlocksGame.classList.remove('no-click');

        // creat forEach for remove class in all bloks
        blocks.forEach(block => {
            
            // remove class active.
            block.classList.remove('active');
        });

    },2000)
}


// creat function for finsh game.
function finshedGame() {

    if (headBlocks.classList.contains.length === 40){
        // remove class active.
        headBlocks.classList.remove('active');
        console.log('finish')
        
    }
}

finshedGame()