// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");
const nextpic = document.getElementById("nextpic");
const mainpic = document.getElementById("mainpic");
const lastpic = document.getElementById("lastpic");
const thirdpic = document.getElementById("thirdpic");

//Change Intropic
//switch introduction pic
function switchpic() {
  switch (mainpic.innerHTML) {
    case '<img src="img/santa.svg" alt="decorative">':
      mainpic.innerHTML = '<img src="img/star.svg" alt="decorative">';
      mainpic.style.backgroundColor = "#ff0000";
      break;
    case '<img src="img/star.svg" alt="decorative">':
      mainpic.innerHTML = '<img src="img/reindeer.svg" alt="decorative">';
      mainpic.style.backgroundColor = "#74d680";
      break;
    case '<img src="img/reindeer.svg" alt="decorative">':
      mainpic.innerHTML = '<img src="img/elf.svg" alt="decorative">';
      mainpic.style.backgroundColor = "#ffe164";
      break;
    case '<img src="img/elf.svg" alt="decorative">':
      mainpic.innerHTML = '<img src="img/choir.svg" alt="decorative">';
      mainpic.style.backgroundColor = "black";
      break;
    case '<img src="img/choir.svg" alt="decorative">':
      mainpic.innerHTML = '<img src="img/santa.svg" alt="decorative">';
      mainpic.style.backgroundColor = "#ff0000";
      break;
    default:
      mainpic.innerHTML = '<img src="img/santa.svg" alt="decorative">';
      mainpic.style.backgroundColor = "#ffe164";
  }

  switch (nextpic.innerHTML) {
    case '<img src="img/star.svg" alt="decorative">':
      nextpic.innerHTML = '<img src="img/reindeer.svg" alt="decorative">';
      nextpic.style.backgroundColor = "#74d680";
      break;
    case '<img src="img/reindeer.svg" alt="decorative">':
      nextpic.innerHTML = '<img src="img/elf.svg" alt="decorative">';
      mainpic.style.backgroundColor = "black";
      break;
    case '<img src="img/elf.svg" alt="decorative">':
      nextpic.innerHTML = '<img src="img/choir.svg" alt="decorative">';
      nextpic.style.backgroundColor = "#ff0000";
      break;
    case '<img src="img/choir.svg" alt="decorative">':
      nextpic.innerHTML = '<img src="img/santa.svg" alt="decorative">';
      nextpic.style.backgroundColor = "#ffe164";
      break;
    case '<img src="img/santa.svg" alt="decorative">':
      nextpic.innerHTML = '<img src="img/star.svg" alt="decorative">';
      nextpic.style.backgroundColor = "#74d680";
      break;
    default:
      nextpic.innerHTML = '<img src="img/star.svg" alt="decorative">';
      nextpic.style.backgroundColor = "black";
  }
  switch (lastpic.innerHTML) {
    case '<img src="img/reindeer.svg" alt="decorative">':
      lastpic.innerHTML = '<img src="img/elf.svg" alt="decorative">';
      lastpic.style.backgroundColor = "#ff0000";
      break;
    case '<img src="img/elf.svg" alt="decorative">':
      lastpic.innerHTML = '<img src="img/choir.svg" alt="decorative">';
      lastpic.style.backgroundColor = "#ffe164";
      break;
    case '<img src="img/choir.svg" alt="decorative">':
      lastpic.innerHTML = '<img src="img/santa.svg" alt="decorative">';
      lastpic.style.backgroundColor = "#74d680";
      break;
    case '<img src="img/santa.svg" alt="decorative">':
      lastpic.innerHTML = '<img src="img/star.svg" alt="decorative">';
      lastpic.style.backgroundColor = "black";
      break;
    case '<img src="img/star.svg" alt="decorative">':
      lastpic.innerHTML = '<img src="img/reindeer.svg" alt="decorative">';
      lastpic.style.backgroundColor = "#ff0000";
      break;
    default:
      lastpic.innerHTML = '<img src="img/reindeer.svg" alt="decorative">';
      lastpic.style.backgroundColor = "#ffe164";
  }
  switch (thirdpic.innerHTML) {
    case '<img src="img/elf.svg" alt="decorative">':
      thirdpic.innerHTML = '<img src="img/choir.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "#74d680";
      break;
    case '<img src="img/choir.svg" alt="decorative">':
      thirdpic.innerHTML = '<img src="img/santa.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "black";
      break;
    case '<img src="img/santa.svg" alt="decorative">':
      thirdpic.innerHTML = '<img src="img/star.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "#ff0000";
      break;
    case '<img src="img/star.svg" alt="decorative">':
      thirdpic.innerHTML = '<img src="img/reindeer.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "#ffc164";
      break;
    case '<img src="img/reindeer.svg" alt="decorative">':
      thirdpic.innerHTML = '<img src="img/elf.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "#74d680";
      break;
    default:
      thirdpic.innerHTML = '<img src="img/elf.svg" alt="decorative">';
      thirdpic.style.backgroundColor = "black";
  }
}
setInterval(switchpic, 1000);

