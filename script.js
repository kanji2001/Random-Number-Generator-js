function generateRandomNumber() {
    var minValue = parseInt(document.getElementById('minInput').value);
    var maxValue = parseInt(document.getElementById('maxInput').value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    } else {
        var randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        
        document.getElementById('result').innerText = 'Random Number: ' + randomNumber;
    }
}