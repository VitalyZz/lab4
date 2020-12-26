const output = document.querySelector('.output');
const test1 = document.querySelector('.test1');
const test2 = document.querySelector('.test2');

output.addEventListener('click', outputFunc);
test1.addEventListener('click', test1Func);
test2.addEventListener('click', test2Func);

function outputFunc() {
    let arrOfValues = [];
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => arrOfValues.push(parseInt(input.value)));

    let W = parseFloat(inputs[0].value);
    let T = parseFloat(inputs[1].value);
    let Vmin = parseFloat(inputs[2].value);
    let Vmax = parseFloat(inputs[3].value);
    let Cx = parseFloat(inputs[4].value);
    let Cd = parseFloat(inputs[5].value);
    let Ch = parseFloat(inputs[6].value);

    let Q = parseFloat(Math.sqrt((2 * W * Cd) / (Cx * T)) * Math.sqrt(Math.pow(1 - ((Vmax - Vmin) * Cx * T / (W * Ch)), -1)));
    let b = parseFloat((Vmax - Vmin) * (0.5 - Cx * Q * T / (W * Ch)));
    let sigma = parseFloat((Vmax - Vmin) / Math.sqrt(12));
    let P = parseFloat(Vmin + sigma * Math.sqrt(12) * (1 - Cx * Q * T / (W * Ch)));
    let K = parseFloat(Math.sqrt(3) - Math.sqrt(12) * Q * T * Cx / (W * Ch));
    let F = parseFloat(Math.pow(Math.sqrt(3) - Math.sqrt(3) * (1 - 2 * Cx * Q * T / (W * Ch)), 2) / (2 * Math.sqrt(12)));
    let S = parseFloat((W / Q) * Cd + (Q / 2 + P - b + K * sigma) * Cx * T + sigma * F * Ch * (W / Q));
    let Nh = parseFloat(sigma * F);
    let Z = parseFloat(1 - sigma * F / (Vmin + sigma * Math.sqrt(3)));
    let Cp = parseFloat(P - b);

    document.querySelector('.container2').style.display = 'flex';

    const arrOfAnswers = [parseFloat(parseFloat(Q).toFixed(2)), parseFloat(parseFloat(b).toFixed(2)), parseFloat(parseFloat(sigma).toFixed(2)), parseFloat(parseFloat(P).toFixed(2)), parseFloat(parseFloat(K).toFixed(2)), parseFloat(parseFloat(F).toFixed(2)), parseFloat(parseFloat(S).toFixed(2)), parseFloat(parseFloat(Nh).toFixed(2)), parseFloat(parseFloat(Z).toFixed(2)), parseFloat(parseFloat(Cp).toFixed(2))];

    document.querySelectorAll('.newValue').forEach((span, i) => span.remove());

    document.querySelectorAll('.outputSpan').forEach((span, i) => span.innerHTML += ' <span class="newValue">' + arrOfAnswers[i] + '</span>');

    console.log(arrOfAnswers);
}

function test1Func() {
    const arrOfValues = [10000, 100, 8, 10, 1, 10, 2];
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => input.value = arrOfValues[i]);
    console.log(arrOfValues);
    outputFunc();
}

function test2Func() {
    const arrOfValues = [15, 5, 0, 16, 1, 2, 10];
    let inputs = document.querySelectorAll('input');
    inputs.forEach((input, i) => input.value = arrOfValues[i]);
    console.log(arrOfValues);
    outputFunc();
}