//Play applause

function clapping() {
  const claps = new Audio("sounds/applause.wav");
  claps.play();
}

//Make sound of balloon

function balloonRise() {
  const balloonSound = new Audio("sounds/rise.mp3");
  balloonSound.play();
}

// Show and hide about info
function show() {
  info.classList.toggle("xxc");
}
function unshow() {
  info.classList.remove("xxc");
}

//Center the loader wherever the page is
function checkForTop() {
  loader.style.top = window.pageYOffset + "px";
}
checkForTop();

//Manage the loader
function stopLoader() {
  loader.classList.add("stop");
}
function startLoader() {
  loader.classList.remove("stop");
  setTimeout(stopLoader, 1000);
}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {
  if (blue.matches) {
    sidey.classList.remove("block");
  }
}
function toggler() {
  sidey.classList.toggle("block");
}
myFunction(blue);

//GAME FUNCTIONALITY
// There are three different sets of words/images used in the game
const firstSet = document.getElementById("set1");
const secondSet = document.getElementById("set2");
const thirdSet = document.getElementById("set3");

// These are the other DOM elements
const instructions = document.getElementById("instructions");
const gameContainer = document.getElementById("game-tiles");
const sideBar = document.getElementById("sidebar");

// Each image and word in a set array has the same data-framework number, in order to check for pairs.
// The data-name is a string, which can be used in the second case as innerHTML.
const set1 = [
  { number: "1", name: "angel" },
  {
    number: "1",
    name: "<img src = 'img/angel.svg' alt='angel' class='image'>",
  },
  { number: "2", name: "bell" },
  {
    number: "2",
    name: "<img src = 'img/bell.svg' alt='bell' class='image'>",
  },
  { number: "3", name: "candle" },
  {
    number: "3",
    name: "<img src = 'img/candle.svg' alt='candle' class='image'>",
  },
  { number: "4", name: "candy cane" },
  {
    number: "4",
    name: "<img src = 'img/candy-cane.svg' alt='candy-cane' class='image'>",
  },
  { number: "5", name: "carollers" },
  {
    number: "5",
    name: "<img src = 'img/choir.svg' alt='carol singers' class='image'>",
  },
  { number: "6", name: "card" },
  {
    number: "6",
    name:
      "<img src = 'img/christmas-card.svg' alt='christmas-card' class='image'>",
  },
  { number: "7", name: "wreath" },
  {
    number: "7",
    name: "<img src = 'img/christmas-wreath.svg' alt='wreath' class='image'>",
  },
  { number: "8", name: "decorations" },
  {
    number: "8",
    name: "<img src = 'img/decoration.svg' alt='decorations' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "elf" },
  {
    number: "9",
    name: "<img src = 'img/elf.svg' alt='elf' class='image'>",
  },
  { number: "10", name: "hat" },
  {
    number: "10",
    name: "<img src = 'img/hat.svg' alt='hat' class='image'>",
  },
  { number: "11", name: "holly" },
  {
    number: "11",
    name: "<img src = 'img/holly.svg' alt='holly' class='image'>",
  },
  { number: "12", name: "lights" },
  {
    number: "12",
    name: "<img src = 'img/lights.svg' alt='lights' class='image'>",
  },
  { number: "13", name: "present" },
  {
    number: "13",
    name: "<img src = 'img/present.svg' alt='present' class='image'>",
  },
  { number: "14", name: "reindeer" },
  {
    number: "14",
    name: "<img src = 'img/reindeer.svg' alt='reindeer' class='image'>",
  },
  { number: "15", name: "sack" },
  {
    number: "15",
    name: "<img src = 'img/sack.svg' alt='sack' class='image'>",
  },
  { number: "16", name: "santa" },
  {
    number: "16",
    name: "<img src = 'img/santa.svg' alt='santa' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "skiing" },
  {
    number: "17",
    name: "<img src = 'img/skiing.svg' alt='skiing' class='image'>",
  },
  { number: "18", name: "sleigh" },
  {
    number: "18",
    name: "<img src = 'img/sleigh.svg' alt='sleigh' class='image'>",
  },
  { number: "19", name: "snowball" },
  {
    number: "19",
    name: "<img src = 'img/snowball-fight.svg' alt='snowball' class='image'>",
  },
  { number: "20", name: "snowflake" },
  {
    number: "20",
    name: "<img src = 'img/snowflake.svg' alt='snowflake' class='image'>",
  },
  { number: "21", name: "snowman" },
  {
    number: "21",
    name: "<img src = 'img/snowman.svg' alt='snowman' class='image'>",
  },
  { number: "22", name: "star" },
  {
    number: "22",
    name: "<img src = 'img/star.svg' alt='star' class='image'>",
  },
  { number: "23", name: "stocking" },
  {
    number: "23",
    name: "<img src = 'img/stocking.svg' alt='stocking' class='image'>",
  },
  { number: "24", name: "kings" },
  {
    number: "24",
    name: "<img src = 'img/three-kings.svg' alt='kings' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "CHRISTMAS MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "CHRISTMAS MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "CHRISTMAS MATCH: SET 3";

  playGame(set3);
});

// PLAY THE GAME
// SHUFFLE THE GAME ARRAY for the chosen SET 1, 2 or 3.
function playGame(array) {
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // call the shuffle function & assign the array to "contents"
  shuffle(array);
  let contents = array;

  // Create 16 Playing cards by using forEach on the array contents.
  contents.forEach((data, index) => createCard(data, index));

  // Call the createCard function turn the cards into DIV elements.
  function createCard(data, index) {
    let card = document.createElement("div");
    // Add a classname so the cards can be styled with CSS
    card.classList.add("card");
    //  Include the data-famework (data.number) of the cards so they can be checked plus the necessary HTML.

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/reindeer.png" alt="picture of a reindeer" class="imgBg smaller" id="imgBg"></div></div>`;

    // Append the card divs to the game container so they appear on the page.
    gameContainer.appendChild(card);
  }

  // Select all instances of the class 'memory-card' and assign it to a constant
  const cards = document.querySelectorAll(".memory-card");

  // Set the initial boolean conditions to make the game work
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  // Prevent card flipping, add the 'flip' CSS class to flip the card if it's alright to do so.
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    // Allowing two cards to be flipped and calling the check function
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    checkForMatch();
  }

  // The check function
  function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      disableCards();
      return;
    }

    unflipCards();
  }

  // Make pairs vanish by killing their innerHTML
  function disableCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetBoard();
    }, 1000);
  }

  // Unflip cards if they don't match by removing the flip class.
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  // Set the board to continue the game, setting the constants to their original state
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  // Event listener added to the cards
  cards.forEach((card) => card.addEventListener("click", flipCard));
}
