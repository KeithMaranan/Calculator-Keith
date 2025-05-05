const txtcalcu = document.getElementById("calculator-input-text");

function ButtonValue(num) {
    document.getElementById("calculator-input-text").value += num;
}

function ClearAll() {
    document.getElementById("calculator-input-text").value = "";
}

function Total() {
    const total = eval(document.getElementById("calculator-input-text").value);
    document.getElementById("calculator-input-text").value = total;
}

//function Parenthesis() {
//    const expression = txtcalcu.innerText;
//    const OpenParenthesis = (expression.match(/\(/g) || []).length;
//    const CloseParenthesis = (expression.match(/\)/g) || []).length;

//    if(OpenParenthesis > CloseParenthesis) {
//        txtcalcu.innerText += ')';
//    } else {
//        if (txtcalcu.innerText === "0") display.innerText = "";
//        txtcalcu.innerText += '(';
//    }
//}

//A5A5A5 - AC bg-color
//333333 - number bg-color
//FF9500 - function bg-color

//Keith Maranan