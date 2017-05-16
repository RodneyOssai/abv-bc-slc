let getPrimes = (n) => {
  
          if ((typeof n === 'string') || (n === undefined)) {
            primeNumbers = "Invalid Input";
        } else if (!(n > -1)) {
            primeNumbers = "Negative Numbers Not Allowed";
        } else {
              let maxSize = n + 1 ;//Find all prime numbers less than the input
              let numberList = []; //Initialize an empty array
              primeNumbers =[];
              //Exclude all even numbers from the checking except 2
              numberList[2] = 1;
              for(let i = 3; i < maxSize; i+=2){
                numberList[i] = 1;
              }
              //Exclude all other non prime numbers
              for(let i = 3; i < maxSize; i+=2){
                for(let j = 3; i * j < maxSize; j+=2){
                  numberList[i*j] = 0;
                } 
              }
              // after excluding this two, what remaining must be a prime number so we push it into the prime numbers array
              for(let i = 2; i < maxSize; i++){
                  if (numberList[i]){
                    primeNumbers.push(i);
                  }
              }
        }
return primeNumbers;
};