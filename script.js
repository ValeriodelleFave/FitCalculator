function calcBMI() {
    let weight, height;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    if (weight > 0  && height > 0) {
        // BMI = kg / m2
        BMI = (weight / (height * height)).toFixed(2);
        checkBMI(BMI);
    } else {
        showBMIerror();
    }
}

function checkBMI(BMI) {
    if (BMI < 18.5) {
        showBMIresult(BMI, "sottopeso");
    } else if (18.5 < BMI && BMI < 25) {
        showBMIresult(BMI, "normopeso");
    } else if (25 < BMI && BMI < 30) {
        showBMIresult(BMI, "sovrappeso");
    } else if (BMI > 30) {
        showBMIresult(BMI, "obeso");
    } else {
        showBMIerror();
    }
}

function showBMIerror() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("resultMessage").innerHTML = "Errore calcolo BMI";
    document.getElementById("BMIContainer").classList.add("hidden");
}

function showBMIresult(BMI, resultMessage) {
    document.getElementById("result").innerHTML = BMI;
    document.getElementById("resultMessage").innerHTML = resultMessage;
    document.getElementById("BMIMeter").setAttribute("value", BMI);
    document.getElementById("BMIContainer").classList.remove("hidden");
}