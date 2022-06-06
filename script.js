//  Primality Test
// In function isPrime Time complexity is On
const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(7));

// Better solution in Time complexity
// in function improvedIsPrime Time complexity is O(sqrt(n))
const improvedIsPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
};

console.log(improvedIsPrime(7));
