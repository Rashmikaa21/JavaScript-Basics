//  Even or Odd

const check = (n) => 
{
    if (n % 2 === 0) 
    {
        return "Even";
    } 
    else 
    {
        return "Odd";
    }
};
console.log(check(4)); 
console.log(check(7)); 
console.log(check(0)); 



// Result Evaluator — Pass or Fail

function evaluateResult(marks) 
{
    if (marks < 0 || marks > 100) 
    {
        console.log("Invalid marks");
        return null;
    } 
    else if (marks >= 50) 
    {
        return "Pass";
    } 
    else 
    {
        return "Fail";
    }
}
console.log(evaluateResult(75));  
console.log(evaluateResult(40));  
evaluateResult(120);    



// Maximum Finder — Largest of Three Numbers

const findMax = (a, b, c) => 
{
    let largest = a;

    if (b > largest) 
    {
        largest = b;
    }

    if (c > largest) 
    {
        largest = c;
    }

    return largest;
};
console.log(findMax(10, 25, 15)); 
console.log(findMax(5, 3, 8));    
console.log(findMax(9, 9, 2));    



// Accumulator — Sum from 1 to N

 function sumToN(n) 
 {
    let sum = 0;

    for (let i = 1; i <= n; i++) 
    {
        sum += i;
    }
    return sum;
}
console.log(sumToN(5));  
console.log(sumToN(10)); 


// Multiplication Table Generator

function printTable(n) 
{
    for (let i = 1; i <= 10; i++) 
    {
         console.log(n + " x " + i + " = " + (n * i));
    }
}
printTable(3);



// Digit Counter — Number Length Finder

function countDigits(n) 
{
    let num1 = 0;

    while (n >= 1) 
    {
        n = n / 10;
        num1++;
    
    }

    return num1;
}
console.log(countDigits(1234));  
console.log(countDigits(9));     
console.log(countDigits(100000)); 



// Number Reverser

function reverseNumber(n) 
{
    let num1 = 0;

    while (n > 0) 
    {
           let num2 = n % 10;
           num1 = num1 * 10 + num2;
           n = (n - num2) / 10;
    }
    return num1;
}
console.log(reverseNumber(1234)); 
console.log(reverseNumber(500)); 
console.log(reverseNumber(91));  



// Factorial Engine

function factorial(n) 
{
    let result = 1;
    for (let i = 1; i <= n; i++) 
    {
        result = result * i;
    }
    return result;
}
console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(1)); 



// Prime Validator

function isPrime(n) 
{
    if (n < 2) 
    {
        return false;
    }
    for (let i = 2; i < n; i++) 
    {
        if (n % i === 0) 
        {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(10)); 
console.log(isPrime(2));  




// Pattern Builder — Star Triangle

function printPattern(n) 
{
    for (let i = 1; i <= n; i++) 
    {
        let s = "";
        for (let j = 1; j <= i; j++) 
        {
            s += "*";
        }
        console.log(s);
    }
}
printPattern(4);

