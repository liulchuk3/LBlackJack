// JavaScript код для реалізації функціоналу сайдбару
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const innerMenuButton = document.getElementById("innerMenuButton");
const button = document.getElementById("menuButton");

button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

innerMenuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
});




const translations = {
  en: {
    youShouldPlaceBet: "Please place your bet",
    notEnoughFunds: "Not enough funds. Refresh the page to restore your balance.",
    dealer: "Dealer",
    player: "Player",
    startText: "Deal",
    resetText: "Deal",
    bothBlackjack: "Both dealer and player have Blackjack!",
    blackjackDealerWins: "Blackjack! Dealer wins",
    blackjackPlayerWins: "Blackjack! Player wins",
    dealerWin: "Dealer wins!",
    playerWin: "Player wins!",
    drawPlayerDealer: "Draw!",
    playerShouldHitOrStand: "Player chooses to hit or stand",
    playerCantHit: "Player can't hit",
    bust: "Bust! ",
    playerStands: "Player stands"
    // playerStands: "Player stands with " + playerScore + " points."
  },
  uk: {
    youShouldPlaceBet: "Зробіть ставку перед початком гри",
    notEnoughFunds: "Недостатньо коштів. Оновіть сторінку для відновлення балансу.",
    dealer: "Дилер",
    player: "Гравець",
    startText: "Роздача",
    resetText: "Роздача",
    bothBlackjack: "Обидва гравці мають Блекджек!",
    blackjackDealerWins: "Блекджек! Дилер виграє",
    blackjackPlayerWins: "Блекджек! Гравець виграє",
    dealerWin: "Дилер виграє!",
    playerWin: "Гравець виграє!",
    drawPlayerDealer: "Нічия!",
    playerShouldHitOrStand: "Гравець бере карту або зупиняється",
    playerCantHit: "Гравець не може взяти карту",
    bust: "Буст! ",
    playerStands: "Гравець зупиняється"
    // playerStands: "Гравець зупиняється з " + playerScore + " очками."
  }
};



const languageSelect = document.getElementById("language-select");

// відновлюємо мову з кешу
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    languageSelect.value = savedLang;
}

languageText();

languageSelect.addEventListener("change", languageText);

function languageText() {
    document.querySelectorAll('[data-i18n="dealer"]').forEach(element => {
        element.textContent = languageSelect.value === "en" ? "Dealer" : "Дилер";
    });
    document.querySelectorAll('[data-i18n="player"]').forEach(element => {
        element.textContent = languageSelect.value === "en" ? "Player" : "Гравець";
    });

    document.getElementById("startRestart").textContent = languageSelect.value === "en" ? "Deal" : "Роздача";
    document.getElementById("hit-button").textContent = languageSelect.value === "en" ? "Hit" : "Взяти"; 
    document.getElementById("stand-button").textContent = languageSelect.value === "en" ? "Stand" : "Стоп"; 
    document.getElementById("dealer-hand-p").textContent = languageSelect.value === "en" ? "DEALER" : "ДИЛЕР"; 
    document.getElementById("player-hand-p").textContent = languageSelect.value === "en" ? "PLAYER" : "ГРАВЕЦЬ"; 
    document.getElementById('winO').textContent = languageSelect.value === "en" ? "Winner" : "Перемога"; 
    document.getElementById('losO').textContent = languageSelect.value === "en" ? "Loser" : "Програш"; 
    document.getElementById('drawO1').textContent = languageSelect.value === "en" ? "Draw" : "Нічия"; 
    document.getElementById('drawO2').textContent = languageSelect.value === "en" ? "Draw" : "Нічия";
    document.getElementById('language-text').textContent = languageSelect.value === "en" ? "Language" : "Мова";
    document.getElementById('statistics-text').textContent = languageSelect.value === "en" ? "Statistics" : "Статистика";
    document.getElementById('history-text').textContent = languageSelect.value === "en" ? "History" : "Історія";
    document.getElementById('games-played-text').textContent = languageSelect.value === "en" ? "Games played: " : "Зіграно ігор: ";


    const statusElement = document.getElementById('status');

    if (statusElement.textContent === translations.en.youShouldPlaceBet || statusElement.textContent === translations.uk.youShouldPlaceBet) {
        statusElement.textContent = outputLanguageText("youShouldPlaceBet");}
    if (statusElement.textContent === translations.en.notEnoughFunds || statusElement.textContent === translations.uk.notEnoughFunds) {
        statusElement.textContent = outputLanguageText("notEnoughFunds");}
    if (statusElement.textContent === translations.en.startText || statusElement.textContent === translations.uk.startText) {
        statusElement.textContent = outputLanguageText("startText");}
    if (statusElement.textContent === translations.en.dealer || statusElement.textContent === translations.uk.dealer) {
        statusElement.textContent = outputLanguageText("dealer");}
    if (statusElement.textContent === translations.en.player || statusElement.textContent === translations.uk.player) {
        statusElement.textContent = outputLanguageText("player");}
    if (statusElement.textContent === translations.en.bothBlackjack || statusElement.textContent === translations.uk.bothBlackjack) {
        statusElement.textContent = outputLanguageText("bothBlackjack");}
    if (statusElement.textContent === translations.en.blackjackDealerWins || statusElement.textContent === translations.uk.blackjackDealerWins) {
        statusElement.textContent = outputLanguageText("blackjackDealerWins");}
    if (statusElement.textContent === translations.en.blackjackPlayerWins || statusElement.textContent === translations.uk.blackjackPlayerWins) {
        statusElement.textContent = outputLanguageText("blackjackPlayerWins");}
    if (statusElement.textContent === translations.en.dealerWin || statusElement.textContent === translations.uk.dealerWin) {
        statusElement.textContent = outputLanguageText("dealerWin");}
    if (statusElement.textContent === translations.en.playerWin || statusElement.textContent === translations.uk.playerWin) {
        statusElement.textContent = outputLanguageText("playerWin");}
    if (statusElement.textContent === translations.en.drawPlayerDealer || statusElement.textContent === translations.uk.drawPlayerDealer) {
        statusElement.textContent = outputLanguageText("drawPlayerDealer");}
    if (statusElement.textContent === translations.en.playerShouldHitOrStand || statusElement.textContent === translations.uk.playerShouldHitOrStand) {
        statusElement.textContent = outputLanguageText("playerShouldHitOrStand");}
    if (statusElement.textContent === translations.en.playerCantHit || statusElement.textContent === translations.uk.playerCantHit) {
        statusElement.textContent = outputLanguageText("playerCantHit");}
    if (statusElement.textContent === translations.en.bust || statusElement.textContent === translations.uk.bust) {
        statusElement.textContent = outputLanguageText("bust");}
    if (statusElement.textContent === translations.en.playerStands || statusElement.textContent === translations.uk.playerStands) {
        statusElement.textContent = outputLanguageText("playerStands");}


    // зберігаємо мову
    localStorage.setItem("lang", languageSelect.value);
}


