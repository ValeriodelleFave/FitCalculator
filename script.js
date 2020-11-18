function calcBMI() {
    let weight, height, BMI, resultMessage;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    // BMI = kg / m2
    BMI = (weight / (height * height)).toFixed(2);
    if (BMI < 18.5) {
        resultMessage = "Sottopeso";
    } else if (BMI > 30) {
        resultMessage = "Obeso";
    } else if ( 18.5 < BMI && BMI < 30) {
        resultMessage = "Normopeso";
    } else{
        resultMessage = "errore"
    }
    document.getElementById("result").innerHTML = BMI
    document.getElementById("resultMessage").innerHTML = resultMessage
}