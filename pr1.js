let num = 13;
let counter = 0;
for(let i = 1; i <= num; i++) {
        
        if(num % i == 0) {
            counter++;
        }
       
    }
     
      
if(counter == 2) {
     console.log(num, "is a Prime Number");
     }
     else {
     console.log(num, "is not a Prime Number");
     }
