var CalcWindow = document.getElementById('screen');
var enteredText = '';
var stat = true;
var CharClick = function (element) {
    if (enteredText !== '') {
        switch (element.id) {
            case 'devide':
                enteredText += ' / ';
                break;
            case 'multiple':
                enteredText += ' * ';
                break;
            case 'minus':
                enteredText += ' - ';
                break;
            case 'plus':
                enteredText += ' + ';
                break;
            case 'left-over':
                enteredText += ' % ';
                break;
        }
    }
    else {
        throw new Error('Enter a number first');
    }
    CalcWindow.innerHTML = enteredText;
};
var NumberClick = function (element) {
    stat = true;
    switch (element.id) {
        case 'back':
            if (enteredText[enteredText.length - 1] == ' ') {
                enteredText = enteredText.slice(0, enteredText.length - 2);
            }
            else if (enteredText.length <= 1) {
                stat = false;
                enteredText = '';
                CalcWindow.innerHTML = '0';
            }
            else {
                enteredText = enteredText.slice(0, enteredText.length - 1);
            }
            break;
        case 'nine':
            enteredText += '9';
            break;
        case 'eight':
            enteredText += '8';
            break;
        case 'seven':
            enteredText += '7';
            break;
        case 'six':
            enteredText += '6';
            break;
        case 'five':
            enteredText += '5';
            break;
        case 'four':
            enteredText += '4';
            break;
        case 'three':
            enteredText += '3';
            break;
        case 'two':
            enteredText += '2';
            break;
        case 'one':
            enteredText += '1';
            break;
        case 'auditor':
            if (enteredText === '') {
                enteredText += '0.';
            }
            else {
                enteredText += '.';
            }
            break;
        case 'zero':
            enteredText += '0';
            break;
        case 'clear':
            stat = false;
            enteredText = '';
            CalcWindow.innerHTML = '0';
            break;
    }
    if (stat)
        CalcWindow.innerHTML = enteredText;
};
var Result = function () {
    var result = eval(enteredText);
    enteredText = '';
    CalcWindow.innerHTML = result;
};
