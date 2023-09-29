function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play(); 
}


const Listadeteclas = document.querySelectorAll('.tecla')

let contador = 0;

//enquanto
while (contador < Listadeteclas.length) {
    Listadeteclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);

}