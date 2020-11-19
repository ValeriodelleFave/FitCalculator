function calcBMI() {
    let weight, height;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    if (weight > 0 && height > 0) {
        BMI = (weight / (height * height)).toFixed(2);
        checkBMI(BMI);
    } else {
        showBMIerror();
    }
}

function checkBMI(BMI) {
    if (BMI < 18.5) {
        showBMIresult(BMI, "Sottopeso");
    } else if (18.5 < BMI && BMI < 25) {
        showBMIresult(BMI, "Normopeso");
    } else if (25 < BMI && BMI < 30) {
        showBMIresult(BMI, "Sovrappeso");
    } else if (BMI > 30) {
        showBMIresult(BMI, "Obeso");
    } else {
        showBMIerror();
    }
}

function showBMIerror() {
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("result").innerHTML = "Errore calcolo BMI";
    document.getElementById("BMIMeterContainer").classList.add("hidden");
}

function showBMIresult(BMI, resultMessage) {
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("result").innerHTML = "BMI: " + BMI + " - " + resultMessage;
    document.getElementById("BMIMeter").setAttribute("value", BMI);
    document.getElementById("BMIMeterContainer").classList.remove("hidden");
}