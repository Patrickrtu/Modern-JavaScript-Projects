const defaultResult = 0;
let currentResult = 0;
function add(num1, num2) {
	const result = num1 + num2;
	return result;
}

addBtn.addEventListener("click", add);

// currentResult = add(1, 2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
