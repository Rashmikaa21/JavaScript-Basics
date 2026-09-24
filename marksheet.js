// Student Marksheet 

let studentName = "Rashmikaa";
console.log("Rashmikaa's 2026 Exam Results");

let Marks = 90;
let Internals = 5;
console.log("Marks = ",Marks +=Internals);

let Grade;
let Result = (Marks >= 50 ?   "Pass" : "Fail");
console.log("Results = ",Result);

if(Marks >= 90)
{
    Grade = "A";
}
 
else if(Marks >= 70)
{
    Grade = "B";
}

else if(Marks >= 50)
{
   Grade = "C";
}

else
{
    Grade = "F";
}

console.log("Grade = ",Grade)




// switch(Grade)
// {
//     case "A" :
//         console.log("Remarks = Execellent");
//     break

//     case "B" :
//         console.log("Remarks = Good");
//     break

//     case "C" :
//         console.log("Remarks = Average");
//     break

//     default :
//         console.log("Remarks = Needs Improvement");
// }



let Remarks;

switch(Grade)
{
    case "A" :
        Remarks = "Execellent";
    break

    case "B" :
        Remarks =  "Good";
    break

    case "C" :
        Remarks = "Average";
    break

    default :
        Remarks = "Needs Improvement";

}
console.log("Remarks =", Remarks)
