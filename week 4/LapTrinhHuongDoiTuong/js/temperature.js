let Temperature = function(temp){
    this.celsius = temp;

    this.toFahrenheit = function() {
        return parseFloat(this.celsius * 1.8 + 32).toFixed(2);
    }

    this.toKelvin = function() {
        return this.celsius + 273;
    }
}

function transitionF() {
    celsius = Number(document.getElementById('Temperature').value);
    if (celsius) {
        let temperature = new Temperature(celsius);
        document.getElementById('showTransitionF').innerHTML = `degrees Fahrenheit is :  ${temperature.toFahrenheit()}`
    }
}
function transitionKenvin() {
    celsius = Number(document.getElementById('Temperature').value);
    if (celsius) {
        let temperature = new Temperature(celsius);
        document.getElementById('showTransitionKenvin').innerHTML = `degree k is :  ${temperature.toKelvin()}`
    }
}