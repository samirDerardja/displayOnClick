   
    function symbole(){
        var symbole = "";

        for(i=0;i<10;i++){

                for(k=0; k <= i; k++){
                symbole += "*";
            }

            symbole += "<br>";
        }

            var result = document.getElementById("resultat");
            result.innerHTML = symbole;
    }

    
