function firstFunc(argument) {
	console.log(`Я выполнилась`);
}


function square(x) {
	const num = prompt(`Укажите число`);
	
	if(num === null) {
		console.log(`Число не переданно`)
	} else if (isNaN(num)) {
		console.log(`Значение x не является числом`)
	} else {
		console.log (num * num)
	}
}


function saySomething(message, text) {
	alert(message);
	console.log(text);
}
saySomething(`Ten`, `Some text`, `Animal`, `24`,`32423423`);


function add(x = 2, y = 3) {
	console.log(+x + +y);
}


function showParams(...table) {
	return table
}
showParams(23, 46, `chair`, Math.PI, Math.E, `Tree`);


function addTwo(a, b) {
	console.log(+a + +b);
	return +a + +b;
}
const result = addTwo(2, 5);


function R2D2(x) {
	console.log(4 * 3.14 * (x * x));
	return 4 * 3.14 * (x * x);
}
function greetings(a) {
	const vag  = prompt(`Укажите кто вы?`);
	
	if(vag === 'user') {
		console.log(`Hello`)
	} else if (vag === 'admin') {
		console.log(`Greetings`)
	} else {
		console.log ('Значение не указано')
	}
}


((a, b) => {
	if (a < b) {
		console.log(a);
	} else {
		console.log(b);
	}
})(2, 3)
