function result(value) {
    var finalResult = "";
    let text = document.getElementById("button").textContent;
    //console.log(text);
    if (text == value) {
        finalResult = "You win";
        document.getElementById("p2").innerHTML = `System: ${value}`;
        document.getElementById("p3").innerHTML = finalResult;
    } else {
        finalResult = "You lose";
        document.getElementById("p2").innerHTML = `System: ${value}`;
        document.getElementById("p3").innerHTML = finalResult;
    }
}
function game() {
    const number = Math.random();
    var value = "";
    if (number < 1 / 3) {
        value = "Paper";
        result(value);
    }   else if (number > 1 / 3 && number < 2 / 3) {
        value = "Rock";
        result(value);
    }   else {
        value = "Scirrors";
        result(value)
    }
    console.log(value);
}















