// Calculator using if else
console.log("Calculator Result");

let a = 10;
let b = 0;

let operator = "/";

if (operator === "+")

{console.log(a+b);}

else if(operator === "-")

    {console.log(a-b);}

    else if (operator === "*")

        {console.log(a*b);}

        else if (operator === "/")
        {
            if (b != 0)
           {console.log(a/b);}
            else
               { console.log("Denominator cannot be zero");
            }
        }

            else
            {console.log("Invalid operator used");}



// Calculator using Switch
console.log("Calculator Result");

let c = 100;
let d = 10;

let operator1 = "%";

switch(operator1)
{
    case "+":
        console.log(c+d);
    break;

    case "-":
        console.log(c-d);
    break;

     case "*":
        console.log(c*d);
     break;

    case "/":
         if (d != 0)
           {console.log(c/d);}
            else
               { console.log("Denominator cannot be zero");
            }
     break;

    default:
        console.log("Invalid operator used");
    
}