function outputLanguageText(textKey) {
    if (languageSelect.value === "en") {
        return translations.en[textKey];
    } else if (languageSelect.value === "uk") {
        return translations.uk[textKey];
    };
}


let initialCardStorage = [
    { card: "hearts2", value: document.getElementById("hearts2") },
    { card: "hearts3", value: document.getElementById("hearts3") },
    { card: "hearts4", value: document.getElementById("hearts4") },
    { card: "hearts5", value: document.getElementById("hearts5") },
    { card: "hearts6", value: document.getElementById("hearts6") },
    { card: "hearts7", value: document.getElementById("hearts7") },
    { card: "hearts8", value: document.getElementById("hearts8") },
    { card: "hearts9", value: document.getElementById("hearts9") },
    { card: "hearts10", value: document.getElementById("hearts10")},
    { card: "heartsJ", value: document.getElementById("heartsJ") },
    { card: "heartsQ", value: document.getElementById("heartsQ") },
    { card: "heartsK", value: document.getElementById("heartsK") },
    { card: "heartsA", value: document.getElementById("heartsA") },

    { card: "clubs2", value: document.getElementById("clubs2") },
    { card: "clubs3", value: document.getElementById("clubs3") },
    { card: "clubs4", value: document.getElementById("clubs4") },
    { card: "clubs5", value: document.getElementById("clubs5") },
    { card: "clubs6", value: document.getElementById("clubs6") },
    { card: "clubs7", value: document.getElementById("clubs7") },
    { card: "clubs8", value: document.getElementById("clubs8") },
    { card: "clubs9", value: document.getElementById("clubs9") },
    { card: "clubs10", value: document.getElementById("clubs10") },
    { card: "clubsJ", value: document.getElementById("clubsJ") },
    { card: "clubsQ", value: document.getElementById("clubsQ") },
    { card: "clubsK", value: document.getElementById("clubsK") },
    { card: "clubsA", value: document.getElementById("clubsA") },

    { card: "diamonds2", value: document.getElementById("diamonds2") },
    { card: "diamonds3", value: document.getElementById("diamonds3") },
    { card: "diamonds4", value: document.getElementById("diamonds4") },
    { card: "diamonds5", value: document.getElementById("diamonds5") },
    { card: "diamonds6", value: document.getElementById("diamonds6") },
    { card: "diamonds7", value: document.getElementById("diamonds7") },
    { card: "diamonds8", value: document.getElementById("diamonds8") },
    { card: "diamonds9", value: document.getElementById("diamonds9") },
    { card: "diamonds10", value: document.getElementById("diamonds10") },
    { card: "diamondsJ", value: document.getElementById("diamondsJ") },
    { card: "diamondsQ", value: document.getElementById("diamondsQ") },
    { card: "diamondsK", value: document.getElementById("diamondsK") },
    { card: "diamondsA", value: document.getElementById("diamondsA") },

    { card: "spades2", value: document.getElementById("spades2") },
    { card: "spades3", value: document.getElementById("spades3") },
    { card: "spades4", value: document.getElementById("spades4") },
    { card: "spades5", value: document.getElementById("spades5") },
    { card: "spades6", value: document.getElementById("spades6") },
    { card: "spades7", value: document.getElementById("spades7") },
    { card: "spades8", value: document.getElementById("spades8") },
    { card: "spades9", value: document.getElementById("spades9") },
    { card: "spades10", value: document.getElementById("spades10") },
    { card: "spadesJ", value: document.getElementById("spadesJ") },
    { card: "spadesQ", value: document.getElementById("spadesQ") },
    { card: "spadesK", value: document.getElementById("spadesK") },
    { card: "spadesA", value: document.getElementById("spadesA") }
];
    let usedCardStorage = []; // Масив для зберігання карт, які отримує користувач під час гри

let initialDeck = [
    { suit: "hearts2", value: 2 },
    { suit: "hearts3", value: 3 },
    { suit: "hearts4", value: 4 },
    { suit: "hearts5", value: 5 },
    { suit: "hearts6", value: 6 },
    { suit: "hearts7", value: 7 },
    { suit: "hearts8", value: 8 },
    { suit: "hearts9", value: 9 },
    { suit: "hearts10", value: 10 },
    { suit: "heartsJ", value: 10 },
    { suit: "heartsQ", value: 10 },
    { suit: "heartsK", value: 10 },
    { suit: "heartsA", value: 11 },
    { suit: "clubs2", value: 2 },
    { suit: "clubs3", value: 3 },
    { suit: "clubs4", value: 4 },
    { suit: "clubs5", value: 5 },
    { suit: "clubs6", value: 6 },
    { suit: "clubs7", value: 7 },
    { suit: "clubs8", value: 8 },
    { suit: "clubs9", value: 9 },
    { suit: "clubs10", value: 10 },
    { suit: "clubsJ", value: 10 },
    { suit: "clubsQ", value: 10 },
    { suit: "clubsK", value: 10 },
    { suit: "clubsA", value: 11 },
    { suit: "diamonds2", value: 2 },
    { suit: "diamonds3", value: 3 },
    { suit: "diamonds4", value: 4 },
    { suit: "diamonds5", value: 5 },
    { suit: "diamonds6", value: 6 },
    { suit: "diamonds7", value: 7 },
    { suit: "diamonds8", value: 8 },
    { suit: "diamonds9", value: 9 },
    { suit: "diamonds10", value: 10 },
    { suit: "diamondsJ", value: 10 },
    { suit: "diamondsQ", value: 10 },
    { suit: "diamondsK", value: 10 },
    { suit: "diamondsA", value: 11 },
    { suit: "spades2", value: 2 },
    { suit: "spades3", value: 3 },
    { suit: "spades4", value: 4 },
    { suit: "spades5", value: 5 },
    { suit: "spades6", value: 6 },
    { suit: "spades7", value: 7 },
    { suit: "spades8", value: 8 },
    { suit: "spades9", value: 9 },
    { suit: "spades10", value: 10 },
    { suit: "spadesJ", value: 10 },
    { suit: "spadesQ", value: 10 },
    { suit: "spadesK", value: 10 },
    { suit: "spadesA", value: 11 }
];
    let usedDeck = []; // Копія колоди карт для використання під час гри

