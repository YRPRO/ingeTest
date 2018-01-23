/**
 * TEST
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 * Util.factorial = function(n) 
 */
describe("Calcule la factorielle d'un nombre", function(){
	it("fact(0) Should be equal to 1",function(){
		var res = Util.factorial(0);
		expect(res).toEqual(1);
	});

	it("fact(1) Should be equal to 1",function(){
		var res = Util.factorial(1);
		expect(res).toEqual(1);
	});

	it("fact(5) Should be equal to 120",function(){
		var res = Util.factorial(5);
		expect(res).toEqual(120);
	});

	it("fact(10) Should be equal to 3628800",function(){
		var res = Util.factorial(10);
		expect(res).toEqual(3628800);
	});

});
	

/**
 * TEST
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 *Util.arrangement = function
 */

describe("Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.", function(){
	it("arrangement(20,3) Should be equal to 6 840",function(){
		var res = Util.arrangement(20,3);
		expect(res).toEqual(6840);
	});

	it("arrangement(0,0) Should be equal to 0",function(){
		var res = Util.arrangement(0,0);
		expect(res).toEqual(1);
	});

	it("arrangement(20,3) Should be equal to 6 840",function(){
		var res = Util.arrangement(20,3);
		expect(res).toEqual(6840);
	});

	it("arrangement(10,10) Should be equal to 3 628 800",function(){
		var res = Util.arrangement(10,10);
		expect(res).toEqual(3628800);
	});

	it("arrangement(10,1) Should be equal to 10",function(){
		var res = Util.arrangement(10,1);
		expect(res).toEqual(10);
	});


});



/**
 * TEST
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 * Util.combination 
 */

describe("Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.", function(){
	it("combination(50,5) Should be equal to 2118760",function(){
		var res = Util.combination(50,5);
		expect(res).toEqual(2118760);
	});

	it("combination(1,1) Should be equal to 1",function(){
		var res = Util.combination(1,1);
		expect(res).toEqual(1);
	});

	it("combination(10,5) Should be equal to 6 840",function(){
		var res = Util.combination(10,5);
		expect(res).toEqual(252);
	});

});




/**
 * TEST
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 * Util.isPrime = function(n)
 */


describe("Détermine si n est un nombre premier.", function(){
	it("isPrime(5) Should be equal to true",function(){
		var res = Util.isPrime(5);
		expect(res).toBe(true);
	});

	it("isPrime(6) Should be equal to false",function(){
		var res = Util.isPrime(6);
		expect(res).toBe(false);
	});	


	it("isPrime(10) Should be equal to false",function(){
		var res = Util.isPrime(10);
		expect(res).toBe(false);
	});	

});

/**
 *TEST
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 * Util.sumPrime = function(n)
 */


describe("Additionne l'ensemble des nombres de 2 à n", function(){
	it("sumPrime(6) Should be equal to 10",function(){
		var res = Util.sumPrime(6);
		expect(res).toEqual(10);
	});

	it("sumPrime(8) Should be equal to 10",function(){
		var res = Util.sumPrime(8);
		expect(res).toEqual(17);
	});

});


/**
 *TEST
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 * Util.fizzBuzz = function(n)
 */

describe("Cette méthode doit retourner un tableau de 1 à n",function(){
	it("fizzBuzz 15 should be : [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]",function(){
		res = Util.fizzBuzz(15);
		expect(res).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
	});
});


/**
 *TEST
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 * Util.cipher = function (phrase)
 */
 describe("Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.",function(){
	it("cipher Test Unitaire should be : Uftu Vojubjsf",function(){
		res = Util.cipher("Test Unitaire");
		console.log(res);
		expect(res).toBe("Uftu Vojubjsf");
	});
});
