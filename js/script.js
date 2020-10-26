// conto da 1 a 100
for (var i = 1; i <= 100; i++) {
   // se % per 3 e 5
   if( i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
      // se divisibile per 3
   } else if( i % 3 == 0 ) {
         console.log("fizz");
      }
      // se divisibile per 5
      else if( i % 5 == 0 ) {
         console.log("Buzz");
      }
      // se non divisibile per entrambi
      else{
        console.log(i);
      }
}
