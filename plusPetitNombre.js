   
    function smallest(){
            let tableauPetit = [53,56,1,130,45,58];
            let valeur = tableauPetit[0];

        
            for(i=1;i<tableauPetit.length;i++){
                if(tableauPetit[i] < valeur){
                    valeur = tableauPetit[i];
                }
            }
            var result = document.getElementById("resultat");
            result.innerHTML = "Le plus petit chiffre est " + valeur;
        }