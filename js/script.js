var lista = document.getElementById("lista");
var stampa = document.getElementById("stampa");
var back = document.getElementById("back");

stampa.addEventListener("click",
	function() {
      // conto da 1 a 100
     for (var i = 1; i <= 100; i++) {
        // se divisibile per 3 e 5
        if( i % 3 == 0 && i % 5 == 0) {
           document.getElementById("lista").innerHTML += "<p>FizzBuzz</p>";
           // se divisibile per 3
        } else if( i % 3 == 0 ) {
              document.getElementById("lista").innerHTML += "<p>Fizz</p>";
           }
           // se divisibile per 5
           else if( i % 5 == 0 ) {
             document.getElementById("lista").innerHTML += "<p>Buzz</p>";
           }
           // se non divisibile per entrambi
           else{
             document.getElementById("lista").innerHTML += "<p>" + i + "</p>" ;
           }
     }

     // display
     lista.style.display = "block";
     back.style.display = "block";
     stampa.style.display = "none";

   }
);

// reset
back.addEventListener("click",
	function() {
      lista.style.display = "none";
      stampa.style.display = "block";
	}
);