// Глобальні змінні для зберігання рахунку дилера та гравця і також стану гри
let dealerScore;
let playerScore;

let isGameStarted = false;

let outputCardForPlayer1 = undefined;
let outputCardForPlayer2 = undefined;
let outputCardForPlayer3 = undefined;
let outputCardForPlayer4 = undefined;
let outputCardForPlayer5 = undefined;

let outputCardForDealer1 = undefined;
let outputCardForDealer2 = undefined;
let hiddenCardForDealer2 = undefined;
let outputCardForDealer3 = undefined;
let outputCardForDealer4 = undefined;
let outputCardForDealer5 = undefined;

let wins = 0;
let losses = 0;
let draws = 0;

let totalGames = 0;

let playerWallet = 1000; // Початковий баланс гравця
let playerWalletBeforeBet = 0;

let betAmount = 0;

let dealerNum2 = undefined;

let hitStep = 3;

const betAmountElement = document.getElementById("betAmount");
const resetBetButton = document.getElementById("resetBetButton");
const plus1buttom = document.getElementById("plus1");
const plus2buttom = document.getElementById("plus2");
const plus5buttom = document.getElementById("plus5");
const plus10buttom = document.getElementById("plus10");

plus1buttom.addEventListener("click", () => {
    betAmount += 1;
    betAmountElement.textContent = betAmount;});

plus2buttom.addEventListener("click", () => {
    betAmount += 2;
    betAmountElement.textContent = betAmount;});

plus5buttom.addEventListener("click", () => {
    betAmount += 5;
    betAmountElement.textContent = betAmount;});

plus10buttom.addEventListener("click", () => {
    betAmount += 10;
    betAmountElement.textContent = betAmount;});

resetBetButton.addEventListener("click", () => {
    betAmount = 0;
    betAmountElement.textContent = betAmount;
});





