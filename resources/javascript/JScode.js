let recCount = 0;

display()

function RecommenderSystem() {

    let informationToRead = getDiagnosticInformation();

    let diagnosisNumber = 0;

    //data for various symptoms
    let d0 = ["blurry", "blurriness", "blurred", "blank", "spots", "cloudy", "whitish", "lack"]
    let d1 = ["faded", "color", "colors", "green", "blue", "yellow"]
    let d2 = ["poor", "blindness", "blind", "lazy"]
    let d3 = ["strain", "straining"]
    let d4 = ["red", "redness", "pink", "reddish", "pinkish", "pain"]
    let d5 = ["itchy", "burning", "crusty", "scratchy", "stinging", "watery"]
    let d6 = ["dry"]
    let d7 = ["sugar", "diabetes", "diabetic"]
    let d8 = ["far", "distant"]
    let d9 = ["close", "near", "nearby"]
    let d10 = ["float", "floating", "lines", "squiggly", "spots", "floaters", "dots"]
    let d11 = ["side", "peripheral", "pheripheral"]
    let d12 = ["light", "flash", "flashes"]


    for (let i = 0; i < informationToRead.length; i++) {
        if (informationToRead[i] != null) {
            diagnosisNumber += determineNumber(0, informationToRead[i], d12, informationToRead, true);
            diagnosisNumber += determineNumber(1, informationToRead[i], d11, informationToRead, false);
            diagnosisNumber += determineNumber(2, informationToRead[i], d10, informationToRead, true);
            diagnosisNumber += determineNumber(3, informationToRead[i], d9, informationToRead, false);
            diagnosisNumber += determineNumber(4, informationToRead[i], d8, informationToRead, false);
            diagnosisNumber += determineNumber(5, informationToRead[i], d7, informationToRead, true);
            diagnosisNumber += determineNumber(6, informationToRead[i], d6, informationToRead, true);
            diagnosisNumber += determineNumber(7, informationToRead[i], d5, informationToRead, true);
            diagnosisNumber += determineNumber(8, informationToRead[i], d4, informationToRead, true);
            diagnosisNumber += determineNumber(9, informationToRead[i], d3, informationToRead, true);
            diagnosisNumber += determineNumber(10, informationToRead[i], d2, informationToRead, true);
            diagnosisNumber += determineNumber(11, informationToRead[i], d1, informationToRead, false);
            diagnosisNumber += determineNumber(12, informationToRead[i], d0, informationToRead, true);
            if (breakingStatement(informationToRead[i])){
                break;
            }
        }
    }


    let diagnosisOneAndZero = allZeroOrOne(diagnosisNumber);
    let diseaseId = findDisease(diagnosisOneAndZero);

    localStorage.setItem("diseaseId", diseaseId);
    diagnosis()
}

function display() {
    let diseaseAccordion = localStorage.getItem("diseaseId")
    document.getElementById(diseaseAccordion).classList.toggle('show');
    localStorage.clear()
}

function diagnosis(){
    let diseaseDialogBox = localStorage.getItem("diseaseId");
    let text = document.getElementById("display-disease");
    if (diseaseDialogBox ==="collapseOne7"){
        text.innerText = "Amblyopia (Lazy Eye)";
    }
    else if(diseaseDialogBox === "collapseTwo7"){
        text.innerText = "Cataract";
    }
    else if(diseaseDialogBox === "collapseThree7"){
        text.innerText = "Color Blindness";
    }
    else if(diseaseDialogBox === "collapseFour7"){
        text.innerText = "Diabetic Retinopathy";
    }
    else if(diseaseDialogBox === "collapseFive7"){
        text.innerText = "Dry Eye";
    }
    else if(diseaseDialogBox === "collapseSix7"){
        text.innerText = "Farsightedness (Hyperopia)";
    }
    else if(diseaseDialogBox === "collapseSeven7"){
        text.innerText = "Floaters";
    }
    else if(diseaseDialogBox === "collapseEight7"){
        text.innerText = "Glaucoma";
    }
    else if(diseaseDialogBox === "collapseNine7"){
        text.innerText = "Nearsightedness (Myopia)";
    }
    else if(diseaseDialogBox === "collapseTen7"){
        text.innerText = "Pink Eye (Conjunctivitis)";
    }
    else if(diseaseDialogBox === "collapseEleven7"){
        text.innerText = "Retinal Detachment";
    }
    else
        text.innerText = "an Extraneous Diagnosis.";

}




function breakingStatement(s){

    return (s === "but") || (s === "however") || (s === "spite") || (s === "other hand")
        || (s === "nevertheless") || (s === "nonetheless") || (s === "contrast")
        || (s === "contrary") || (s === "still") || (s === "yet");

}

