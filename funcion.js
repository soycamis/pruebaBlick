function	verificarNumero(num) {


	if (num % 2 === 0) {

		console.log(`el numero ${num} es par!`);

	}

	let limite = Math.round(Math.sqrt(num));
	for (var i = 2; i <= limite; i++) {
		if (num % i === 0) {
			return false;
		}
		console.log(`el numero ${num} es primo!`);
	}

}

[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(verificarNumero)
