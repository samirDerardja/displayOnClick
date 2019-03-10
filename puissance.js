
    
    function puissance(){
        var nombre = 5;
        var puissance = 3;
        var resultat = 1;

        for (i=0; i < puissance; i++){
            resultat *= nombre;

            // Affichage du résultat
        var result = document.getElementById("resultat");
                result.innerHTML = resultat;
        }
    }
