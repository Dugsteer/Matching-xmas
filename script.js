// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById("sidebar");
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById("info");
const orange = document.getElementById("orange");
const blue = window.matchMedia("(max-width: 800px)");
const nextpic = document.getElementById('nextpic');
const mainpic = document.getElementById('mainpic');
const lastpic = document.getElementById('lastpic');
const thirdpic = document.getElementById('thirdpic');

//Change Intropic
//switch introduction pic
function switchpic() {
  switch (mainpic.innerHTML) {
    case '<img src="img/mainpic/diver.png" alt="decorative">':
      mainpic.innerHTML =
        '<img src="img/mainpic/clown.png" alt="decorative">';
        mainpic.style.backgroundColor = "red";
      break;
    case '<img src="img/mainpic/clown.png" alt="decorative">':
      mainpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">';
        mainpic.style.backgroundColor = "green";
              break;
    case '<img src="img/mainpic/cowgirl.png" alt="decorative">':
      mainpic.innerHTML =
        '<img src="img/mainpic/astronaut.png" alt="decorative">';
        mainpic.style.backgroundColor = "black";
      break;
    case '<img src="img/mainpic/astronaut.png" alt="decorative">':
      mainpic.innerHTML =
        '<img src="img/mainpic/wizard.png" alt="decorative">';
        mainpic.style.backgroundColor = "yellow";
      break;
    case '<img src="img/mainpic/wizard.png" alt="decorative">':
      mainpic.innerHTML =
        '<img src="img/mainpic/diver.png" alt="decorative">';
        mainpic.style.backgroundColor = "blue";
      break;
    default:
      mainpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">'
        mainpic.style.backgroundColor = "yellow";

  }
  switch (nextpic.innerHTML) {
    case '<img src="img/mainpic/clown.png" alt="decorative">':
      nextpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">';
        nextpic.style.backgroundColor = "green";
      break;
    case '<img src="img/mainpic/cowgirl.png" alt="decorative">':
      nextpic.innerHTML =
        '<img src="img/mainpic/astronaut.png" alt="decorative">';
        mainpic.style.backgroundColor = "black";
      break;
    case '<img src="img/mainpic/astronaut.png" alt="decorative">':
      nextpic.innerHTML =
        '<img src="img/mainpic/wizard.png" alt="decorative">';
        nextpic.style.backgroundColor = "yellow";
      break;
    case '<img src="img/mainpic/wizard.png" alt="decorative">':
      nextpic.innerHTML =
        '<img src="img/mainpic/diver.png" alt="decorative">';
        nextpic.style.backgroundColor = "blue";
      break;
    default:
      nextpic.innerHTML =
        '<img src="img/mainpic/clown.png" alt="decorative">';
        nextpic.style.backgroundColor = "red";
  }
  switch (lastpic.innerHTML) {
    case '<img src="img/mainpic/astronaut.png" alt="decorative">':
      lastpic.innerHTML =
        '<img src="img/mainpic/wizard.png" alt="decorative">';
        lastpic.style.backgroundColor = "yellow";
      break;
    case '<img src="img/mainpic/wizard.png" alt="decorative">':
      lastpic.innerHTML =
        '<img src="img/mainpic/diver.png" alt="decorative">';
        lastpic.style.backgroundColor = "blue";
      break;
    case '<img src="img/mainpic/diver.png" alt="decorative">':
      lastpic.innerHTML =
        '<img src="img/mainpic/clown.png" alt="decorative">';
        lastpic.style.backgroundColor = "red";
      break;
    case '<img src="img/mainpic/clown.png" alt="decorative">':
      lastpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">';
        lastpic.style.backgroundColor = "green";
      break;
    default:
      lastpic.innerHTML =
        '<img src="img/mainpic/astronaut.png" alt="decorative">';
        lastpic.style.backgroundColor = "black";
  }
  switch (thirdpic.innerHTML) {
    case '<img src="img/mainpic/cowgirl.png" alt="decorative">':
      thirdpic.innerHTML =
        '<img src="img/mainpic/astronaut.png" alt="decorative">';
        thirdpic.style.backgroundColor = "black";
      break;
    case '<img src="img/mainpic/astronaut.png" alt="decorative">':
      thirdpic.innerHTML =
        '<img src="img/mainpic/wizard.png" alt="decorative">';
        thirdpic.style.backgroundColor = "yellow";
      break;
    case '<img src="img/mainpic/wizard.png" alt="decorative">':
      thirdpic.innerHTML =
        '<img src="img/mainpic/diver.png" alt="decorative">';
        thirdpic.style.backgroundColor = "blue";
      break;
    case '<img src="img/mainpic/diver.png" alt="decorative">':
      thirdpic.innerHTML =
        '<img src="img/mainpic/clown.png" alt="decorative">';
        thirdpic.style.backgroundColor = "red";
      break;
    case '<img src="img/mainpic/clown.png" alt="decorative">':
      thirdpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">';
        thirdpic.style.backgroundColor = "green";
      break;
    default:
      thirdpic.innerHTML =
        '<img src="img/mainpic/cowgirl.png" alt="decorative">';
        thirdpic.style.backgroundColor = "green";
  }


}
setInterval(switchpic, 600);

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
  { number: "1", name: "actor" },
  {
    number: "1",
    name: "<img src = 'img/actor.svg' alt='actor' class='image'>",
  },
  { number: "2", name: "artist" },
  {
    number: "2",
    name: "<img src = 'img/artist.svg' alt='artist' class='image'>",
  },
  { number: "3", name: "astronaut" },
  {
    number: "3",
    name: "<img src = 'img/astronaut.svg' alt='astronaut' class='image'>",
  },
  { number: "4", name: "builder" },
  {
    number: "4",
    name: "<img src = 'img/builder.svg' alt='builder' class='image'>",
  },
  { number: "5", name: "chef" },
  {
    number: "5",
    name: "<img src = 'img/chef.svg' alt='chef' class='image'>",
  },
  { number: "6", name: "dancer" },
  {
    number: "6",
    name: "<img src = 'img/dancer.svg' alt='dancer' class='image'>",
  },
  { number: "7", name: "doctor" },
  {
    number: "7",
    name: "<img src = 'img/doctor.svg' alt='doctor' class='image'>",
  },
  { number: "8", name: "farmer" },
  {
    number: "8",
    name: "<img src = 'img/farmer.svg' alt='farmer' class='image'>",
  },
];
const set2 = [
  { number: "9", name: "firefighter" },
  {
    number: "9",
    name: "<img src = 'img/firefighter.svg' alt='firefighter' class='image'>",
  },
  { number: "10", name: "footballer" },
  {
    number: "10",
    name: "<img src = 'img/footballer.svg' alt='footballer' class='image'>",
  },
  { number: "11", name: "hairdresser" },
  {
    number: "11",
    name: "<img src = 'img/hairdresser.svg' alt='hairdresser' class='image'>",
  },
  { number: "12", name: "mechanic" },
  {
    number: "12",
    name: "<img src = 'img/mechanic.svg' alt='mechanic' class='image'>",
  },
  { number: "13", name: "musician" },
  {
    number: "13",
    name: "<img src = 'img/musician.svg' alt='musician' class='image'>",
  },
  { number: "14", name: "photographer" },
  {
    number: "14",
    name: "<img src = 'img/photographer.svg' alt='photographer' class='image'>",
  },
  { number: "15", name: "pilot" },
  {
    number: "15",
    name: "<img src = 'img/pilot.svg' alt='pilot' class='image'>",
  },
  { number: "16", name: "police-officer" },
  {
    number: "16",
    name: "<img src = 'img/police-officer.svg' alt='police-officer' class='image'>",
  },
];
const set3 = [
  { number: "17", name: "reporter" },
  {
    number: "17",
    name: "<img src = 'img/reporter.svg' alt='reporter' class='image'>",
  },
  { number: "18", name: "singer" },
  {
    number: "18",
    name: "<img src = 'img/singer.svg' alt='singer' class='image'>",
  },
  { number: "19", name: "soldier" },
  {
    number: "19",
    name: "<img src = 'img/soldier.svg' alt='soldier' class='image'>",
  },
  { number: "20", name: "taxi-driver" },
  {
    number: "20",
    name: "<img src = 'img/taxi-driver.svg' alt='taxi-driver' class='image'>",
  },
  { number: "21", name: "teacher" },
  {
    number: "21",
    name: "<img src = 'img/teacher.svg' alt='teacher' class='image'>",
  },
  { number: "22", name: "thief" },
  {
    number: "22",
    name: "<img src = 'img/thief.svg' alt='thief' class='image'>",
  },
  { number: "23", name: "vet" },
  {
    number: "23",
    name: "<img src = 'img/vet.svg' alt='vet' class='image'>",
  },
  { number: "24", name: "waiter" },
  {
    number: "24",
    name: "<img src = 'img/waiter.svg' alt='waiter' class='image'>",
  },
];

// By Default the game plays set1
playGame(set1);

// In the sidebar, different sets can be chosen by clicking
firstSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "JOBS MATCH: SET 1";
  playGame(set1);
});

secondSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "JOBS MATCH: SET 2";
  playGame(set2);
});

thirdSet.addEventListener("click", () => {
  startLoader();
  gameContainer.innerHTML = "";
  pageTitle.textContent = "JOBS MATCH: SET 3";

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

    card.innerHTML = `<div class="memory-card" tabindex=0 data-framework="${data.number}"><div class="front-face">${data.name}</div><div class="back-face"><img src = "img/search-job.png" alt="picture of a car" class="imgBg smaller" id="imgBg"></div></div>`;

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