// Додаємо обробник події для кнопки "Start/Restart"
const startButton = document.getElementById("startRestart");
startButton.addEventListener("click", () => {
    if (isGameStarted) {
        resetGame();
    } else {
        startReseiveCard();
    }
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Функція для початку гри та роздачі карт
async function startReseiveCard() {

    if (betAmount > playerWallet) {
        document.getElementById("status").textContent = outputLanguageText("notEnoughFunds");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    } else if (betAmount === 0) {
        document.getElementById("status").textContent = outputLanguageText("youShouldPlaceBet");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    } else {

    document.getElementById("plus1").disabled = true;
    document.getElementById("plus2").disabled = true;
    document.getElementById("plus5").disabled = true;
    document.getElementById("plus10").disabled = true;
    document.getElementById("resetBetButton").disabled = true;
    document.getElementById("bet-amount-box").classList.add("bet-amount-box-unactive");
    document.getElementById("resetBetButtonImg").classList.add("resetBetButtonImg-unactive");
    document.getElementById("betAmount").classList.add("bet-amount-active");

    document.getElementById("status").textContent = "";


    playerWalletBeforeBet = playerWallet; // Зберігаємо баланс гравця перед ставкою
    playerWallet -= betAmount; // Віднімаємо суму ставки від балансу гравця
    document.getElementById("playerWallet").textContent = playerWallet; // Оновлюємо відображення балансу гравця на сторінці

    // Вимикаємо кнопку "Start/Restart" під час роздачі карт
    document.getElementById('startRestart').disabled = true;
    document.getElementById('startRestart').textContent = outputLanguageText("resetText");

    // Роздаємо карти дилеру та гравцю з затримкою між кожною роздачею
    const randomIndexDealerCard1 = Math.floor(Math.random() * initialDeck.length); // Рандомний індекс для першої карти дилера
    const dealerCard1 = initialDeck.splice(randomIndexDealerCard1, 1)[0]; // Витягуємо карту з колоди та видаляємо її за допомоги splice
    outputCardForDealer1 = initialCardStorage.find(card => card.card === dealerCard1.suit).value; // Знаходимо відповідний елемент для першої карти дилера
    const targetDealerCard1 = document.getElementById("dealerDivCard1"); // Цільовий елемент для першої карти дилера
    targetDealerCard1.appendChild(outputCardForDealer1); // Додаємо першу карту дилера до цільового елемента

    // const cardObjDealer1 = initialCardStorage.find(card => card.card === dealerCard1.suit);
    // usedCardStorage.push(cardObjDealer1);
    usedDeck.push(dealerCard1);


    await sleep(300); // Затримка 300 мс перед роздачею наступної карти

    const randomIndexPlayerCard1 = Math.floor(Math.random() * initialDeck.length);
    const playerCard1 = initialDeck.splice(randomIndexPlayerCard1, 1)[0];
    outputCardForPlayer1 = initialCardStorage.find(card => card.card === playerCard1.suit).value;
    const targetPlayerCard1 = document.getElementById("playerDivCard1");
    targetPlayerCard1.appendChild(outputCardForPlayer1);

    // const cardObjPlayer1 = initialCardStorage.find(card => card.card === playerCard1.suit);
    // usedCardStorage.push(cardObjPlayer1);
    usedDeck.push(playerCard1);

    await sleep(300);

    const randomIndexDealerCard2 = Math.floor(Math.random() * initialDeck.length);
    const dealerCard2 = initialDeck.splice(randomIndexDealerCard2, 1)[0];
    outputCardForDealer2 = initialCardStorage.find(card => card.card === dealerCard2.suit).value;
    const targetDealerCard2 = document.getElementById("dealerDivCard2");
    targetDealerCard2.appendChild(outputCardForDealer2);

    hiddenCardForDealer2 = document.getElementById("front-card");
    const targetHiddenDealerCard = document.getElementById("hiddenDealerDivCard2");
    targetHiddenDealerCard.appendChild(hiddenCardForDealer2);
    

    // const cardObjDealer2 = initialCardStorage.find(card => card.card === dealerCard2.suit);
    // usedCardStorage.push(cardObjDealer2);
    usedDeck.push(dealerCard2);

    await sleep(300);

    const randomIndexPlayerCard2 = Math.floor(Math.random() * initialDeck.length);
    const playerCard2 = initialDeck.splice(randomIndexPlayerCard2, 1)[0];
    outputCardForPlayer2 = initialCardStorage.find(card => card.card === playerCard2.suit).value;
    const targetPlayerCard2 = document.getElementById("playerDivCard2");
    targetPlayerCard2.appendChild(outputCardForPlayer2);

    // const cardObjPlayer2 = initialCardStorage.find(card => card.card === playerCard2.suit);
    // usedCardStorage.push(cardObjPlayer2);
    usedDeck.push(playerCard2);

    await sleep(300);

    // Після роздачі карт обчислюємо початкові рахунки дилера та гравця
    let dealerNum1 = dealerCard1.value;
        dealerNum2 = dealerCard2.value;
    let playerNum1 = playerCard1.value;
    let playerNum2 = playerCard2.value;
    

    let dealerPreScore = dealerNum1 + dealerNum2;
    let playerPreScore = playerNum1 + playerNum2;

    if (dealerPreScore > 21) {
        dealerScore = dealerPreScore - 10;
    } else {
        dealerScore = dealerPreScore;
    }
    if (playerPreScore > 21) { 
        playerScore = playerPreScore - 10;
    } else {
        playerScore = playerPreScore;
    }

    // Оновлюємо відображення рахунку дилера та гравця на сторінці після роздачі карт
    const dealerCountAfterReceiveCard = dealerScore;
    let dealerCountElement = document.getElementById("dealerScore");
    dealerCountElement.textContent = dealerNum1; // Відображаємо лише першу карту дилера
    dealerCountElement.style.animation = 'none';
    void dealerCountElement.offsetWidth;
    dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
    
    const playerCountAfterReceiveCard = playerScore;
    let playerCountElement = document.getElementById("playerScore");
    playerCountElement.textContent = playerCountAfterReceiveCard;
    playerCountElement.style.animation = 'none';
    void playerCountElement.offsetWidth;
    playerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

    console.log("Dealer Score: " + dealerScore);
    console.log("Player Score: " + playerScore);

    await sleep(300);

    isGameStarted = true; // Встановлюємо стан гри як "почалася" після роздачі карт та обчислення початкових рахунків

    // Перевіряємо різні умови для визначення результату гри після роздачі карт та обчислення початкових рахунків
    if (dealerScore === 21 && playerScore === 21) { // Умова для нічиєї, коли у обох дилера та гравця Блекджек
        console.log("Game Started: " + isGameStarted);
        console.log("Both dealer and player have Blackjack!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("bothBlackjack");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        draw(); 
        console.log("===============");
        return;
    }  else if (dealerScore === 21) { // Умова для перемоги дилера, коли у нього Блекджек
        console.log("Game Started: " + isGameStarted);
        console.log("Blackjack! Dealer wins!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("blackjackDealerWins");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        dealerWins();
        console.log("===============");
        return;
    }  else if (playerScore === 21) { // Умова для перемоги гравця, коли у нього Блекджек
        console.log("Game Started: " + isGameStarted);
        console.log("Blackjack! Player wins!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("blackjackPlayerWins");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        playerWins();
        console.log("===============");
        return;  
    }  else if (dealerScore >= 17 && playerScore >= 17 && dealerScore === playerScore) { // Умова для нічиєї, коли у обох дилера та гравця рахунок 17 або більше і вони рівні
        console.log("Game Started: " + isGameStarted);
        console.log("Draw!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("drawPlayerDealer");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        draw();
        console.log("===============");
        return;
    }  else if (dealerScore >= 17 && playerScore >= 17 && dealerScore > playerScore) { // Умова для перемоги дилера, коли у обох рахунок 17 або більше, але у дилера він більший
        console.log("Game Started: " + isGameStarted);
        console.log("Dealer wins!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("dealerWin");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        dealerWins();
        console.log("===============");
        return;
    }  else if (dealerScore >= 17 && playerScore >= 17 && dealerScore < playerScore) { // Умова для перемоги гравця, коли у обох рахунок 17 або більше, але у гравця він більший
        console.log("Game Started: " + isGameStarted);
        console.log("Player wins!");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("playerWin");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        await sleep(300);
        playerWins(); 
        console.log("===============");  
        return;
    }  else if (dealerScore < playerScore && playerScore === 20 ) { // Умова для ситуації, коли у гравця 20 очок, а у дилера менше
        console.log("Game Started: " + isGameStarted);
        console.log("Player can't hit or stand.");
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('status').textContent = outputLanguageText("playerCantHit");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.add('dealer-cards-active');
        await sleep(1000);
        
        stand();
        console.log("===============");
        return;
    }  else if (dealerScore > playerScore && dealerScore === 20 ) { // Умова для ситуації, коли у дилера 20 очок, а у гравця менше
        console.log("Game Started: " + isGameStarted);
        console.log("Dealer can't hit7.");
        console.log("Hit Step is" + hitStep);
        document.getElementById('hit-button').disabled = false;
        document.getElementById('stand-button').disabled = false;
        document.getElementById('status').textContent = outputLanguageText("playerShouldHitOrStand");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        const dealerContainer = document.querySelector('.player-cards');
        dealerContainer.classList.add('player-cards-active');
        
        return;
    }  else if (dealerScore >= 17 && playerScore < 17) { // Умова для ситуації, коли у дилера 17 або більше очок, а у гравця менше 17 очок
        console.log("Game Started: " + isGameStarted);
        console.log("Player has to hit8.");
        console.log("Hit Step is" + hitStep);
        document.getElementById('hit-button').disabled = false;
        document.getElementById('stand-button').disabled = false;
        document.getElementById('status').textContent = outputLanguageText("playerShouldHitOrStand");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        const dealerContainer = document.querySelector('.player-cards');
        dealerContainer.classList.add('player-cards-active');
        console.log("===============");
        return;
    }  else if (playerScore > dealerScore) { // Умова для ситуації, коли рахунок гравця більше, ніж у дилера, і гравець може вибрати між hit та stand
        console.log("Game Started: " + isGameStarted);
        console.log("Player has to hit9.");
        console.log("Hit Step is" + hitStep);
        document.getElementById('hit-button').disabled = false;
        document.getElementById('stand-button').disabled = false;
        document.getElementById('status').textContent = outputLanguageText("playerShouldHitOrStand");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        const playerContainer = document.querySelector('.player-cards');
        playerContainer.classList.add('player-cards-active');
        console.log("===============");
        return;
    }   else { // Умова для ситуації, коли рахунок дилера більше, ніж у гравця, і дилер може вибрати між hit та stand
        console.log("Game Started: " + isGameStarted);
        console.log("Player has to hit10.");
        console.log("Hit Step is" + hitStep);
        document.getElementById('hit-button').disabled = false;
        document.getElementById('stand-button').disabled = false;
        document.getElementById('status').textContent = outputLanguageText("playerShouldHitOrStand");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
        const dealerContainer = document.querySelector('.player-cards');
        dealerContainer.classList.add('player-cards-active');
        
        console.log("===============");
        return;
    }
}
};
    // Функція для обробки ситуації, коли виграє дилер
function dealerWins() { 
    statictics("dealerWin");

    document.getElementById("plus1").disabled = false;
    document.getElementById("plus2").disabled = false;
    document.getElementById("plus5").disabled = false;
    document.getElementById("plus10").disabled = false;
    document.getElementById("resetBetButton").disabled = false;
    document.getElementById("bet-amount-box").classList.remove("bet-amount-box-unactive");
    document.getElementById("resetBetButtonImg").classList.remove("resetBetButtonImg-unactive");
    document.getElementById("betAmount").classList.remove("bet-amount-active");

    totalGames++; // Збільшуємо загальну кількість зіграних ігор на 1 при кожному початку гри  
    document.getElementById('total-games-text').textContent = totalGames;

    const dealerParent = document.getElementById('dealer-cards'); // Отримуємо батьківський елемент для карт дилера
    const dealerChildren = dealerParent.children; // Отримуємо колекцію дочірніх елементів (карт) дилера

    Array.from(dealerChildren).forEach(child => { // Проходимося по кожному дочірньому елементу (карті) дилера
        child.classList.add('card-blured');
    });

    let parentWinText1 = document.getElementById("statusOfWinLoseDrawPlaceDealer"); // Отримуємо батьківський елемент для відображення результату дилера
    let childWinText1 = document.getElementById("winO"); // Отримуємо дочірній елемент, який містить текст "Win" для дилера
    parentWinText1.appendChild(childWinText1); // Додаємо текст "Win" до батьківського елемента для відображення результату дилера


    const playerParent = document.getElementById('player-cards');
    const playerChildren = playerParent.children;

    Array.from(playerChildren).forEach(child => {
        child.classList.add('card-blured');
    });

    let parentWinText2 = document.getElementById("statusOfWinLoseDrawPlacePlayer");
    let childWinText2 = document.getElementById("losO");
    parentWinText2.appendChild(childWinText2);

    const playerContainer = document.querySelector('.player-cards');
    playerContainer.classList.remove('player-cards-active');
    const dealerContainer = document.querySelector('.dealer-cards');
    dealerContainer.classList.remove('dealer-cards-active');
}
    // Функція для обробки ситуації, коли виграє гравець
function playerWins() {
    statictics("playerWin");

    betCalculationWin(); // Викликаємо функцію для розрахунку виграшу гравця та оновлення його балансу

    document.getElementById("plus1").disabled = false;
    document.getElementById("plus2").disabled = false;
    document.getElementById("plus5").disabled = false;
    document.getElementById("plus10").disabled = false;
    document.getElementById("resetBetButton").disabled = false;
    document.getElementById("bet-amount-box").classList.remove("bet-amount-box-unactive");
    document.getElementById("resetBetButtonImg").classList.remove("resetBetButtonImg-unactive");
    document.getElementById("betAmount").classList.remove("bet-amount-active");

    totalGames++; // Збільшуємо загальну кількість зіграних ігор на 1 при кожному початку гри  
    document.getElementById('total-games-text').textContent = totalGames;

    const dealerParent = document.getElementById('dealer-cards');
    const dealerChildren = dealerParent.children;

    Array.from(dealerChildren).forEach(child => {
        child.classList.add('card-blured');
    });

    let parentWinText1 = document.getElementById("statusOfWinLoseDrawPlaceDealer");
    let childWinText1 = document.getElementById("losO");
    parentWinText1.appendChild(childWinText1);


    const playerParent = document.getElementById('player-cards');
    const playerChildren = playerParent.children;

    Array.from(playerChildren).forEach(child => {
        child.classList.add('card-blured');
    });

    let parentWinText2 = document.getElementById("statusOfWinLoseDrawPlacePlayer");
    let childWinText2 = document.getElementById("winO");
    parentWinText2.appendChild(childWinText2);

    const playerContainer = document.querySelector('.player-cards');
    playerContainer.classList.remove('player-cards-active');
    const dealerContainer = document.querySelector('.dealer-cards');
    dealerContainer.classList.remove('dealer-cards-active');
}
    // Функція для обробки ситуації, коли нічия
function draw() {
    statictics("draw");

    betCalculationDraw(); // Викликаємо функцію для розрахунку нічийного результату та оновлення балансу гравця

    document.getElementById("plus1").disabled = false;
    document.getElementById("plus2").disabled = false;
    document.getElementById("plus5").disabled = false;
    document.getElementById("plus10").disabled = false;
    document.getElementById("resetBetButton").disabled = false;
    document.getElementById("bet-amount-box").classList.remove("bet-amount-box-unactive");
    document.getElementById("resetBetButtonImg").classList.remove("resetBetButtonImg-unactive");
    document.getElementById("betAmount").classList.remove("bet-amount-active");

    totalGames++; // Збільшуємо загальну кількість зіграних ігор на 1 при кожному початку гри  
    document.getElementById('total-games-text').textContent = totalGames;

    const dealerParent = document.getElementById('dealer-cards');
    const dealerChildren = dealerParent.children;

    Array.from(dealerChildren).forEach(child => {
        child.classList.add('card-blured');
    });

    let parentWinText1 = document.getElementById("statusOfWinLoseDrawPlaceDealer");
    let childWinText1 = document.getElementById("drawO1");
    parentWinText1.appendChild(childWinText1);


    const playerParent = document.getElementById('player-cards');
    const playerChildren = playerParent.children;

    Array.from(playerChildren).forEach(child => {
        child.classList.add('card-blured');
    });

    let parentWinText2 = document.getElementById("statusOfWinLoseDrawPlacePlayer");
    let childWinText2 = document.getElementById("drawO2");
    parentWinText2.appendChild(childWinText2);

    const playerContainer = document.querySelector('.player-cards');
    playerContainer.classList.remove('player-cards-active');
    const dealerContainer = document.querySelector('.dealer-cards');
    dealerContainer.classList.remove('dealer-cards-active');
}

function resetGame() { // Функція для скидання гри
    isGameStarted = false;
    dealerScore = undefined;
    playerScore = undefined;
    hitStep = 3;
    playerWalletBeforeBet = 0;

    document.getElementById("flipInnerDealerDivCard2").classList.remove("flip");

    document.getElementById('startRestart').disabled = false;
    // document.getElementById('startRestart').textContent = outputLanguageText("startText");
    document.getElementById('startRestart').classList.remove('restart-button');
    document.getElementById('startRestart').classList.add('start-button');
    document.getElementById('status').textContent = "";
    document.getElementById('status').style.animation = 'none';
    void document.getElementById('status').offsetWidth;
    document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';

    let dealerCountElement = document.getElementById("dealerScore");
    dealerCountElement.textContent = dealerScore;

    let playerCountElement = document.getElementById("playerScore");
    playerCountElement.textContent = playerScore;

    const dealerPlace = document.getElementById("statusOfWinLoseDrawPlaceDealer");
    const playerPlace = document.getElementById("statusOfWinLoseDrawPlacePlayer");
    const storage = document.getElementById("statusOfWinLoseDraw");

// повернути статус дилера
while (dealerPlace.firstChild) {
    storage.appendChild(dealerPlace.firstChild);
}

// повернути статус гравця
while (playerPlace.firstChild) {
    storage.appendChild(playerPlace.firstChild);
}

    const dealerParent = document.getElementById('dealer-cards');
    const dealerChildren = dealerParent.children;

    Array.from(dealerChildren).forEach(child => {
        child.classList.remove('card-blured');
    });

    const playerParent = document.getElementById('player-cards');
    const playerChildren = playerParent.children;

    Array.from(playerChildren).forEach(child => {
        child.classList.remove('card-blured');
    });

    const cardStorage = document.getElementById('cardStorage');

    if (outputCardForDealer1) cardStorage.appendChild(outputCardForDealer1);
    if (outputCardForDealer2) cardStorage.appendChild(outputCardForDealer2);
    if (hiddenCardForDealer2) cardStorage.appendChild(hiddenCardForDealer2);
    if (outputCardForDealer3) cardStorage.appendChild(outputCardForDealer3);
    if (outputCardForDealer4) cardStorage.appendChild(outputCardForDealer4);
    if (outputCardForDealer5) cardStorage.appendChild(outputCardForDealer5);

    if (outputCardForPlayer1) cardStorage.appendChild(outputCardForPlayer1);
    if (outputCardForPlayer2) cardStorage.appendChild(outputCardForPlayer2);
    if (outputCardForPlayer3) cardStorage.appendChild(outputCardForPlayer3);
    if (outputCardForPlayer4) cardStorage.appendChild(outputCardForPlayer4);
    if (outputCardForPlayer5) cardStorage.appendChild(outputCardForPlayer5);

    initialDeck.push(...usedDeck); // Повертаємо всі використані карти назад до колоди карт
    usedDeck = [];

    startReseiveCard(); // Починаємо нову гру після скидання
}



    document.getElementById('stand-button').addEventListener('click', stand);

async function stand() {
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerScore;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
        document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
        await sleep(200);
    if (dealerScore > 21) { // Дилер програє, якщо його рахунок перевищує 21
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.remove('dealer-cards-active');
        playerWins()
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("dealerBust");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore > playerScore) { // Дилер перемагає
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.remove('dealer-cards-active');
        dealerWins()
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("dealerWin");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore < playerScore) { // Гравець перемагає
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.remove('dealer-cards-active');
        playerWins()
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("playerWin");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore === playerScore) { // Нічия
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.remove('dealer-cards-active');
        draw()
        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;
        document.getElementById('startRestart').disabled = false;
        document.getElementById('startRestart').classList.remove('start-button');
        document.getElementById('startRestart').classList.add('restart-button');
        document.getElementById('status').textContent = outputLanguageText("drawPlayerDealer");
        document.getElementById('status').style.animation = 'none';
        void document.getElementById('status').offsetWidth;
        document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
    }
    else if (dealerScore < 17) { // Дилер бере карту третій раз, поки його рахунок менше 17

        document.getElementById('hit-button').disabled = true;
        document.getElementById('stand-button').disabled = true;

        await sleep(200);

        const playerContainer = document.querySelector('.player-cards');
        playerContainer.classList.remove('player-cards-active');
        const dealerContainer = document.querySelector('.dealer-cards');
        dealerContainer.classList.add('dealer-cards-active');

        // await sleep(200);

        const randomIndexDealerCard = Math.floor(Math.random() * initialDeck.length);
        const dealerCard3 = initialDeck.splice(randomIndexDealerCard, 1)[0];
        outputCardForDealer3 = initialCardStorage.find(card => card.card === dealerCard3.suit).value;
        const targetDealerCard3 = document.getElementById("dealerDivCard3");
        targetDealerCard3.appendChild(outputCardForDealer3);

        dealerScore += dealerCard3.value; // Додаємо значення нової карти до рахунку дилера

        const dealerCountAfterReceiveCard = dealerScore;
        let dealerCountElement = document.getElementById("dealerScore");
        dealerCountElement.textContent = dealerCountAfterReceiveCard;
        dealerCountElement.style.animation = 'none';
        void dealerCountElement.offsetWidth;
        dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

        usedDeck.push(dealerCard3);  

        console.log("Dealer Score: " + dealerScore);
        console.log("Player Score: " + playerScore);

        await sleep(500);

             if (dealerScore > 21) { // Дилер програє, якщо його рахунок перевищує 21
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore > playerScore) { // Дилер перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                dealerWins() 
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("dealerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore < playerScore) { // Гравець перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore === playerScore) { // Нічия
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                draw()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("draw");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            } else if(dealerScore < 17) {
                const randomIndexDealerCard = Math.floor(Math.random() * initialDeck.length);
                const dealerCard4 = initialDeck.splice(randomIndexDealerCard, 1)[0];
                outputCardForDealer4 = initialCardStorage.find(card => card.card === dealerCard4.suit).value;
                const targetDealerCard4 = document.getElementById("dealerDivCard4");
                targetDealerCard4.appendChild(outputCardForDealer4);

                dealerScore += dealerCard4.value; // Додаємо значення нової карти до рахунку дилера

                const dealerCountAfterReceiveCard = dealerScore;
                let dealerCountElement = document.getElementById("dealerScore");
                dealerCountElement.textContent = dealerCountAfterReceiveCard;
                dealerCountElement.style.animation = 'none';
                void dealerCountElement.offsetWidth;
                dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

                usedDeck.push(dealerCard4);  

                console.log("Dealer Score: " + dealerScore);
                console.log("Player Score: " + playerScore);

                await sleep(500);

                if (dealerScore > 21) { // Дилер програє, якщо його рахунок перевищує 21
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore > playerScore) { // Дилер перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                dealerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("dealerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore < playerScore) { // Гравець перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore === playerScore) { // Нічия
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                draw()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("draw");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';

                } else if (dealerScore < 17) {
                const randomIndexDealerCard = Math.floor(Math.random() * initialDeck.length);
                const dealerCard5 = initialDeck.splice(randomIndexDealerCard, 1)[0];
                outputCardForDealer5 = initialCardStorage.find(card => card.card === dealerCard5.suit).value;
                const targetDealerCard5 = document.getElementById("dealerDivCard5");
                targetDealerCard5.appendChild(outputCardForDealer5);

                dealerScore += dealerCard5.value; // Додаємо значення нової карти до рахунку дилера

                const dealerCountAfterReceiveCard = dealerScore;
                let dealerCountElement = document.getElementById("dealerScore");
                dealerCountElement.textContent = dealerCountAfterReceiveCard;
                dealerCountElement.style.animation = 'none';
                void dealerCountElement.offsetWidth;
                dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

                usedDeck.push(dealerCard5);  

                console.log("Dealer Score: " + dealerScore);
                console.log("Player Score: " + playerScore);

                await sleep(500);

                if (dealerScore > 21) { // Дилер програє, якщо його рахунок перевищує 21
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore > playerScore) { // Дилер перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                dealerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("dealerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore < playerScore) { // Гравець перемагає
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                playerWins()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("playerWin");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore >= 17 && dealerScore <= 21 && dealerScore === playerScore) { // Нічия
                const dealerContainer = document.querySelector('.dealer-cards');
                dealerContainer.classList.remove('dealer-cards-active');
                draw()
                document.getElementById('hit-button').disabled = true;
                document.getElementById('stand-button').disabled = true;
                document.getElementById('startRestart').disabled = false;
                document.getElementById('startRestart').classList.remove('start-button');
                document.getElementById('startRestart').classList.add('restart-button');
                document.getElementById('status').textContent = outputLanguageText("draw");
                document.getElementById('status').style.animation = 'none';
                void document.getElementById('status').offsetWidth;
                document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } else if (dealerScore < 17) {
                    playerWins()
                    document.getElementById('hit-button').disabled = true;
                    document.getElementById('stand-button').disabled = true;
                    document.getElementById('startRestart').disabled = false;
                    document.getElementById('startRestart').classList.remove('start-button');
                    document.getElementById('startRestart').classList.add('restart-button');
                    document.getElementById('status').textContent = outputLanguageText("playerWin");
                    document.getElementById('status').style.animation = 'none';
                    void document.getElementById('status').offsetWidth;
                    document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                } 
            }
    }   
} }

document.getElementById('hit-button').addEventListener('click', hit);



async function hit() {
    if (hitStep === 3){ // максимум 5 карт

    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;

    console.log("Player hits3");
    console.log("Hit step is " + hitStep);

    await sleep(100);

    const randomIndexPlayerCard3 = Math.floor(Math.random() * initialDeck.length);
    const playerCard3 = initialDeck.splice(randomIndexPlayerCard3, 1)[0];
    outputCardForPlayer3 = initialCardStorage.find(card => card.card === playerCard3.suit).value;
    const targetPlayerCard3 = document.getElementById("playerDivCard3");
    targetPlayerCard3.appendChild(outputCardForPlayer3);

    usedDeck.push(playerCard3);

    playerScore += playerCard3.value;

    const playerCountAfterReceiveCard = playerScore;
    let playerCountElement = document.getElementById("playerScore");
    playerCountElement.textContent = playerCountAfterReceiveCard;
    playerCountElement.style.animation = 'none';
    void playerCountElement.offsetWidth;
    playerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

    hitStep++; // наступного разу буде інша карта

    await sleep(100);

        if (playerScore > 21) { // Гравець програє, якщо його рахунок перевищує 21
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("dealerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            dealerWins()
        } else if (dealerScore >= 17 && playerScore > 17 && playerScore > dealerScore) { // Гравець перемагає якщо у нього більше 17 очок, а також більше очок, ніж у дилера
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            playerWins();
        } else if ((playerScore === 21 || playerScore === 20) && dealerScore < 17 && playerScore > dealerScore) { // Гравець зупиняється, якщо у нього 21 або 20 очок
            const playerContainer = document.querySelector('.dealer-cards');
            playerContainer.classList.add('dealer-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerStands");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease'; 
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            await sleep(500);
            stand();
        }  else {
                    document.getElementById('hit-button').disabled = false;
                    document.getElementById('stand-button').disabled = false;
                    document.getElementById('status').textContent = outputLanguageText("playerCanHitOrStand");
                    document.getElementById('status').style.animation = 'none';
                    void document.getElementById('status').offsetWidth;
                    document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                }
        
    }  else if (hitStep === 4){

    console.log("Player hits4");

    document.getElementById('hit-button').disabled = true;
    document.getElementById('stand-button').disabled = true;

    await sleep(100);

    const randomIndexPlayerCard4 = Math.floor(Math.random() * initialDeck.length);
    const playerCard4 = initialDeck.splice(randomIndexPlayerCard4, 1)[0];
    outputCardForPlayer4 = initialCardStorage.find(card => card.card === playerCard4.suit).value;
    const targetPlayerCard4 = document.getElementById("playerDivCard4");
    targetPlayerCard4.appendChild(outputCardForPlayer4);

    usedDeck.push(playerCard4);

    playerScore += playerCard4.value;

    const playerCountAfterReceiveCard = playerScore;
    let playerCountElement = document.getElementById("playerScore");
    playerCountElement.textContent = playerCountAfterReceiveCard;
    playerCountElement.style.animation = 'none';
    void playerCountElement.offsetWidth;
    playerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

    hitStep++; // наступного разу буде інша карта

    await sleep(100);

        if (playerScore > 21) { // Гравець програє, якщо його рахунок перевищує 21
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("dealerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            dealerWins()
        } else if (dealerScore >= 17 && playerScore > 17 && playerScore > dealerScore) { // Гравець перемагає якщо у нього більше 17 очок, а також більше очок, ніж у дилера
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            playerWins();
        } else if ((playerScore === 21 || playerScore === 20) && dealerScore < 17 && playerScore > dealerScore) { // Гравець зупиняється, якщо у нього 21 або 20 очок
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerStands");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease'; 
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            await sleep(500);
            stand();
        }  else {
                    document.getElementById('hit-button').disabled = false;
                    document.getElementById('stand-button').disabled = false;
                    document.getElementById('status').textContent = outputLanguageText("playerCanChooseToHitOrStand");
                    document.getElementById('status').style.animation = 'none';
                    void document.getElementById('status').offsetWidth;
                    document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                }
            
    } else if (hitStep === 5){

    console.log("Player hits5");

    const randomIndexPlayerCard5 = Math.floor(Math.random() * initialDeck.length);
    const playerCard5 = initialDeck.splice(randomIndexPlayerCard5, 1)[0];
    outputCardForPlayer5 = initialCardStorage.find(card => card.card === playerCard5.suit).value;
    const targetPlayerCard5 = document.getElementById("playerDivCard5");
    targetPlayerCard5.appendChild(outputCardForPlayer5);

    usedDeck.push(playerCard5);

    playerScore += playerCard5.value;

    const playerCountAfterReceiveCard = playerScore;
    let playerCountElement = document.getElementById("playerScore");
    playerCountElement.textContent = playerCountAfterReceiveCard;
    playerCountElement.style.animation = 'none';
    void playerCountElement.offsetWidth;
    playerCountElement.style.animation = 'textAppearAnimation 0.5s ease';

    hitStep++; // наступного разу буде інша карта

    await sleep(100);

        if (playerScore > 21) { // Гравець програє, якщо його рахунок перевищує 21
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("bust") + outputLanguageText("dealerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            dealerWins()
        } else if (dealerScore >= 17 && playerScore > 17 && playerScore > dealerScore) { // Гравець перемагає якщо у нього більше 17 очок, а також більше очок, ніж у дилера
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerWin");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            let dealerCountElement = document.getElementById("dealerScore");
            dealerCountElement.textContent = dealerScore;
            dealerCountElement.style.animation = 'none';
            void dealerCountElement.offsetWidth;
            dealerCountElement.style.animation = 'textAppearAnimation 0.5s ease';
            await sleep(500);
            playerWins();
        } else if ((playerScore === 21 || playerScore === 20) && dealerScore < 17 && playerScore > dealerScore) { // Гравець зупиняється, якщо у нього 21 або 20 очок
            const playerContainer = document.querySelector('.player-cards');
            playerContainer.classList.remove('player-cards-active');
            document.getElementById('hit-button').disabled = true;
            document.getElementById('stand-button').disabled = true;
            document.getElementById('startRestart').disabled = false;
            document.getElementById('startRestart').classList.remove('start-button');
            document.getElementById('startRestart').classList.add('restart-button');
            document.getElementById('status').textContent = outputLanguageText("playerStands");
            document.getElementById('status').style.animation = 'none';
            void document.getElementById('status').offsetWidth;
            document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease'; 
            await sleep(200);
            document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
            await sleep(500);
        }  else {
                    document.getElementById('hit-button').disabled = true;
                    document.getElementById('stand-button').disabled = true;
                    document.getElementById('status').textContent = outputLanguageText("playerStands");
                    document.getElementById('status').style.animation = 'none';
                    void document.getElementById('status').offsetWidth;
                    document.getElementById('status').style.animation = 'statusTextAnimation 0.5s ease';
                    await sleep(200);
                    document.getElementById("flipInnerDealerDivCard2").classList.add("flip");
                    await sleep(500);
                    stand();
                }
            }
    }

function statictics(statusOfGame) {
    if (statusOfGame === "dealerWin") {
        losses++;

        let total = wins + losses + draws;
        let winPercent = (wins / total) * 100;
        let losePercent = (losses / total) * 100;
        let drawPercent = (draws / total) * 100;

        document.getElementById("percentOfDealerWins").textContent = `${losePercent.toFixed(1)}%`;
        document.getElementById("percentOfDraws").textContent = `${drawPercent.toFixed(1)}%`;
        document.getElementById("percentOfPlayerWins").textContent = `${winPercent.toFixed(1)}%`;
        console.log(losePercent + drawPercent + winPercent);

        const template = document.getElementById("statisticsTemplate");
        const clone = template.cloneNode(true);
        clone.removeAttribute("id");
        clone.classList.add("statistic-content-loss");
        clone.querySelector(".dealerFinalCount").textContent = dealerScore;
        clone.querySelector(".playerFinalCount").textContent = playerScore;
        document.getElementById("statisticsBox").appendChild(clone);

    } else if (statusOfGame === "draw") {
        draws++;
        let total = wins + losses + draws;
        let winPercent = (wins / total) * 100;
        let losePercent = (losses / total) * 100;
        let drawPercent = (draws / total) * 100;

        document.getElementById("percentOfDealerWins").textContent = `${losePercent.toFixed(1)}%`;
        document.getElementById("percentOfDraws").textContent = `${drawPercent.toFixed(1)}%`;
        document.getElementById("percentOfPlayerWins").textContent = `${winPercent.toFixed(1)}%`;
        console.log(losePercent + drawPercent + winPercent);

        const template = document.getElementById("statisticsTemplate");
        const clone = template.cloneNode(true);
        clone.removeAttribute("id");
        clone.classList.add("statistic-content-draw");
        clone.querySelector(".dealerFinalCount").textContent = dealerScore;
        clone.querySelector(".playerFinalCount").textContent = playerScore;
        document.getElementById("statisticsBox").appendChild(clone);

    } else if (statusOfGame === "playerWin") {
        wins++;
        let total = wins + losses + draws;
        let winPercent = (wins / total) * 100;
        let losePercent = (losses / total) * 100;
        let drawPercent = (draws / total) * 100;

        document.getElementById("percentOfDealerWins").textContent = `${losePercent.toFixed(1)}%`;
        document.getElementById("percentOfDraws").textContent = `${drawPercent.toFixed(1)}%`;
        document.getElementById("percentOfPlayerWins").textContent = `${winPercent.toFixed(1)}%`;
        console.log(losePercent + drawPercent + winPercent);

        const template = document.getElementById("statisticsTemplate");
        const clone = template.cloneNode(true);
        clone.removeAttribute("id");
        clone.classList.add("statistic-content-win");
        clone.querySelector(".dealerFinalCount").textContent = dealerScore;
        clone.querySelector(".playerFinalCount").textContent = playerScore;
        document.getElementById("statisticsBox").appendChild(clone);
        
    }
}

function betCalculationWin() {
    const playerWalletAfterWin = playerWalletBeforeBet + betAmount;
    document.getElementById("playerWallet").innerText = playerWalletAfterWin;
    playerWallet = playerWalletAfterWin;
}

function betCalculationDraw() {
    document.getElementById("playerWallet").innerText = playerWallet + betAmount;
    playerWallet = playerWalletBeforeBet;
}
