var age = Number(prompt("What is your age: "));

 if(age < 0) {
        console.log("Invalid age submitted (negative)");
 
 } 
 
 else if(age === 21) {
        console.log("happy 21st birthday!!");
}  

 else if(age % Math.sqrt(age) === 0) {
        console.log("Perfect Square");
} 

 else if(age % 2 !== 0)
    {
        console.log("Your age is odd");
    }     

 else {
            console.log("your age must be neither negative, 21, perfect square or odd, but just even");
    }
