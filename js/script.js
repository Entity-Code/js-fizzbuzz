var lista = document.getElementById("lista");
var stampa = document.getElementById("stampa");

stampa.addEventListener("click",
	function() {
      // conto da 1 a 100
     for (var i = 1; i <= 100; i++) {
        // se divisibile per 3 e 5
        if( i % 3 == 0 && i % 5 == 0) {
           document.getElementById("lista").innerHTML = "FizzBuzz";
           // se divisibile per 3
        } else if( i % 3 == 0 ) {
              document.getElementById("lista").innerHTML = "Fizz";
           }
           // se divisibile per 5
           else if( i % 5 == 0 ) {
             document.getElementById("lista").innerHTML = "Buzz";
           }
           // se non divisibile per entrambi
           else{
             document.getElementById("lista").innerHTML = i;
           }
     }

     // display
     lista.className = "dBlock";
   }
);
