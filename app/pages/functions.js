const add = ( one, two) => {
	one = +one;
	two = +two;
	console.log(one + two);
};
add(1,'3');

const length = r => {
	console.log(2*r*Math.PI);
};
length(10);

const test = (a,b,c) => {
	if(a==='')
	{alert('Вы не указали значения а');}  //Вывод предупреждения об ошибке
	else
	if(b==='')
	{alert('Вы не указали значения b');}
	else 
	if(c==='')
	{alert('Вы не указали значения с');}
	const t=b*b-4*a*c;
	console.log(t);
};

test(2,34,5);

const square = c => {
	console.log(c*c);
};

square(2);

const sumTo = c => {
	let sum = 0 ;
	let i = 0;
	while(i<=c){
		sum +=i;
		i++;
	}
	console.log(sum);
};

sumTo(2);

function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log( fib(3) );

function pow(x, n) {
	if (n !== 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
		return x * pow(x, n - 1);
	} else {
		return x;
	}
}

console.log( pow(2, 3) );

function factorial(n) {
	return n !== 1 ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120