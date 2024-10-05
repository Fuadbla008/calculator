// this is plus calculator
function plus(){
    const plusFirst = document.getElementById('firstnumber')
    const plusFirstNumber = plusFirst.value;
    const intFirst = parseInt(plusFirstNumber);
    const plussecond = document.getElementById('secondnumber')
    const plussecondNumber = plussecond.value;
    const intSecond = parseInt(plussecondNumber);

    const plusSum = intFirst + intSecond;
    const intPlusSum = parseInt(plusSum);
    const display = document.getElementById('outputDisplay');
    display.innerText = intPlusSum;
}

// this is substract calculator
function minus(){
    const minusFirst = document.getElementById('firstnumber')
    const minusFirstNumber = minusFirst.value;
    const minusSecond = document.getElementById('secondnumber')
    const minusSecondNumber = minusSecond.value;

    const totalMinus = minusFirstNumber - minusSecondNumber;

    const minusDisplay = document.getElementById('outputDisplay');

    minusDisplay.innerText = totalMinus;
}

// this is divide calculator
function divide(){
    const divideFirst = document.getElementById('firstnumber');
    const divideFirstNumber = divideFirst.value;
    const divideSecond = document.getElementById('secondnumber');
    const divideSecondNumber = divideSecond.value;

    const divideTotal = divideFirstNumber / divideSecondNumber;

    const divideDisplay = document.getElementById('outputDisplay');
    divideDisplay.innerText = divideTotal;
}

// this is mulplication calculator
function multi(){
    const mulFirst = document.getElementById('firstnumber');
    const mulFirstNumber = mulFirst.value;
    const mulNumber = parseInt(mulFirstNumber);

    const mulSecond = document.getElementById('secondnumber');
    const mulSecondNumber = mulSecond.value;
    const mulNumber2 = parseInt(mulSecondNumber); 

    const multiplication = mulNumber * mulNumber2;
    const mulDisplay = document.getElementById('outputDisplay');
    mulDisplay.innerText = multiplication;
}