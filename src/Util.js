Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {
  var num = 1;
  for(i= 1; i<= n ;i++)
  	num *= i;

  return num;
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	return Util.factorial(n) / Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	return Util.factorial(n) / (Util.factorial(n - r) * Util.factorial(r));
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => true
 * Util.isPrime(6) => falses
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
    var prime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (n > 1);
};






/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
	var sum = 0;
	for(i=0;i<=n;i++)
		if(Util.isPrime(i))
			sum += i;

	return sum;
};

/**
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
 */
Util.fizzBuzz = function(n) {
	var fizz = "Fizz";
	var buzz = "Buzz";
	var fizzBuzz = "FizzBuzz";

	var res = [];

	for(i = 1;i<=n;i++){
		if((i % 3 == 0) && (i % 5 == 0))
			res.push(fizzBuzz);
		else if(i % 3 == 0)
			res.push(fizz);
		else if(i % 5 == 0)
			res.push(buzz);
		else
			res.push(i);
	}
	return res;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
	var res = "";
	for(i = 0 ; i<phrase.length;i++){
			if(phrase[i] == " ")
				res += " ";
			else
			 	res += String.fromCharCode(phrase[i].charCodeAt(0) + 1);
		}

return res;

};
