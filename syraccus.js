function syraccus() {
    let nombre = 100;
    let tableau = [];

    for (i = 0; i < 20; i++){
        if (nombre % 2 == 0) {
            nombre /= 2;
        } else {
            nombre = (nombre * 3) + 1;
        }

        tableau.push(nombre);
    }

    let result = document.getElementById("resultat");
    result.innerHTML = tableau;

}