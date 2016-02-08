function tempConvert() {
    var fTemp = prompt("Please enter the temperature in Fahrenheit", "tempie");
    
    if (fTemp => 0) {
        document.getElementById("demo").innerHTML =
        "It is " + (5/9) * (fTemp - 32) + " degrees Celsius";
    }
}
