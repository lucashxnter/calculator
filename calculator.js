const readline = require('readline');

const r1 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
});

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function calculate () {
    r1.question('Digite o primeiro número: ', (num1) => {
        r1.question('Digite o segundo número: ', (num2) => {
            r1.question('Digite a operação (+, -, *, /): ', (operator) => {
                let result;

                num1 = Number(num1);
                num2 = Number(num2);

                switch(operator) {
                    case '+':
                        result = add(num1, num2);
                        break;
                    case '-':
                        result = add(num1, num2);
                        break;
                    case '*':
                        result = add(num1, num2);
                        break;
                    case '/':
                        result = add(num1, num2);
                        break;
                    default:
                        console.log('Operação inválida!');
                        r1.close;
                        return;
                }

                console.log('O resultado é:', result);
                r1.close();
            });
        });
    });
}

calculate();
