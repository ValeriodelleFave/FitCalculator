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
        showBMIresult(BMI, "<span class='redText'>Sottopeso</span>");
    } else if (18.5 < BMI && BMI < 25) {
        showBMIresult(BMI, "<span class='greenText'>Normopeso</span>");
    } else if (25 <= BMI && BMI <= 30) {
        showBMIresult(BMI, "<span class='orangeText'>Sovrappeso</span>");
    } else if (BMI > 30) {
        showBMIresult(BMI, "<span class='redText'>Obeso</span>");
    } else {
        showBMIerror();
    }
}

function showBMIerror() {
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("result").innerHTML = "Errore calcolo BMI";
}

function showBMIresult(BMI, resultMessage) {
    document.getElementById("resultContainer").classList.remove("hidden");
    document.getElementById("result").innerHTML = "BMI: " + BMI + " - " + resultMessage;
}

function reset() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("resultContainer").classList.add("hidden");
}