function getDiagnosticInformation() {
    let diagnosticInformation = [];

    let diseaseDescription = document.getElementById("exampleFormControlTextarea1").value
    let words = diseaseDescription.split(/[1234567890&()+/*,\[!@#$\]%^_~` "	{}|:;.<>?=-]/)

    if (words.length < 5) {
        window.location.reload();
        alert("Please write a minimum of 5 words");
    }

    if (words.length > 50) {
        window.location.reload();
        alert("You wrote more than 50 words! Please write lesser than 50 words");
    }


    for (let i = 0, j = 0; i < words.length; i++) {
        if (!(words[i] === "")) {
            diagnosticInformation[j] = words[i].toLowerCase();
            j++;
        }
    }



    return diagnosticInformation
}

function allZeroOrOne(number) {
    let numsString = "" + number;
    let numsArray = numsString.split("");
    let numsLong = [];
    for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] !== '0') {
            numsLong[i] = parseFloat('1')
        }
        else{
            numsLong[i] = parseFloat('0')
        }
    }
    let finalNumber = 0;
    for (let i = numsLong.length - 1; i > -1; i--) {
        finalNumber += numsLong[numsLong.length - 1 - i] * Math.pow(10, i);
    }

    return finalNumber;
}



function negatives(informationToRead) {
    let check = false;
    for (let i = 0; i < informationToRead.length; i++) {
        if (informationToRead[i] === null)
            break;

        if (i - 4 >= 0) {
            for (let j = i - 4; j < i; j++) {
//                    if(Objects.equals(informationToRead[j], "only")){
//                        check = false;
//                        break;
//                    }
                if ((informationToRead[j] === "not") || (informationToRead[j] === "unable")
                    || (informationToRead[j] === "can't") || (informationToRead[j]  ===  "incapable")
                    || (informationToRead[j] === "haven't") || (informationToRead[j] === "shouldn't")
                    || (informationToRead[j] === "cannot") || (informationToRead[j] === "won't")
                    || (informationToRead[j] === "wouldn't") || (informationToRead[j] === "couldn't")
                    || (informationToRead[j] === "neither") || (informationToRead[j] === "no")
                    || (informationToRead[j] === "don't")
                    || (informationToRead[j] === "lack")) {
                    check = true;
                    break;
                }
            }
        }



        if (i + 3 <=  49) {
            for (let j = i + 3; j > i; j--) {
//                    if(Objects.equals(informationToRead[j], "only")){
//                        check = false;
//                        break;
//                    }
                if ((informationToRead[j] === "not") || (informationToRead[j] === "unable")
                    || (informationToRead[j] === "can't") || (informationToRead[j] === "incapable")
                    || (informationToRead[j] === "haven't") || (informationToRead[j] === "shouldn't")
                    || (informationToRead[j] === "cannot") || (informationToRead[j] === "won't")
                    || (informationToRead[j] === "wouldn't") || (informationToRead[j] === "couldn't")
                    || (informationToRead[j] === "neither") || (informationToRead[j] === "no")
                    || (informationToRead[j] === "don't")
                    || (informationToRead[j] === "lack")) {
                    check = true;
                    break;
                }
            }
        }




    }
    return check;
}



function determineNumber(power, oneWord, symptoms, informationToRead, check) {
    let num = 0;

    for (let i = 0; i < symptoms.length; i++) {

        if (symptoms[i] === null || oneWord === null  )
            break;

        if ((oneWord.toLowerCase() === symptoms[i].toLowerCase()) && power === 11) {
            if(negatives(informationToRead)){
                num =  Math.pow(10, 11);
            }
            break;
        }

        if ((oneWord.toLowerCase() === symptoms[i].toLowerCase()) && power === 1) {
            if(negatives(informationToRead)){
                num =  Math.pow(10, 1);
            }
            break;

        }

        if ((oneWord.toLowerCase() === symptoms[i].toLowerCase()) && (power === 3 || power === 4) && recCount === 0) {

            if((negatives(informationToRead) && power === 3) || (!negatives(informationToRead) && power === 4)){
                num =  Math.pow(10, 3);
                recCount++;
                break;
            }

            if ((negatives(informationToRead) && power === 4) || (!negatives(informationToRead) && power === 3) ){
                num =  Math.pow(10, 4);
                recCount++;
                break;
            }

        }

        if (check && negatives(informationToRead)) {
            break;
        }

        if ((oneWord.toLowerCase() === symptoms[i].toLowerCase()) && check) {
            num =  Math.pow(10, power);
            break;
        }
    }
    return num;
}



function findDisease(diagnosisNumber) {
    if (diagnosisNumber === 1010000000000.0 || diagnosisNumber === 10000000000.0)
        return "collapseOne7"
    else if (diagnosisNumber === 1100000000000.0 || diagnosisNumber === 1000000000000.0)
        return "collapseTwo7"
    else if (diagnosisNumber === 100000000000.0)
        return "collapseThree7"
    else if (diagnosisNumber === 1010000100100.0 || diagnosisNumber === 1010000100000.0 || diagnosisNumber === 1010000000100.0 || diagnosisNumber === 1000000100100.0 || diagnosisNumber === 1000000100000.0 || diagnosisNumber === 1000000000100.0 || diagnosisNumber === 10000100100.0 || diagnosisNumber === 10000100000.0 || diagnosisNumber === 10000000100.0 || diagnosisNumber === 100100.0 || diagnosisNumber === 100000.0)
        return "collapseFour7"
    else if (diagnosisNumber === 1000111000000.0 || diagnosisNumber === 1000110000000.0 || diagnosisNumber === 1000011000000.0 || diagnosisNumber === 1000010000000.0 || diagnosisNumber === 111000000.0 || diagnosisNumber === 11000000.0 || diagnosisNumber === 10000000.0 ||diagnosisNumber === 1000000)
        return "collapseFive7"
    else if (diagnosisNumber === 1000.0 || diagnosisNumber === 1000001000.0 || diagnosisNumber === 1000000010000.0)
        return "collapseSix7"
    else if (diagnosisNumber === 100.0)
        return "collapseSeven7"
    else if (diagnosisNumber === 1010000000010.0 || diagnosisNumber === 10000000010.0 || diagnosisNumber === 1000000000010.0 || diagnosisNumber === 10.0)
        return"collapseEight7"
    else if (diagnosisNumber === 10000.0 || diagnosisNumber === 1000010000.0)
        return"collapseNine7"
    else if (diagnosisNumber === 100000000.0 || diagnosisNumber === 110000000.0)
        return"collapseTen7"
    else if (diagnosisNumber === 1.0 || diagnosisNumber === 101.0)
        return "collapseEleven7"
    else
        return "collapseTwelve7"
}