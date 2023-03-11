let i;
let number = prompt("Enter a number: ");
let fact = 1;

for(i=1;i<=number;i++){    
    fact=fact*i;    
}    
alert(`The factorial of ${number} is ${fact}`);