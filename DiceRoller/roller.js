function rollDice() {
    const numDice = document.getElementById("slider").value;
    const thrownDice = document.getElementById("numResult");
    const diceImage = document.getElementById("diceImages");
    const numbers = [];
    const pictures = [];

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        numbers.push(value);
        pictures.push(`<img src="pics/${value}.png">`); // Correct template literal usage
    }

    thrownDice.textContent = "Dice: " + numbers.join(", "); // Correct concatenation
    diceImage.innerHTML = pictures.join('');
}